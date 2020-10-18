import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CompaniesMangementService } from 'src/app/Shared/companies-mangement.service';
import { GlobalConstantsService } from 'src/app/Shared/global-constants.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NotificationService } from 'src/app/Shared/notification.service';
import { FormGroup, FormControl } from '@angular/forms';
import { DialogService } from 'src/app/Shared/dialog.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styles: []
})
export class CreateCompanyComponent implements OnInit {

  constructor(public service: CompaniesMangementService, private globalservice: GlobalConstantsService, private currentRoute: ActivatedRoute, private datePipe: DatePipe, public notificationService: NotificationService, private dialogservice: DialogService, private router : Router) { }
  owners: any = [];
  check_company_name_bool: boolean = false;
  check_company_name_arabic_bool: boolean = false;
  ngOnInit(): void {
    this.owners = [{ id: 0, name: 'Please Search for Owner' }];
    this.service.reset_create_company_fg();
    this.service.formGroup_Create_Company.controls['Company_Owner'].setValue(0);
  }
  create_company(fg: FormGroup) {
    //console.log('fg.value');
    if (fg.valid) {
      let x = fg.controls['Company_Owner'].value;
      fg.controls['Company_Owner'].setValue(+x);      
      this.service.Create_Company(fg.value).subscribe(res => {
        this.owners = [{ id: 0, name: 'Please Search for Owner' }];
        this.service.reset_create_company_fg();
        this.notificationService.send_success_message("Company Created");
        this.router.navigate(['/main/employee/edit_company/'+ res]);
      }, err => { this.notificationService.send_fail_message("Could not create Compay"); });
    }
    else{this.notificationService.send_fail_message("Compay Could not be created") ;}
  }
  openUserDialog() {
    this.dialogservice.opensearchuserDialog().afterClosed().subscribe(res => {
      this.owners = [res];
      this.service.formGroup_Create_Company.controls['Company_Owner'].setValue(res.id);
    }
    );
  }
  openUserDetails(fg: FormGroup) {
    let x = fg.controls['Company_Owner'].value;
    var y = +x;
    if (y == 0) {
      this.dialogservice.opensearchuserDialog().afterClosed().subscribe(res => {
        this.owners = [res];
        this.service.formGroup_Create_Company.controls['Company_Owner'].setValue(res.id);
      })
    }
    else {
      this.dialogservice.openuserdetailsDialog(y).afterClosed().subscribe(res => { 
        this.owners = [res];
        this.service.formGroup_Create_Company.controls['Company_Owner'].setValue(res.id);
      })
    }
  }
  
}