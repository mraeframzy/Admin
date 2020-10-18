import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CompaniesMangementService } from 'src/app/Shared/companies-mangement.service';
import { GlobalConstantsService } from 'src/app/Shared/global-constants.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/Shared/notification.service';

@Component({
  selector: 'app-companies-table-owner',
  templateUrl: './companies-table-owner.component.html',
  styles: []
})
export class CompaniesTableOwnerComponent implements OnInit {
  displayedcolumns : string [] = ['company_Id','company_Name','company_Name_Arabic','company_Status','company_owner_name','actions']
  searchKey: string;
  searchKey_database: string;  
  listData : MatTableDataSource<any>;
  Last_Id : number = 0 ;
  Copmany_status : number = 0 ;
  users_total_count : number = 0 ;
  users_loaded_count : number = 0 ;
  try_load : boolean = false;
  is_exact : boolean = false;
  which_query : number = 0;  //1=all users 2=company users 3= employee users 4= search query
  companies_array :any = [] ;
  companies_statuses :any = [] ;

  constructor(private service : CompaniesMangementService, private globalservice : GlobalConstantsService, private router : Router, private notificationservice: NotificationService) { }

  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  
  ngOnInit(): void {
    this.globalservice.company_Statuses().subscribe(res=>{this.companies_statuses = res as [];
      this.companies_statuses.push({company_Status_Id: 0, company_Status_Name: "Not Set", company_Status_Name_Arabic: "ليس محدد", companies: null});
      this.Copmany_status = 0;
    })
  }
  onSearchClear(){this.searchKey="";this.applyFilter();}
  applyFilter(){this.listData.filter = this.searchKey.trim().toLowerCase();}
  onSearchClear_database(){this.searchKey_database="";this.applyFilter();}
  applyFilter_database(){this.listData.filter = this.searchKey_database.trim().toLowerCase();}
  
  load_all_users(){
    this.try_load = true;
    this.which_query = 1;
    this.service.Owner_Copmany_Table(0,this.Copmany_status,false)
    .subscribe(users=>{this.companies_array = Object.values(users['companies_Management_Table_Owner']);
      this.listData = new MatTableDataSource(this.companies_array);
      this.listData.sort = this.sort;
      this.listData.paginator=this.paginator;
      this.users_loaded_count = Object.values(users['companies_Management_Table_Owner']).length;
      this.users_total_count = parseInt( users['total_Records']);
      this.Last_Id = this.companies_array[this.users_loaded_count-1].company_Id;
        });
  }
  search_users(){
    this.try_load = true;
    this.which_query = 2;
    this.service.get_search_companies_list(0,false,this.searchKey_database,this.is_exact,this.Copmany_status)
    .subscribe(users=>{this.companies_array = Object.values(users['companies_Management_Table_Owner']);
    this.users_loaded_count = Object.values(users['companies_Management_Table_Owner']).length;    
    this.listData = new MatTableDataSource(this.companies_array);
      this.listData.sort = this.sort;
      this.listData.paginator=this.paginator;      
      this.users_total_count = parseInt( users['total_Records']);
      if(this.users_loaded_count!=0){this.Last_Id = this.companies_array[this.users_loaded_count-1].company_Id;}
    });
  }
  load_100_more(){switch (this.which_query ) {
    case(1):
      this.service.Owner_Copmany_Table(this.Last_Id,this.Copmany_status,true)
      .subscribe(users=>{
        this.companies_array = this.companies_array.concat( Object.values(users['companies_Management_Table_Owner']));      
        this.listData = new MatTableDataSource(this.companies_array);
        this.listData.sort = this.sort;
        this.listData.paginator=this.paginator;
        this.users_loaded_count = this.companies_array.length;
        this.Last_Id = this.companies_array[this.users_loaded_count-1].company_Id
        this.users_total_count = parseInt( users['total_Records']);
      },err=>{});
      break;
    case(2):
      this.service.get_search_companies_list(this.Last_Id,true,this.searchKey_database,this.is_exact,this.Copmany_status)
      .subscribe(users=>{this.companies_array = this.companies_array.concat( Object.values(users['companies_Management_Table_Owner']));
        this.listData = new MatTableDataSource(this.companies_array);
        this.listData.sort = this.sort;
        this.listData.paginator=this.paginator;
        this.users_loaded_count = this.companies_array.length;
        this.Last_Id = this.companies_array[this.users_loaded_count-1].company_Id
        this.users_total_count = parseInt( users['total_Records']);
      });
      break;
    }
  }
  load_more(){switch (this.which_query ) {
    case(1):
      this.service.Owner_Copmany_Table(this.Last_Id,this.Copmany_status,false)
      .subscribe(users=>{this.companies_array = this.companies_array.concat( Object.values(users['companies_Management_Table_Owner']));
        this.listData = new MatTableDataSource(this.companies_array);
        this.listData.sort = this.sort;
        this.listData.paginator=this.paginator;
        this.users_loaded_count = this.companies_array.length;
        this.Last_Id = this.companies_array[this.users_loaded_count-1].company_Id
        this.users_total_count = parseInt( users['total_Records']);
      },err=>{this.notificationservice.send_fail_message("Could not load more")});
      break;
    case(2):
      this.service.get_search_companies_list(this.Last_Id,false,this.searchKey_database,this.is_exact,this.Copmany_status)
      .subscribe(users=>{this.companies_array = this.companies_array.concat( Object.values(users['companies_Management_Table_Owner']));
        this.listData = new MatTableDataSource(this.companies_array);
        this.listData.sort = this.sort;
        this.listData.paginator=this.paginator;
        this.users_loaded_count = this.companies_array.length;
        this.Last_Id = this.companies_array[this.users_loaded_count-1].company_Id
        this.users_total_count = parseInt( users['total_Records']);
      },err=>{this.notificationservice.send_fail_message("Could not load more")});
      break;
    
    }   }
  onEdit(row){this.router.navigate(['/main/employee/edit_company/'+row.company_Id]);}
}
