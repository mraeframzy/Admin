import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchManagementService } from 'src/app/Shared/branch-management.service';
import { NotificationService } from 'src/app/Shared/notification.service';

@Component({
  selector: 'app-company-users',
  templateUrl: './company-users.component.html',
  styles: []
})
export class CompanyUsersComponent implements OnInit {

  constructor(private currentRoute : ActivatedRoute,private notificationservice : NotificationService, public service : BranchManagementService, private router : Router) { }
  Company_Id : number = 0;

  displayedcolumns : string [] = ['user_Related_Branch_Id','branch_name','user_username','user_Related_Branch_Is_Company_Manager', 'user_Related_Branch_Can_add_company_users','user_Related_Branch_Is_Valid'  ,'actions']
  companies_users :any = [] ;
  searchKey: string;
  listData : MatTableDataSource<any>;
  
  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  
  ngOnInit(): void {
    this.Company_Id = parseInt(this.currentRoute.snapshot.paramMap.get('id'));
    this.company_label();
    this.load_company_user_table();
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
  load_company_user_table(){
    this.service.Load_company_users_table(this.Company_Id).subscribe(res=>{
      this.companies_users = Object.values(res['user_Related_Branch_Table']);
      this.listData = new MatTableDataSource(this.companies_users);
      this.listData.sort = this.sort;
      this.listData.paginator=this.paginator;
    }
      ,err=>{this.notificationservice.send_fail_message("Could not load Company Members")})
  }
  onSearchClear(){this.searchKey="";this.applyFilter();}
  applyFilter(){this.listData.filter = this.searchKey.trim().toLowerCase();}
  onEdit(row){this.router.navigate(['/main/employee/company_users_edit/'+row.user_Related_Branch_Id]);}

}
