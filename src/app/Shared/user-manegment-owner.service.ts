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
  constructor(public FB: FormBuilder, private http: HttpClient) { }
  //get all users list

  get_all_user_list(last_id, number_records) {
    return this.http.get(environment.BaseUrl + 'UsersManegment/umto/' + last_id + '/' + number_records);
  }

  get_all_employee_list(last_id, number_records) {
    return this.http.get(environment.BaseUrl + 'UsersManegment/emto/' + last_id + '/' + number_records);
  }

  get_all_company_users_list(last_id, number_records) {
    return this.http.get(environment.BaseUrl + 'UsersManegment/cmto/' + last_id + '/' + number_records);
  }
  get_search_users_list(last_id, number_records, search_text, is_exact) {
    return this.http.get(environment.BaseUrl + 'UsersManegment/usmto/' + last_id + '/' + number_records + '/' + search_text + '/' + is_exact);
  }
  get_search_users_list_exact(search_text) {
    return this.http.get(environment.BaseUrl + 'UsersManegment/usmto_exact/' + search_text);
  }

  FG_User_Details = this.FB.group({
    $Id: [{ value: 0, disabled: true }],
    UserName: [{ value: '', disabled: true }, [Validators.required, Validators.maxLength(50)]],
    User_First_Name: [{ value: '', disabled: true }, [Validators.required, Validators.maxLength(25)]],
    User_SurName: [{ value: '', disabled: true }, [Validators.required, Validators.maxLength(25)]],
    PhoneNumber: [{ value: '', disabled: true }, [Validators.maxLength(25)]],
    Email: [{ value: '', disabled: true }, [Validators.required, Validators.maxLength(50)]],
    User_Birthday: [{ value: 0, disabled: true }],
    User_Gender: [{ value: 0, disabled: true }],
    User_Status: [0, Validators.required],  //
    User_Updater: [{ value: 0, disabled: true }],
    User_Update_Time: [{ value: '', disabled: true }],
    User_NZF_Page_Like: [{ value: 0, disabled: true }],
    User_NZ_Page_Like: [{ value: 0, disabled: true }],
    User_NZF_Page_Share: [{ value: 0, disabled: true }],
    User_NZ_Page_Share: [{ value: 0, disabled: true }],
    User_Continuous_Login_Count: [{ value: 0, disabled: true }, Validators.required],
    User_Last_Visit_Date: [{ value: '', disabled: true }],
    User_Ban_Count: [{ value: 0, disabled: true }, Validators.required],
    User_Hot_Ban_Count: [{ value: 0, disabled: true }, Validators.required],
    User_Ban_Date: [{ value: '', disabled: true }],
    User_Ban_Period: [{ value: 0, disabled: true }, Validators.required],
    User_Day_Count: [{ value: 0, disabled: true }, Validators.required],
    User_Interaction_Count: [{ value: 0, disabled: true }, Validators.required],
    User_Points: [{ value: 0, disabled: true }, Validators.required],
    User_Job_Title: [0],  //
    Job_Title_name: [''],
    user_status_name: [{ value: '', disabled: true }],
    User_is_locked: [0],  //
    User_Address: ['', [Validators.maxLength(300)]],
    User_Admin_Comment: ['', [Validators.maxLength(300)]],
    User_Admin_Note: ['', [Validators.maxLength(300)]]
  });

  get_user_details(user_id) {
    return this.http.get(environment.BaseUrl + 'UsersManegment/User_Details/' + user_id);
  }
  set_user_role(last_id, roles_name) {
    return this.http.post(environment.BaseUrl + 'UsersManegment/set_user_role/' + last_id, roles_name);
  }
  remove_user_role(last_id, roles_name) {
    return this.http.post(environment.BaseUrl + 'UsersManegment/remove_user_role/' + last_id, roles_name);
  }
  update_user(update_data: any) {
    let x = update_data.$Id;
    let body = ({
      "User_Status": +update_data.User_Status,
      "User_Job_Title": +update_data.User_Job_Title,
      "User_is_locked": update_data.User_is_locked
    });
    return this.http.post(environment.BaseUrl + 'UsersManegment/update_user/' + x, body);
  }


  ///customer service

  FG_User_Details_update = this.FB.group({
    Id: [0],
    UserName: [0],
    User_Status: [0, Validators.required],
    User_is_locked: [0],
    User_Admin_Comment: ['', [Validators.maxLength(300)]],
    User_Admin_Note: ['', [Validators.maxLength(300)]]
  });

  search_users_customer_service(search_text: string, if_exact: boolean) {
    return this.http.get(environment.BaseUrl + 'UsersManegment/search_users_customer_service/' + search_text + '/' + if_exact);
  }
  user_details_customer_service(user_id) {
    return this.http.get(environment.BaseUrl + 'UsersManegment/user_details_customer_service/' + user_id);
  }
  user_update_customer_service(user_id: number, form_group) {
    return this.http.post(environment.BaseUrl + 'UsersManegment/user_update_customer_service/' + user_id, form_group);
  }

  //payment managment
  formGroup_payment = this.FB.group({
    Payment_Id: [0],
    Payment_Id_Date: [0],
    Payment_Amount: [{value: 0, disabled: true}, [Validators.required,Validators.min(1)]],
    Payment_Points: [0, [Validators.required,Validators.min(1)]],
    Payment_Related_Point_Price: [0],
      Points_Prices_Name:[''],
    Payment_Related_Method: [0, [Validators.required,Validators.min(1)]],
      payment_Methods_name:[''],
    Payment_Related_Who_Pay: [0, [Validators.required,Validators.min(1)]],
      user_who_payed_name:[''],
    Payment_Related_Employee_Performed_The_Payment: [0, Validators.required],
      employee_performed_action_name :[''],
    Payment_Related_User: [0, [Validators.required,Validators.min(1)]],
      target_user_name :[''],
    Payment_Is_refund: [false],
    Payment_Web_Admin_Notes: ['', [Validators.maxLength(300)]],
    Payment_DateTime: [''],
    Payment_Web_Operator_Discount: [0],
    Payment_Web_Operator_Related_Discount: [0],
      discounts_name:[''],
    Payment_Mail_Discount_Id: [0],
    Payment_Mail_Discount_Id_Date: [0],
      mail_Discounts_value:[''],
      //mail_Discounts_string:[''],
    Payment_Related_Card_Id: [0],
    Payment_Related_Card_Id_Date: [0],
      payement_Card_value:[''],
    Payment_Updater: [0],
    Payment_Updater_username: [''],
    Payment_Update_DateTime: ['']
  });
  reset_formGroup_payment(){
    this.formGroup_payment.patchValue({
    Payment_Id: [0],
    Payment_Id_Date: [0],
    Payment_Amount: [0],
    Payment_Points: [0],
    Payment_Related_Point_Price: [0],
      Points_Prices_Name:[''],
    Payment_Related_Method: [0],
      payment_Methods_name:[''],
    Payment_Related_Who_Pay: [0],
      user_who_payed_name:[''],
    Payment_Related_Employee_Performed_The_Payment: [0],
      employee_performed_action_name :[''],
    Payment_Related_User: [0],
      target_user_name :[''],
    Payment_Is_refund: [false],
    //Payment_Note: [''],
    Payment_Web_Admin_Notes: [''],
    Payment_DateTime: [''],
    Payment_Web_Operator_Discount: [0],
    Payment_Web_Operator_Related_Discount: [0],
    Payment_Mail_Discount_Id: [0],
    Payment_Mail_Discount_Id_Date: [0],
    Payment_Related_Card_Id: [0],
    Payment_Related_Card_Id_Date: [0],
    Payment_Updater: [0],
    Payment_Updater_username: [''],
    Payment_Update_DateTime: ['']
  });}
  Payments_list_per_consumer(consumer_id: number,last_id_date) {
    return this.http.get(environment.BaseUrl + 'PaymentPointTSManagement/Payments_list_per_consumer/' + consumer_id + '/' + last_id_date);
  }
  Payments_insert(form_group) {
    return this.http.post(environment.BaseUrl + 'PaymentPointTSManagement/Payments_insert', form_group);
  }
  Payments_display(Payment_id: number,Payment_id_Date: number) {
    return this.http.get(environment.BaseUrl + 'PaymentPointTSManagement/Payments_display/' + Payment_id + '/' + Payment_id_Date);
  }
  Payments_update(Payment_id: number,Payment_id_Date: number, form_group) {
    return this.http.post(environment.BaseUrl + 'PaymentPointTSManagement/Payments_update/' + Payment_id + '/' + Payment_id_Date, form_group);
  }
  Payments_delete(Payment_id: number,Payment_id_Date: number) {
    return this.http.get(environment.BaseUrl + 'PaymentPointTSManagement/Payments_delete/' + Payment_id + '/' + Payment_id_Date);
  }
  Check_Mail_Discounts(Mail_Discounts_key: string,Mail_Discount_User_id: number){
    return this.http.get(environment.BaseUrl + 'PaymentPointTSManagement/Check_Mail_Discounts/' + Mail_Discounts_key + '/' + Mail_Discount_User_id);
  }
}