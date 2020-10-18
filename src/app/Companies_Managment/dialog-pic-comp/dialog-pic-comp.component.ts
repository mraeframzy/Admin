import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { CompaniesMangementService } from 'src/app/Shared/companies-mangement.service';
import { NotificationService } from 'src/app/Shared/notification.service';
import { MatRadioButton } from '@angular/material/radio';
import { DialogUserDetailsComponent } from 'src/app/users_manegment/dialog-user-details/dialog-user-details.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dialog-pic-comp',
  templateUrl: './dialog-pic-comp.component.html',
  styles: []
})
export class DialogPicCompComponent implements OnInit {
  @ViewChild('general')
  general1: MatRadioButton;
  @ViewChild('branch')
  branch1: MatRadioButton;
  @ViewChild('owner')
  owner1: MatRadioButton;
  constructor(public service: CompaniesMangementService, private notificationservice: NotificationService, @Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<DialogUserDetailsComponent>, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.service.formGroup_Company_Picture_upload.controls['$Company_Picture_Id'].setValue(this.data.message);
    this.service.formGroup_Company_Picture_upload.controls['Company_Picture_Company'].setValue(this.data.Company_id);
    
    if (this.data.message > 0) { 
      this.Load_Pic() 
    } else {
      this.service.formGroup_Company_Picture_upload.reset();
      this.service.initial_Pic_Name = '';
      this.service.formGroup_Company_Picture_upload.controls['Dummy_Name_Already_Used'].setValue(true);
    }

  }
  imgSrc: string = '/assets/Photos/Company_Photos/click here to upload.jpeg';
  selectedImg: any = null;

  showPreview(event: any) {
    if (event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e: any) =>
        this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0])
      this.selectedImg = event.target.files[0];
      this.service.formGroup_Company_Picture_upload.controls['Dummy_Has_Photo'].setValue(true);
    } else {
      this.imgSrc = '/assets/Photos/Company_Photos/click here to upload.jpeg';
      this.selectedImg = null;
      this.service.formGroup_Company_Picture_upload.controls['Dummy_Has_Photo'].setValue(false);
    }
  }

  upload_photos(fg: FormGroup, Image_1: File) {
    this.service.formGroup_Company_Picture_upload.controls['Company_Picture_Store_Name'].setValue('pic1');
    this.service.formGroup_Company_Picture_upload.controls['Company_Picture_Extention'].setValue('Pic');
    this.service.formGroup_Company_Picture_upload.controls['Company_Picture_Is_Owner_Identity'].setValue(this.owner1.checked);
    this.service.formGroup_Company_Picture_upload.controls['Company_Picture_Is_Branch_Identity'].setValue(this.branch1.checked);    
    this.service.formGroup_Company_Picture_upload.controls['Company_Picture_Company'].setValue(this.data.Company_id);
    console.log(this.service.formGroup_Company_Picture_upload.value);
    if (this.service.formGroup_Company_Picture_upload.valid) {
      this.service.upload_company_image(this.service.formGroup_Company_Picture_upload.value, this.selectedImg).subscribe(
        res => {
          this.notificationservice.send_success_message('Picture Uploaded Successfully');
          this.closeDialog()
        }, err => {
          this.notificationservice.send_fail_message('Picture upload failed');
        });
    }
    else{this.notificationservice.send_fail_message('Upload Picture Failed');}
  }
  select_pic_cat() { this.service.formGroup_Company_Picture_upload.controls['Dummy_Has_Pic_Type'].setValue(true); }
  closeDialog() { this.dialogRef.close(); }
  check_pic_name(Pic_Caption) {    //
    if(Pic_Caption !=''){      
    this.service.check_company_Pic_name(this.service.formGroup_Company_Picture_upload.controls['Company_Picture_Display_Name'].value, this.data.Company_id);}
  }
  Load_Pic() {
    //console.log(this.service.formGroup_Company_Picture_upload.controls['Company_Picture_Company'].value);  
    this.service.Load_Pic_ID(this.service.formGroup_Company_Picture_upload.controls['$Company_Picture_Id'].value, this.service.formGroup_Company_Picture_upload.controls['Company_Picture_Company'].value).subscribe((res: any) => {
      this.imgSrc = environment.Image_Folder_Path + res.company_Picture_Company + '/' + res.company_Picture_Store_Name + res.company_Picture_Extention;
      this.service.formGroup_Company_Picture_upload.patchValue({
        Company_Picture_Store_Name: res.company_Picture_Store_Name,
        Company_Picture_Display_Name: res.company_Picture_Display_Name,
        Company_Picture_Extention: res.company_Picture_Extention,
        Company_Picture_Comment: res.company_Picture_Comment,
        Company_Picture_Is_Owner_Identity: res.company_Picture_Is_Owner_Identity,
        Company_Picture_Is_Branch_Identity: res.company_Picture_Is_Branch_Identity,
        Dummy_Has_Photo : true,
        Dummy_Name_Already_Used : true,
        Dummy_Has_Pic_Type : true,
      });
      this.service.initial_Pic_Name = res.company_Picture_Display_Name
      if(res.company_Picture_Is_Owner_Identity){this.owner1.checked = true;}
      else if (res.company_Picture_Is_Branch_Identity){this.branch1.checked = true;}
      else{this.general1.checked = true;}
    }, err => { this.notificationservice.send_fail_message('Unable to load Image'); this.closeDialog(); });
  }
  update_photos(){
    if (this.service.formGroup_Company_Picture_upload.valid) {      
      this.service.formGroup_Company_Picture_upload.controls['Company_Picture_Is_Owner_Identity'].setValue(this.owner1.checked);
      this.service.formGroup_Company_Picture_upload.controls['Company_Picture_Is_Branch_Identity'].setValue(this.branch1.checked);

      this.service.Update_company_image(this.service.formGroup_Company_Picture_upload.value,false).subscribe(
        res => {
          this.notificationservice.send_success_message('Picture Updated Successfully');
        }, err => {
          this.notificationservice.send_fail_message('Picture update failed');
        });
    }
  }
}