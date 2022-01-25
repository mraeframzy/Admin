import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalConstantsService {

  constructor(private http: HttpClient) { }
  get_Job_Titles() {
    return this.http.get(environment.BaseUrl + 'Global/JobTitles');
  }
  get_User_Statuses() {
    return this.http.get(environment.BaseUrl + 'Global/UserStatuses');
  }
  get_All_Roles() {
    return this.http.get(environment.BaseUrl + 'Global/List_Roles');
  }
  General_Parameters() {
    return this.http.get(environment.BaseUrl + 'Global/general_parameters');
  }

  get_Counties() {
    return this.http.get(environment.BaseUrl + 'Global/get_Counties');
  }
  case_Statuses() {
    return this.http.get(environment.BaseUrl + 'Global/case_Statuses');
  }
  case_Product_Types() {
    return this.http.get(environment.BaseUrl + 'Global/case_Product_Types');
  }
  case_Person_Types() {
    return this.http.get(environment.BaseUrl + 'Global/case_Person_Types');
  }
  case_Company_Types() {
    return this.http.get(environment.BaseUrl + 'Global/case_Company_Types');
  }
  report_Product_Types() {
    return this.http.get(environment.BaseUrl + 'Global/report_Product_Types');
  }
  report_Company_Types() {
    return this.http.get(environment.BaseUrl + 'Global/report_Company_Types');
  }
  report_Person_Types() {
    return this.http.get(environment.BaseUrl + 'Global/report_Person_Types');
  }
  chat_Catigories() {
    return this.http.get(environment.BaseUrl + 'Global/chat_Catigories');
  }
  chat_Types() {
    return this.http.get(environment.BaseUrl + 'Global/chat_Types');
  }
  delivery_Order_Statuses() {
    return this.http.get(environment.BaseUrl + 'Global/delivery_Order_Statuses');
  }
  photo_Seassion_Order_Statuses() {
    return this.http.get(environment.BaseUrl + 'Global/photo_Seassion_Order_Statuses');
  }
  payment_Methods() {
    return this.http.get(environment.BaseUrl + 'Global/payment_Methods');
  }
  pt_Transition_Digital_cmnts(user_not_company : boolean,pt_Transition_Digital_cmnts_id : number ,get_manual_only : boolean ) {
    return this.http.get(environment.BaseUrl + 'Global/pt_Transition_Digital_cmnts/' + user_not_company + '/' + pt_Transition_Digital_cmnts_id + '/' + get_manual_only );
  }
  product_Statuses() {
    return this.http.get(environment.BaseUrl + 'Global/product_Statuses');
  }
  product_color_Statuses() {
    return this.http.get(environment.BaseUrl + 'Global/product_color_Statuses');
  }
  product_delivery_Statuses() {
    return this.http.get(environment.BaseUrl + 'Global/product_Delivery_Statuses');
  }  
  payement_Card_Patch_Statuses() {
    return this.http.get(environment.BaseUrl + 'Global/payement_Card_Patch_Statuses');
  }
  payement_Card_Statuses() {
    return this.http.get(environment.BaseUrl + 'Global/payement_Card_Statuses');
  }
  mail_Discount_Statuses() {
    return this.http.get(environment.BaseUrl + 'Global/mail_Discount_Statuses');
  }
  company_Statuses() {
    return this.http.get(environment.BaseUrl + 'Global/company_Statuses');
  }
  availiable_Ride_Statuses() {
    return this.http.get(environment.BaseUrl + 'Global/availiable_Ride_Statuses');
  }
  order_Statuses() {
    return this.http.get(environment.BaseUrl + 'Global/order_Statuses');
  }
  car_Body_Statuses() {
    return this.http.get(environment.BaseUrl + 'Global/car_Body_Statuses');
  }
  car_Engine_Statuses() {
    return this.http.get(environment.BaseUrl + 'Global/car_Engine_Statuses');
  }
  mechanical_Statuses() {
    return this.http.get(environment.BaseUrl + 'Global/mechanical_Statuses');
  }
  car_Statuses() {
    return this.http.get(environment.BaseUrl + 'Global/car_Statuses');
  }
  size_Main_Catigories() {
    return this.http.get(environment.BaseUrl + 'Global/size_Main_Catigories');
  }
  
}
