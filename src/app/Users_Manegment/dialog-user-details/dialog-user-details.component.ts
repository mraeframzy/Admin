import { Component, OnInit, Inject } from '@angular/core';
import { UserManegmentOwnerService } from 'src/app/Shared/user-manegment-owner.service';
import { GlobalConstantsService } from 'src/app/Shared/global-constants.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dialog-user-details',
  templateUrl: './dialog-user-details.component.html',
  styles: []
})
export class DialogUserDetailsComponent implements OnInit {

  constructor(public service: UserManegmentOwnerService, public global_service : GlobalConstantsService,@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<DialogUserDetailsComponent>,private datePipe: DatePipe) { }
  job_titles = [];
  User_Id : string = "0";
  user_details :any = [] ;
  user_statuses =[];
  ngOnInit(): void {
    this.service.FG_User_Details.controls['User_Status'].disable();
    this.service.FG_User_Details.controls['User_Job_Title'].disable();
    this.service.FG_User_Details.controls['User_is_locked'].disable();
    this.global_service.get_Job_Titles().subscribe(res=>{this.job_titles = res as [];  
     this.job_titles.push({job_Title_Id: 0, job_Title_Name: "No Job", job_Title_Name_Arabic: "ليس موظف", users: null});});
    this.global_service.get_User_Statuses().subscribe(res=>{this.user_statuses = res as [];});
    
      this.job_titles.push({job_Title_Id: 0, job_Title_Name: "No Job", job_Title_Name_Arabic: "ليس موظف", users: null});
    this.User_Id = this.data.message;
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
     })
  }
  closeDialog(){this.dialogRef.close();}
}
