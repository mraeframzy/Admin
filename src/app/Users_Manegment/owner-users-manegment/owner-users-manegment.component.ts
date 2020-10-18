import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { UserManegmentOwnerService } from 'src/app/Shared/user-manegment-owner.service';
import { MatTableDataSource} from '@angular/material/table';
import { tap } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-owner-users-manegment',
  templateUrl: './owner-users-manegment.component.html',
  styles: []
})
export class OwnerUsersManegmentComponent implements OnInit {
  
  constructor(private service : UserManegmentOwnerService, private router : Router) { }
  displayedcolumns : string [] = ['id','userName','user_First_Name','user_SurName','phoneNumber','email','user_Job_Title_name','actions']

  employee_array :any = [] ;
  listData : MatTableDataSource<any>;

  Last_Id : number = 0 ;
  users_total_count : number = 0 ;
  users_loaded_count : number = 0 ;
  try_load : boolean = false;
  is_exact : boolean = false;
  which_query : number = 0;  //1=all users 2=company users 3= employee users 4= search query
  searchKey : string = "";
  searchKey_database : string ="";

  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  
  ngOnInit(): void {}
  onSearchClear(){this.searchKey="";this.applyFilter();}
  applyFilter(){this.listData.filter = this.searchKey.trim().toLowerCase();}
  onSearchClear_database(){this.searchKey_database="";this.applyFilter();}
  applyFilter_database(){this.listData.filter = this.searchKey_database.trim().toLowerCase();}
  
  load_all_users(){
    this.try_load = true;
    this.which_query = 1;
    this.service.get_all_user_list(0,false)
    .subscribe(users=>{this.employee_array = Object.values(users['users_Mangment_Table_Owners']);
      this.listData = new MatTableDataSource(this.employee_array);
      this.listData.sort = this.sort;
      this.listData.paginator=this.paginator;
      this.users_loaded_count = Object.values(users['users_Mangment_Table_Owners']).length;
      this.users_total_count = parseInt( users['total_Records']);
      this.Last_Id = this.employee_array[this.users_loaded_count-1].id
    });
  }
  load_all_employees(){
    this.try_load = true;
    this.which_query = 3;
    this.service.get_all_employee_list(0,false)
    .subscribe(users=>{this.employee_array = Object.values(users['users_Mangment_Table_Owners']);
      this.listData = new MatTableDataSource(this.employee_array);
      this.listData.sort = this.sort;
      this.listData.paginator=this.paginator;
      this.users_loaded_count = Object.values(users['users_Mangment_Table_Owners']).length;
      this.users_total_count = parseInt( users['total_Records']);
      this.Last_Id = this.employee_array[this.users_loaded_count-1].id
    });
  }
  load_all_company_users(){
    this.try_load = true;
    this.which_query = 2;
    this.service.get_all_company_users_list(0,false)
    .subscribe(users=>{this.employee_array = Object.values(users['users_Mangment_Table_Owners']);
      this.listData = new MatTableDataSource(this.employee_array);
      this.listData.sort = this.sort;
      this.listData.paginator=this.paginator;
      this.users_loaded_count = Object.values(users['users_Mangment_Table_Owners']).length;
      this.users_total_count = parseInt( users['total_Records']);
      this.Last_Id = this.employee_array[this.users_loaded_count-1].id
    });
  }
  search_users(){
    this.try_load = true;
    this.which_query = 4;
    this.service.get_search_users_list(0,false,this.searchKey_database,this.is_exact)
    .subscribe(users=>{this.employee_array = Object.values(users['users_Mangment_Table_Owners']);
    this.users_loaded_count = Object.values(users['users_Mangment_Table_Owners']).length;    
    this.listData = new MatTableDataSource(this.employee_array);
      this.listData.sort = this.sort;
      this.listData.paginator=this.paginator;      
      this.users_total_count = parseInt( users['total_Records']);
      if(this.users_loaded_count!=0){this.Last_Id = this.employee_array[this.users_loaded_count-1].id;}
    });
  }
  load_more(){
    switch (this.which_query ) {
    case(1):
      this.service.get_all_user_list(this.Last_Id,false)      
      .subscribe(users=>{this.employee_array = this.employee_array.concat( Object.values(users['users_Mangment_Table_Owners']));
        this.listData = new MatTableDataSource(this.employee_array);
        this.listData.sort = this.sort;
        this.listData.paginator=this.paginator;
        this.users_loaded_count = this.employee_array.length;
        this.Last_Id = this.employee_array[this.users_loaded_count-1].id
        this.users_total_count = parseInt( users['total_Records']);
      });
      break;
    case(2):
      this.service.get_all_company_users_list(this.Last_Id,false)      
      .subscribe(users=>{this.employee_array = this.employee_array.concat( Object.values(users['users_Mangment_Table_Owners']));
        this.listData = new MatTableDataSource(this.employee_array);
        this.listData.sort = this.sort;
        this.listData.paginator=this.paginator;
        this.users_loaded_count = this.employee_array.length;
        this.Last_Id = this.employee_array[this.users_loaded_count-1].id
        this.users_total_count = parseInt( users['total_Records']);
      });
      break;
    case(3):    
      this.service.get_all_employee_list(this.Last_Id,false)
      .subscribe(users=>{this.employee_array = this.employee_array.concat( Object.values(users['users_Mangment_Table_Owners']));      
        this.listData = new MatTableDataSource(this.employee_array);
        this.listData.sort = this.sort;
        this.listData.paginator=this.paginator;
        this.users_loaded_count = this.employee_array.length;
        this.Last_Id = this.employee_array[this.users_loaded_count-1].id
        this.users_total_count = parseInt( users['total_Records']);
      });
      break;
    case(4):
    //if(this.users_loaded_count!=0){this.Last_Id = this.employee_array[this.users_loaded_count-1].id;}
      this.service.get_search_users_list(this.users_loaded_count,false,this.searchKey_database,this.is_exact)
      .subscribe(users=>{this.employee_array = this.employee_array.concat( Object.values(users['users_Mangment_Table_Owners']));
        this.listData = new MatTableDataSource(this.employee_array);
        this.listData.sort = this.sort;
        this.listData.paginator=this.paginator;
        this.users_loaded_count = this.employee_array.length;
        this.Last_Id = this.employee_array[this.users_loaded_count-1].id
        this.users_total_count = parseInt( users['total_Records']);
      });
      break;
    }    
  }
  load_100_more(){
    switch (this.which_query ) {
      case(1):
        this.service.get_all_user_list(this.Last_Id,true)
        .subscribe(users=>{this.employee_array = this.employee_array.concat( Object.values(users['users_Mangment_Table_Owners']));
          this.listData = new MatTableDataSource(this.employee_array);
          this.listData.sort = this.sort;
          this.listData.paginator=this.paginator;
          this.users_loaded_count = this.employee_array.length;
          this.Last_Id = this.employee_array[this.users_loaded_count-1].id
          this.users_total_count = parseInt( users['total_Records']);
        });
        break;
      case(2):
        this.service.get_all_company_users_list(this.Last_Id,true)
        .subscribe(users=>{this.employee_array = this.employee_array.concat( Object.values(users['users_Mangment_Table_Owners']));
          this.listData = new MatTableDataSource(this.employee_array);
          this.listData.sort = this.sort;
          this.listData.paginator=this.paginator;
          this.users_loaded_count = this.employee_array.length;
          this.Last_Id = this.employee_array[this.users_loaded_count-1].id
          this.users_total_count = parseInt( users['total_Records']);
        });
        break;
      case(3):    
        this.service.get_all_employee_list(this.Last_Id,true)
        .subscribe(users=>{this.employee_array = this.employee_array.concat( Object.values(users['users_Mangment_Table_Owners']));      
          this.listData = new MatTableDataSource(this.employee_array);
          this.listData.sort = this.sort;
          this.listData.paginator=this.paginator;
          this.users_loaded_count = this.employee_array.length;
          this.Last_Id = this.employee_array[this.users_loaded_count-1].id
          this.users_total_count = parseInt( users['total_Records']);
        });
        break;
      case(4):
        this.service.get_search_users_list(this.users_loaded_count,true,this.searchKey_database,this.is_exact)
        .subscribe(users=>{this.employee_array = this.employee_array.concat( Object.values(users['users_Mangment_Table_Owners']));
          this.listData = new MatTableDataSource(this.employee_array);
          this.listData.sort = this.sort;
          this.listData.paginator=this.paginator;
          this.users_loaded_count = this.employee_array.length;
          this.Last_Id = this.employee_array[this.users_loaded_count-1].id
          this.users_total_count = parseInt( users['total_Records']);
        });
        break;
      }
  }
  onEdit(row){    
    //console.log(row.id);
    this.router.navigate(['/main/employee/edit_user/'+row.id]);
  }
}
