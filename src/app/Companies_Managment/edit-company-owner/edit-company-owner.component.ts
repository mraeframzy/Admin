import { Component, OnInit } from '@angular/core';
import { CompaniesMangementService } from 'src/app/Shared/companies-mangement.service';
import { GlobalConstantsService } from 'src/app/Shared/global-constants.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NotificationService } from 'src/app/Shared/notification.service';
import { UserService } from 'src/app/Shared/user.service';
import { FormGroup } from '@angular/forms';
import { DialogService } from 'src/app/Shared/dialog.service';

@Component({
  selector: 'app-edit-company-owner',
  templateUrl: './edit-company-owner.component.html',
  styles: []
})
export class EditCompanyOwnerComponent implements OnInit {

  constructor(public service : CompaniesMangementService, private globalservice : GlobalConstantsService,private currentRoute: ActivatedRoute, private datePipe: DatePipe, public notificationService : NotificationService,private dialogservice: DialogService) { }   
  owners: any = [];
  companies_statuses :any = [] ;
  User_Id : string = "0";
  
  ngOnInit(): void {
    this.User_Id = this.currentRoute.snapshot.paramMap.get('id');   
    this.globalservice.company_Statuses().subscribe(res=>{this.companies_statuses = res as [];})    
    this.refresh();
  }
  is_Owner: boolean = false;  
  is_Customer_service: boolean = false;  
  is_Support: boolean= false;  
  refresh(){   
  
  var payLoad = JSON.parse(window.atob(localStorage.getItem('Token').split('.')[1]));
  var userRoles = payLoad.role;
  if (userRoles.includes("Owner")) this.is_Owner = true;
  if (userRoles.includes("Customer_service")) this.is_Customer_service = true;
  if (userRoles.includes("Support")) this.is_Support = true;
    
    this.service.get_company_details(this.User_Id).subscribe((res: any) => {
      this.owners = [{ id: res.company_Owner_Id, name: res.company_Owner }];
       this.service.formGroup_Company.patchValue({
        $Company_Id: res.company_Id,
        Company_Name: res.company_Name,
        Company_Desc: res.company_Desc,
        Company_Note: res.company_Note,
        Company_Status: res.company_Status,
        Copmany_Rate: res.copmany_Rate,
        Company_Updater: res.company_Updater,
        Company_Update_Time: res.company_Update_Time,
        //Company_Points: res.company_Points,
        Company_Desc_Arabic: res.company_Desc_Arabic,
        Company_Name_Arabic: res.company_Name_Arabic,
        Company_Web_Admin_Note: res.company_Web_Admin_Note,
        Company_Point_Transition_Auto_Comment: res.company_Point_Transition_Auto_Comment,
        //Company_Ban_Count: res.company_Ban_Count,
        //Company_Hot_Ban_Count: res.company_Hot_Ban_Count,
        //Company_Ban_Date: res.company_Ban_Date,
        //Company_Ban_Period: res.company_Ban_Period,
        Company_Phone_1: res.company_Phone_1,
        Company_Phone_2: res.company_Phone_2,
        Company_Phone_3: res.company_Phone_3,
        Company_Phone_4: res.company_Phone_4,
        Company_Owner: res.company_Owner_Id,
        Company_Likes_Count: res.company_Likes_Count,
        Company_Followers_Count: res.company_Followers_Count,
        Company_Owner_Is_With_Photo_Id: res.company_Owner_Is_With_Photo_Id,
        Company_Has_Location : res.company_Has_Location
       });
     }),err=>{}
  }
  clear(){this.refresh();}
  update_company_as_cs(){
    this.service.Update_company_as_CS(this.service.formGroup_Company.getRawValue()).subscribe(res=>{this.refresh();this.notificationService.send_success_message("Company Updated")},err=>{this.refresh(); this.notificationService.send_fail_message("Company Update Failed");})
  }
  update_company_as_support(){
    this.service.Update_company_as_Support(this.service.formGroup_Company.getRawValue()).subscribe(res=>{this.refresh();this.notificationService.send_success_message("Company Updated")},err=>{this.refresh(); this.notificationService.send_fail_message("Company Update Failed");})
  }
  openUserDetails(fg: FormGroup){
    let x = fg.controls['Company_Owner'].value;
    var y = +x;
      this.dialogservice.openuserdetailsDialog(y).afterClosed().subscribe(res => { 
      })
    }
}
