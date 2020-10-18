import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserManegmentOwnerService {
  //createNewForm: any;
  constructor(public FB: FormBuilder,private http: HttpClient) { }
  //get all users list

  get_all_user_list(last_id,number_records) {
    return this.http.get(environment.BaseUrl + 'UsersManegment/umto/' + last_id + '/' + number_records);
  }

  get_all_employee_list(last_id, number_records) {
    return this.http.get(environment.BaseUrl + 'UsersManegment/emto/' + last_id + '/' + number_records);
  }

  get_all_company_users_list(last_id, number_records) {
    return this.http.get(environment.BaseUrl + 'UsersManegment/cmto/' + last_id + '/' + number_records);
  }
  get_search_users_list(last_id, number_records, search_text,is_exact) {
    return this.http.get(environment.BaseUrl + 'UsersManegment/usmto/' + last_id + '/' + number_records+ '/' + search_text + '/' + is_exact);
  }
  get_search_users_list_exact(search_text) {
    return this.http.get(environment.BaseUrl + 'UsersManegment/usmto_exact/' + search_text );
  }

  FG_User_Details = this.FB.group({
    $Id: [{value:0,disabled:true}],
    UserName: [{value:'', disabled: true }, [Validators.required, Validators.maxLength(50)]],
    User_First_Name: [{value:'', disabled: true }, [Validators.required, Validators.maxLength(25)]],
    User_SurName: [{value:'', disabled: true }, [Validators.required, Validators.maxLength(25)]],
    PhoneNumber: [{value:'', disabled: true }, [Validators.maxLength(25)]],
    Email: [{value:'', disabled: true }, [Validators.required, Validators.maxLength(50)]],
    User_Birthday: [{value:0, disabled: true }],
    User_Gender: [{value:0, disabled: true }],
    User_Status: [0, Validators.required ],  //
    User_Updater: [{value:0, disabled: true }],
    User_Update_Time: [{value:'', disabled: true }],
    User_NZF_Page_Like: [{value:0, disabled: true }],
    User_NZ_Page_Like: [{value:0, disabled: true }],
    User_NZF_Page_Share: [{value:0, disabled: true }],
    User_NZ_Page_Share: [{value:0, disabled: true }],
    User_Continuous_Login_Count: [{value:0, disabled: true }, Validators.required ],
    User_Last_Visit_Date: [{value:'', disabled: true }],
    User_Ban_Count: [{value:0, disabled: true }, Validators.required ],
    User_Hot_Ban_Count: [{value:0, disabled: true }, Validators.required ],
    User_Ban_Date: [{value:'', disabled: true }],
    User_Ban_Period: [{value:0, disabled: true }, Validators.required ],
    User_Day_Count: [{value:0, disabled: true }, Validators.required ],
    User_Interaction_Count: [{value:0, disabled: true }, Validators.required ],
    User_Points: [{value:0, disabled: true }, Validators.required ],
    User_Job_Title: [0],  //
    User_is_locked: [0]  //
    });    
    
  get_user_details(user_id) {
    return this.http.get(environment.BaseUrl + 'UsersManegment/User_Details/' + user_id );
  }
  set_user_role(last_id, roles_name) {
    return this.http.post(environment.BaseUrl + 'UsersManegment/set_user_role/' + last_id , roles_name);
  }
  remove_user_role(last_id, roles_name ) {   
   return  this.http.post(environment.BaseUrl + 'UsersManegment/remove_user_role/' + last_id ,roles_name);
  }
  update_user( update_data : any) {
    let x = update_data.$Id;
    let body =({
      "User_Status":+update_data.User_Status,
      "User_Job_Title": +update_data.User_Job_Title,
      "User_is_locked": update_data.User_is_locked
    });
    return  this.http.post(environment.BaseUrl + 'UsersManegment/update_user/' + x ,body);
   }
}
