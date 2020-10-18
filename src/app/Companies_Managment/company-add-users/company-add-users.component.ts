import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchManagementService } from 'src/app/Shared/branch-management.service';
import { DialogService } from 'src/app/Shared/dialog.service';
import { NotificationService } from 'src/app/Shared/notification.service';

@Component({
  selector: 'app-company-add-users',
  templateUrl: './company-add-users.component.html',
  styles: []
})
export class CompanyAddUsersComponent implements OnInit {
  Company_Id: number = 0;
  Branches:any [];
  select_all_branches = false;
  owners: any = [];
  constructor(private currentRoute: ActivatedRoute, private notificationservice: NotificationService, public service: BranchManagementService, private router: Router, private dialogservice: DialogService) { }

  ngOnInit(): void {
    this.Company_Id = parseInt(this.currentRoute.snapshot.paramMap.get('company_id'));
    this.company_label();
    this.service.reset_FG_User_Related_Branch();
    this.service.Branch_Table(this.Company_Id).subscribe(
      res => { this.Branches = Object.values(res['branches_Display_Table']) as []; },
      err => {
        this.notificationservice.send_success_message("Member added to the company");
        this.router.navigateByUrl('/main/employee/company_users/' + this.Company_Id);
      })
  }
  company_label() {
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
  }
  add_user_to_branch(form: FormGroup) {
    if (form.valid) {
      form.controls['User_Related_Branch_Related_Branch'].setValue(+form.controls['User_Related_Branch_Related_Branch'].value);
      form.controls['User_Related_Branch_Related_User'].setValue(+form.controls['User_Related_Branch_Related_User'].value);
      var body = {
        "User_Related_Branch_Related_User": form.controls['User_Related_Branch_Related_User'].value,
        "User_Related_Branch_Related_Branch": form.controls['User_Related_Branch_Related_Branch'].value,
        "User_Related_Branch_Is_Company_Manager": form.controls['User_Related_Branch_Is_Company_Manager'].value,
        "User_Related_Branch_Employee_Id": form.controls['User_Related_Branch_Employee_Id'].value,
        "User_Related_Branch_Is_Valid": form.controls['User_Related_Branch_Is_Valid'].value,
        "User_Related_Branch_Web_Admin_Comment": form.controls['User_Related_Branch_Web_Admin_Comment'].value,
        "User_Related_Branch_Can_add_company_users": form.controls['User_Related_Branch_Can_add_company_users'].value
      }
      if(this.select_all_branches){this.service.Create_User_Related_all_Branches(body, this.Company_Id).subscribe(res => {
        
        this.notificationservice.send_success_message("Member added to the company");
        this.router.navigateByUrl('/main/employee/company_users/' + this.Company_Id);
      }, err => {if   (err.error="User and branch already exists"){this.notificationservice.send_fail_message("Member already added to the branch could not add again")}
      else{this.notificationservice.send_fail_message("Could not add Member to company");}
          })}
      else{this.service.Create_User_Related_Branch(body, this.Company_Id).subscribe(res => {
        this.notificationservice.send_success_message("Member added to the company");
        this.router.navigateByUrl('/main/employee/company_users/' + this.Company_Id);
      }, err => {if   (err.error="User and branch already exists"){this.notificationservice.send_fail_message("Member already added to the branch could not add again")}
      else{this.notificationservice.send_fail_message("Could not add Member to company");}
          })}
      
    }
  }
  change_select_all_branches() { 
    this.service.FG_User_Related_Branch.controls['User_Related_Branch_Related_Branch'].setValue(this.Branches[0].branch_ID);
    this.select_all_branches = !this.select_all_branches }
  openUserDetails(fg: FormGroup) {
    let x = fg.controls['User_Related_Branch_Related_User'].value;
    var y = +x;
    if (y == 0) {
      this.dialogservice.opensearchuserDialog().afterClosed().subscribe(res => {
        this.owners = [res];
        this.service.FG_User_Related_Branch.controls['User_Related_Branch_Related_User'].setValue(res.id);
      })
    }
    else {
      this.dialogservice.openuserdetailsDialog(y).afterClosed().subscribe(res => { 
      })
    }
  }
  openUserDialog() {
    this.dialogservice.opensearchuserDialog().afterClosed().subscribe(res => {
      this.owners = [res];
      this.service.FG_User_Related_Branch.controls['User_Related_Branch_Related_User'].setValue(res.id);
    }
    );
  }
}