import { Component, OnInit, NgZone, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserManegmentOwnerService } from 'src/app/Shared/user-manegment-owner.service';
import { DatePipe } from '@angular/common';
import { GlobalConstantsService } from 'src/app/Shared/global-constants.service';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { NotificationService } from 'src/app/Shared/notification.service';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { DialogService } from 'src/app/Shared/dialog.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styles: []
  
})
export class EditUserComponent implements OnInit {
  job_titles = [];
  user_statuses = [];
  all_roles = [];
  //Role_To_Be_Added : number = 0 ;
  user_details :any = [] ;
  user_roles : string[] = [] ;
  User_Id : string = "0";
  constructor(private currentRoute: ActivatedRoute, public service: UserManegmentOwnerService, private datePipe: DatePipe, public global_service : GlobalConstantsService,public notificationService : NotificationService, private dialogservice : DialogService) { }
  ngOnInit(): void {    
  this.global_service.get_Job_Titles().subscribe(res=>{this.job_titles = res as [];  
  this.job_titles.push({job_Title_Id: 0, job_Title_Name: "No Job", job_Title_Name_Arabic: "ليس موظف", users: null});});
  this.global_service.get_User_Statuses().subscribe(res=>{this.user_statuses = res as [];});
  this.global_service.get_All_Roles().subscribe(res=>{this.all_roles = res as [];});

  this.User_Id = this.currentRoute.snapshot.paramMap.get('id');
        this.refresh();
  }
  refresh(){
    this.service.get_user_details(this.User_Id).subscribe((res: any) => {
      this.user_details = (res['applicationUsers']);
      if(this.user_details.user_Job_Title==null){this.user_details.user_Job_Title = 0;}
       this.service.FG_User_Details.patchValue({
         $Id: this.user_details.id,
         UserName: this.user_details.userName,
        User_First_Name: this.user_details.user_First_Name,
        User_SurName: this.user_details.user_SurName,
        PhoneNumber: this.user_details.phoneNumber,
        Email: this.user_details.email,
        User_Birthday:this.datePipe.transform(this.user_details.user_Birthday, 'dd/MM/yyyy'),
        User_Gender: this.user_details.user_Gender,
        User_Status: this.user_details.user_Status,
        User_Updater: this.user_details.user_Updater,
        User_Update_Time: this.datePipe.transform(this.user_details.user_Update_Time, 'dd/MM/yyyy - HH:mm:ss'),
        User_NZF_Page_Like: this.user_details.user_NZF_Page_Like,
        User_NZ_Page_Like: this.user_details.user_NZ_Page_Like,
        User_NZF_Page_Share: this.user_details.user_NZF_Page_Share,
        User_NZ_Page_Share: this.user_details.user_NZ_Page_Share,
        User_Continuous_Login_Count: this.user_details.user_Continuous_Login_Count,
        User_Last_Visit_Date: this.datePipe.transform(this.user_details.user_Last_Visit_Date, 'dd/MM/yyyy - HH:mm:ss'),
        User_Ban_Count: this.user_details.user_Ban_Count,
        User_Hot_Ban_Count: this.user_details.user_Hot_Ban_Count,
        User_Ban_Date: this.datePipe.transform(this.user_details.user_Ban_Date, 'dd/MM/yyyy - HH:mm:ss'),
        User_Ban_Period: this.user_details.user_Ban_Period,
        User_Day_Count: this.user_details.user_Day_Count,
        User_Interaction_Count: this.user_details.user_Interaction_Count,
        User_Points: this.user_details.user_Points,
        User_Job_Title: this.user_details.user_Job_Title,
        User_is_locked: this.user_details.user_is_locked,
       });
       this.user_roles = (res['applicationRoles']);        
     })
  }
  remove_role(selected_user_roles: MatListOption[]){
    
    let roles : string[] = [];
    let x : number = 0;
    selected_user_roles.map(o => o.value).forEach(element => { roles[x]=element;x = x+1;});
    if (x){
    this.dialogservice.openConfirmDialog('Are you sure you want to remove the roles "' + roles +'" to the user?' ).afterClosed().subscribe(res=>{
      if (res){        
        this.service.remove_user_role(this.User_Id,roles).subscribe(
        (res=>{this.refresh();this.selected_all_roles.deselectAll(); this.notificationService.send_success_message("Roles Removed");}),
        (err=>{this.notificationService.send_fail_message("Unknown Error");}));
      }
      //else{this.selected_all_roles.deselectAll();this.selected_all_roles.deselectAll();}
    });
  }else{this.notificationService.send_fail_message("Please select roles to remove.");}
  }
  @ViewChild(MatSelectionList) selected_all_roles: MatSelectionList;
  add_role(selected_all_roles: MatListOption[]){
    let  roles : string[] = [];
    let x : number = 0;
    selected_all_roles.map(o => o.value).forEach(element => { roles[x]=element;x = x+1;});
    if (x){
      this.dialogservice.openConfirmDialog('Are you sure you want to add the roles "' + roles +'" to the user?' ).afterClosed().subscribe(res=>{
        if (res){  
          this.service.set_user_role(this.User_Id,roles).subscribe(
            (res=>{this.refresh();this.selected_all_roles.deselectAll(); this.notificationService.send_success_message("Roles Added");}),
            (err=>{this.notificationService.send_fail_message("Unknown Error");}));
          }
          //else{this.selected_all_roles.deselectAll();this.selected_all_roles.deselectAll();}
        });
      }else{this.notificationService.send_fail_message("Please select roles to add.");}
  }
  update_user(){
    this.service.update_user(this.service.FG_User_Details.getRawValue()).subscribe(res=>{
      this.refresh(); this.notificationService.send_success_message("User Updated");
    },err=>{
      this.refresh(); this.notificationService.send_fail_message("User Update Failed");
    })}
  clear(){this.refresh();}
}
