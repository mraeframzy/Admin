import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UserManegmentOwnerService } from 'src/app/Shared/user-manegment-owner.service';

@Component({
  selector: 'app-dialog-search-user',
  templateUrl: './dialog-search-user.component.html',
  styles: []
})
export class DialogSearchUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<DialogSearchUserComponent>,private service : UserManegmentOwnerService) { }
  
  displayedcolumns : string [] = ['id','userName','user_First_Name','user_SurName','phoneNumber','email','user_Job_Title_name']

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

  ngOnInit(): void {
  }
  onSearchClear(){this.searchKey="";this.applyFilter();}
  applyFilter(){this.listData.filter = this.searchKey.trim().toLowerCase();}
  onSearchClear_database(){this.searchKey_database="";this.applyFilter();}
  applyFilter_database(){this.listData.filter = this.searchKey_database.trim().toLowerCase();}

  closeDialog(){var new_owner =  {id:  0  , name: 'Please Search for Owner'  };this.dialogRef.close(new_owner);}
  setuser(row){var new_owner =  {id:  row.id  , name:  row.user_First_Name + ' ' + row.user_SurName };this.dialogRef.close(new_owner);}

  search_users(){
    this.try_load = true;
    this.which_query = 4;
    this.service.get_search_users_list_exact(this.searchKey_database)
    .subscribe(users=>{this.employee_array =users;
    //this.users_loaded_count = users.len;
    this.listData = new MatTableDataSource(this.employee_array);
    });
  }
}
