import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { BranchManagementService } from 'src/app/Shared/branch-management.service';
import { NotificationService } from 'src/app/Shared/notification.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-branches-table',
  templateUrl: './branches-table.component.html',
  styles: []
})
export class BranchesTableComponent implements OnInit {

  constructor(private currentRoute : ActivatedRoute,private notificationservice : NotificationService, public service : BranchManagementService, private router : Router) { }
  Company_Id : number = 0;
  displayedcolumns : string [] = ['branch_ID','branch_Name','branch_Area_Name','branch_status_Name','actions']
  listData : MatTableDataSource<any>;
  companies_array :any = [] ;
  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  
  ngOnInit(): void {
     this.Company_Id = parseInt(this.currentRoute.snapshot.paramMap.get('id'));
     this.service.Branch_Table(this.Company_Id).subscribe(res=>{
      this.companies_array = Object.values(res['branches_Display_Table']);
      this.listData = new MatTableDataSource(this.companies_array);
      this.listData.sort = this.sort;
      this.listData.paginator=this.paginator;
      this.service.FG_Company_Label.controls['$Company_Id'].setValue(this.Company_Id);
      this.service.FG_Company_Label.controls['Company_Name'].setValue(res['company_Name']);
      this.service.FG_Company_Label.controls['Company_Name_Arabic'].setValue(res['company_Name_Arabic']);
     }
      ,err=>{this.notificationservice.send_fail_message('Failed to load Branches');
       this.router.navigateByUrl('/main/employee/edit_company/' + this.Company_Id);});
  }
  onEdit(row){
    this.router.navigateByUrl('/main/employee/editbranch/' + row.branch_ID);
}
  select_Branch(row){}
}