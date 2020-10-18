import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchManagementService } from 'src/app/Shared/branch-management.service';
import { DialogService } from 'src/app/Shared/dialog.service';
import { GlobalConstantsService } from 'src/app/Shared/global-constants.service';
import { NotificationService } from 'src/app/Shared/notification.service';
import { SemiPerminantService } from 'src/app/Shared/semi-perminant.service';

@Component({
  selector: 'app-update-branches',
  templateUrl: './update-branches.component.html',
  styles: []
})
export class UpdateBranchesComponent implements OnInit {

  constructor(public service: BranchManagementService, private currentRoute: ActivatedRoute, private notificationservice: NotificationService, private router: Router, private constantservice: GlobalConstantsService, private semiperminantservice: SemiPerminantService, private dialogservice: DialogService) { 
    //load cities
    this.semiperminantservice.List_Cites(1).subscribe(res => {
      this.Cities = res as [];
    }, err => { this.notificationservice.send_fail_message("Something went wrong") });
    //load branch statuses
    this.constantservice.company_Statuses().subscribe(res => {
      this.company_stattus = res as [];
    }, err => { this.notificationservice.send_fail_message("Something went wrong") });
  }
  //Company_Id: number = 0;
  Branch_Id: number = 0;
  Branch_area_id: number = 0;
  b_Lat : number = 0;b_Long : number = 0;
  Cities = [];
  Areas = [];
  company_stattus = [];
  ngOnInit(): void {
    //this.Company_Id = parseInt(this.currentRoute.snapshot.paramMap.get('Company_Id'));
    this.Branch_Id = parseInt(this.currentRoute.snapshot.paramMap.get('branch_id'));
    
    this.service.FG_Branches.controls['Branch_Name'].disable();
    this.service.FG_Branches.controls['Branch_Name_Arabic'].disable();
    
      this.service.reset_FG_Branches();
      this.load_branch();
  }
  company_label(Company_Id) {
    this.service.FG_Company_Label.controls['$Company_Id'].setValue(Company_Id);
    //company label
    this.service.Company_Label(Company_Id).subscribe((res: any) => {
      this.service.FG_Company_Label.controls['Company_Name'].setValue(res.company_Name);
      this.service.FG_Company_Label.controls['Company_Name_Arabic'].setValue(res.company_Name_Arabic);
    },
      err => {
        this.notificationservice.send_fail_message('Company does not exists');
        this.router.navigate(['/main/employee/o_companies_manegment']);
      })    
  }
  load_branch(){
    //load branch    
    this.service.branch_Details(this.Branch_Id).subscribe((res :any)=>{
      this.service.FG_Branches.patchValue({
      $Branch_ID: res.branch_ID,
      Branch_Name: res.branch_Name,
      Branch_Description: res.branch_Description,
      Branch_Related_Company: res.branch_Related_Company,
      Branch_Note: res.branch_Note,
      Branch_Admin_Note: res.branch_Admin_Note,
      Branch_Rate: res.branch_Rate,
      Branch_status: res.branch_status,
      Branch_Long: res.branch_Long,
      Branch_Lat: res.branch_Lat,
      Branch_Address: res.branch_Address,
      Branch_Area: res.branch_Area,
      Branch_City : res.area_Realated_City,
      Branch_Updater: res.userName,
      Branch_Update_Time: res.branch_Update_Time,
      Branch_Description_Arabic: res.branch_Description_Arabic,
      Branch_Name_Arabic: res.branch_Name_Arabic,
      Branch_Phone_1: res.branch_Phone_1,
      Branch_Phone_2: res.branch_Phone_2,
      Branch_Phone_3: res.branch_Phone_3,
      Branch_Owner_Phone: res.branch_Owner_Phone,
      Branch_Ban_Count: res.branch_Ban_Count,
      Branch_Hot_Ban_Count: res.branch_Hot_Ban_Count,
      Branch_Ban_Date: res.branch_Ban_Date,
      Branch_Ban_Period: res.branch_Ban_Period,
      Branch_Is_Main_Branch: res.branch_Is_Main_Branch
      })
      this.change_city();
      
      this.company_label(res.branch_Related_Company); 
      //console.log(this.Company_Id);
    });
  }
  change_city() {
    this.semiperminantservice.List_Areas(this.service.FG_Branches.controls['Branch_City'].value).subscribe(res => {
      this.Areas = res as [];
    }, err => { this.notificationservice.send_fail_message("Something went wrong") });
  }

  open_map(numb,lat,long) {
    if (numb == undefined) { this.notificationservice.send_fail_message("Please select Branch City and Area first")}
    else {
      let x = this.Areas.find(x => x.area_ID == numb).area_Center_Lat;
      let y = this.Areas.find(x => x.area_ID == numb).area_Center_Long;
      if (lat != 0 || long != 0) {
        this.dialogservice.open_location_map(lat, long).afterClosed().subscribe(res => {
          if (res.lat != 0 && res.lng !=0 ) {
            this.service.FG_Branches.controls['Branch_Lat'].setValue(res.lat);
          this.service.FG_Branches.controls['Branch_Long'].setValue(res.lng);
          }
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

  execute_edit(form_values: FormGroup){
    this.Confirm_location(form_values.controls['Branch_Lat'].value,form_values.controls['Branch_Long'].value)
    if (form_values.valid) {
      var body={
        "Branch_ID" :  this.Branch_Id,
        "Branch_Description" :  form_values.controls['Branch_Description'].value,
        "Branch_Note" : form_values.controls['Branch_Note'].value,
        "Branch_Admin_Note" : form_values.controls['Branch_Admin_Note'].value,
        "Branch_status" : form_values.controls['Branch_status'].value,
        "Branch_Long" : form_values.controls['Branch_Long'].value,
        "Branch_Lat" : form_values.controls['Branch_Lat'].value,
        "Branch_Address" : form_values.controls['Branch_Address'].value,
        "Branch_Area" : +form_values.controls['Branch_Area'].value,
        "Branch_Description_Arabic" :form_values.controls['Branch_Description_Arabic'].value,
        "Branch_Phone_1" : form_values.controls['Branch_Phone_1'].value,
        "Branch_Phone_2" : form_values.controls['Branch_Phone_2'].value,
        "Branch_Phone_3" : form_values.controls['Branch_Phone_3'].value,
        "Branch_Owner_Phone" : form_values.controls['Branch_Owner_Phone'].value,
        "Branch_Is_Main_Branch" : form_values.controls['Branch_Is_Main_Branch'].value
      };
      this.service.update_branch_as_support(this.Branch_Id,body).subscribe(res=>{this.notificationservice.send_success_message("Branch updated")},
        err=>{this.notificationservice.send_fail_message("Could not create the branch.")})
    }else{this.notificationservice.send_fail_message("Branch Could not be created") ;}
  }
}
