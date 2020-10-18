import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchManagementService } from 'src/app/Shared/branch-management.service';
import { DialogService } from 'src/app/Shared/dialog.service';
import { NotificationService } from 'src/app/Shared/notification.service';

@Component({
  selector: 'app-company-edit-users',
  templateUrl: './company-edit-users.component.html',
  styles: []
})
export class CompanyEditUsersComponent implements OnInit {
  branch_user_id : number = 0;
  Company_id : number = 0;
  constructor(private dialogservice :DialogService,private currentRoute : ActivatedRoute,private notificationservice : NotificationService, public service : BranchManagementService, private router : Router) { }

  ngOnInit(): void {
    this.branch_user_id = parseInt(this.currentRoute.snapshot.paramMap.get('branch_user_id'));
    this.service.reset_FG_User_Related_Branch_display();
    this.load_relation();  
  }
  load_relation() {
    this.service.display_Company_membership(this.branch_user_id).subscribe((res: any) => {
      this.Company_id = res.company_id;
      this.service.FG_User_Related_Branch_display.patchValue({
        $User_Related_Branch_Id: res.user_Related_Branch_Id,
      User_Related_Branch_Related_User: res.user_Related_Branch_Related_User,
      User_Related_Branch_Related_Branch:res.user_Related_Branch_Related_Branch,
      company_id: res.company_id,
      company_name: res.company_name,
      company_name_arabic: res.company_name_arabic,
      User_Related_Branch_Is_Company_Manager: res.user_Related_Branch_Is_Company_Manager,
      User_Related_Branch_Can_add_company_users: res.user_Related_Branch_Can_add_company_users,
      User_Related_Branch_Web_Admin_Comment: res.user_Related_Branch_Web_Admin_Comment,
      User_Related_Branch_Is_Valid: res.user_Related_Branch_Is_Valid,
      User_Related_Branch_Employee_Id: res.user_Related_Branch_Employee_Id,
      User_Related_Branch_Updater: res.user_Related_Branch_Updater,
      User_Related_Branch_Update_Time: res.user_Related_Branch_Update_Time,
      })
    },
      err => {
        this.notificationservice.send_fail_message('Company does not exists');
        this.router.navigate(['/main/employee/o_companies_manegment']);
      })    
  }
  edit_user_to_branch(form:FormGroup){
    var body={
      User_Related_Branch_Id: form.controls['$User_Related_Branch_Id'].value,
      User_Related_Branch_Is_Company_Manager: form.controls['User_Related_Branch_Is_Company_Manager'].value,
      User_Related_Branch_Can_add_company_users: form.controls['User_Related_Branch_Can_add_company_users'].value,
      User_Related_Branch_Web_Admin_Comment: form.controls['User_Related_Branch_Web_Admin_Comment'].value,
      User_Related_Branch_Is_Valid: form.controls['User_Related_Branch_Is_Valid'].value,
      User_Related_Branch_Employee_Id: form.controls['User_Related_Branch_Employee_Id'].value,
    }
    console.log(body);
    this.service.update_user_in_branch(body,this.branch_user_id).subscribe(res=>{
      this.notificationservice.send_success_message("Membership updated")
    }
      ,err=>{this.notificationservice.send_fail_message("Update membership failed")});
  }
  Delete_Relation(form:FormGroup){
    this.dialogservice.openConfirmDialog("Are you sure you want to delete the member from the company?").afterClosed().subscribe(res=>{
      if(res){
      this.service.delete_Company_membership(this.branch_user_id).subscribe(
        res=>{this.notificationservice.send_success_message("Company Member relationship deleted");
        this.router.navigate(['/main/employee/company_users/' + this.Company_id]);      },
        err=>{this.notificationservice.send_fail_message("Membership is not deleted!!")}
      );      
    }})      
  }
}
