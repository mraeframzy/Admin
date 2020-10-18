import { Component, OnInit } from '@angular/core';
import { BranchManagementService } from 'src/app/Shared/branch-management.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CompaniesMangementService } from 'src/app/Shared/companies-mangement.service';
import { NotificationService } from 'src/app/Shared/notification.service';
import { HttpRequest } from '@angular/common/http';
import { GlobalConstantsService } from 'src/app/Shared/global-constants.service';
import { SemiPerminantService } from 'src/app/Shared/semi-perminant.service';
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DialogService } from 'src/app/Shared/dialog.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styles: []
})
export class CreateBranchComponent implements OnInit {

  constructor(public service: BranchManagementService, private currentRoute: ActivatedRoute, private notificationservice: NotificationService, private router: Router, private constantservice: GlobalConstantsService, private semiperminantservice: SemiPerminantService, private dialogservice: DialogService) { }
  Company_Id: number = 0;
  Branch_area_id: number = 0;
  b_Lat : number = 0;b_Long : number = 0;
  Cities = [];
  Areas = [];

  ngOnInit(): void {
    this.Company_Id = parseInt(this.currentRoute.snapshot.paramMap.get('Company_id'));
    this.service.FG_Branches.controls['Branch_Name'].enable();
    this.service.FG_Branches.controls['Branch_Name_Arabic'].enable();
    this.create_branch();
  }


  create_branch() {
    this.service.FG_Company_Label.controls['$Company_Id'].setValue(this.Company_Id);
    //company label
    this.service.Company_Label(this.Company_Id).subscribe((res: any) => {
      this.service.FG_Company_Label.controls['Company_Name'].setValue(res.company_Name);
      this.service.FG_Company_Label.controls['Company_Name_Arabic'].setValue(res.company_Name_Arabic);
    },
      err => {
        this.notificationservice.send_fail_message('Company does not exists');
        this.router.navigate(['/main/employee/o_companies_manegment']);
      })
    //load cities
    this.semiperminantservice.List_Cites(1).subscribe(res => {
      this.Cities = res as [];
    }, err => { this.notificationservice.send_fail_message("Something went wrong") });
    this.service.reset_FG_Branches();
  }

  change_city() {
    this.semiperminantservice.List_Areas(this.service.FG_Branches.controls['Branch_City'].value).subscribe(res => {
      this.Areas = res as [];
    }, err => { this.notificationservice.send_fail_message("Something went wrong") });
  }

  open_map(numb , lat, long) {
    if (numb == undefined) { this.notificationservice.send_fail_message("Please select Branch City and Area first");}
    else {
      let x = this.Areas.find(x => x.area_ID == numb).area_Center_Lat;
      let y = this.Areas.find(x => x.area_ID == numb).area_Center_Long;
      if (lat != 0 && long != 0) {
        this.dialogservice.open_location_map(lat, long).afterClosed().subscribe(res => {
          if (res.lat != 0 && res.lng !=0 ) {
            this.service.FG_Branches.controls['Branch_Lat'].setValue(res.lat);
          this.service.FG_Branches.controls['Branch_Long'].setValue(res.lng);}
        })
      }
      else if (x == null || y == null) {
        this.dialogservice.open_location_map(0, 0).afterClosed().subscribe(res => {
          if (res.lat != 0 && res.lng !=0 ) {
            this.service.FG_Branches.controls['Branch_Lat'].setValue(res.lat);
          this.service.FG_Branches.controls['Branch_Long'].setValue(res.lng);}
        })
      }
      else {
        this.dialogservice.open_location_map(x, y).afterClosed().subscribe(res => {
          if (res.lat != 0 && res.lng !=0 ) {
            this.service.FG_Branches.controls['Branch_Lat'].setValue(res.lat);
          this.service.FG_Branches.controls['Branch_Long'].setValue(res.lng);
          }
        })
      }
    }
  }
  open_link() { this.dialogservice.open_location_link().afterClosed().subscribe(res => { 
    if (res.lat != 0 && res.lng !=0 ) {
      this.service.FG_Branches.controls['Branch_Lat'].setValue(res.lat);
    this.service.FG_Branches.controls['Branch_Long'].setValue(res.lng);
  }
  }) }
  open_manual() { this.dialogservice.open_location_manual().afterClosed().subscribe(res => { 
    if (res.lat != 0 && res.lng !=0 ) {
      this.service.FG_Branches.controls['Branch_Lat'].setValue(res.lat);
    this.service.FG_Branches.controls['Branch_Long'].setValue(res.lng);
  }
  }) }
  Confirm_location(x,y){if (x==0 || y==0 )
  {this.service.FG_Branches.controls['Is_valid_loc'].setValue(false);}
  else{this.service.FG_Branches.controls['Is_valid_loc'].setValue(true);}}

  execute_create(form_values: FormGroup){
    this.Confirm_location(form_values.controls['Branch_Lat'].value,form_values.controls['Branch_Long'].value)
    if (form_values.valid) {
      var body={
        "Branch_Name" : form_values.controls['Branch_Name'].value,
        "Branch_Description" :  form_values.controls['Branch_Description'].value,
        "Branch_Note" : form_values.controls['Branch_Note'].value,
        "Branch_Admin_Note" : form_values.controls['Branch_Admin_Note'].value,
        "Branch_status" : 1,
        "Branch_Long" : form_values.controls['Branch_Long'].value,
        "Branch_Lat" : form_values.controls['Branch_Lat'].value,
        "Branch_Address" : form_values.controls['Branch_Address'].value,
        "Branch_Area" : +form_values.controls['Branch_Area'].value,
        "Branch_Description_Arabic" :form_values.controls['Branch_Description_Arabic'].value,
        "Branch_Name_Arabic" : form_values.controls['Branch_Name_Arabic'].value,
        "Branch_Phone_1" : form_values.controls['Branch_Phone_1'].value,
        "Branch_Phone_2" : form_values.controls['Branch_Phone_2'].value,
        "Branch_Phone_3" : form_values.controls['Branch_Phone_3'].value,
        "Branch_Owner_Phone" : form_values.controls['Branch_Owner_Phone'].value,
        "Branch_Is_Main_Branch" : form_values.controls['Branch_Is_Main_Branch'].value
      }
      this.service.Create_Branch(body , this.Company_Id).subscribe(res=>{this.notificationservice.send_success_message("Branch created");
      this.router.navigateByUrl('/main/employee/editbranch/'+ res);},
        err=>{this.notificationservice.send_fail_message("Could not create the branch.")})
    }else{this.notificationservice.send_fail_message("Branch Could not be created") ;}
  }
}
