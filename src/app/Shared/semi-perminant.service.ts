import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SemiPerminantService {

  constructor(public FB: FormBuilder,private http: HttpClient) { }
  List_Cites(Country_Id) {
    return this.http.get(environment.BaseUrl + 'SemiPerminant/get_cities/'+Country_Id);
  }
  List_Areas(City_Id) {
    return this.http.get(environment.BaseUrl + 'SemiPerminant/get_areas/'+City_Id);
  }
  formGroup_Main_Color = this.FB.group({
    $Main_Color_Id: [{value:0, disabled: true }],
    Main_Color_Name: ['', [Validators.required, Validators.maxLength(25)]],
    Main_Color_Name_Arabic: ['', [Validators.required, Validators.maxLength(25)]],
    Main_Color_Order: [0, [Validators.required,Validators.min(1) ]],
    Main_Color_Code: ['', [Validators.required, Validators.maxLength(25)]]
    })
  formGroup_Sub_Color = this.FB.group({
    $Sub_Color_list_Id: [{value:0, disabled: true }],
    Sub_Color_list_Name: ['', [Validators.required, Validators.maxLength(25)]],
    Sub_Color_list_Arabic: ['', [Validators.required, Validators.maxLength(25)]],
    Sub_Color_list_Related_Main_Color_List: [{value:0, disabled: true }, [Validators.required,Validators.min(1) ]],
    Sub_Color_list_Order: [0, [Validators.required,Validators.min(1) ]],
    Sub_Color_list_Code: ['', [Validators.required, Validators.maxLength(25)]]
    });
  reset_fg_main_color(){
    this.formGroup_Main_Color.patchValue({
      $Main_Color_Id: [0],
      Main_Color_Name: [''],
      Main_Color_Name_Arabic: [''],
      Main_Color_Order: [0],
      Main_Color_Code: [0]
    })
  }
  reset_fg_Sub_Color(){
    this.formGroup_Sub_Color.patchValue({
      $Sub_Color_list_Id: [0],
    Sub_Color_list_Name: [''],
    Sub_Color_list_Arabic: [''],
    Sub_Color_list_Related_Main_Color_List: [0],
    Sub_Color_list_Order: [0],
    Sub_Color_list_Code:[0]
    })
  }

    list_Main_Color() {
      return this.http.get(environment.BaseUrl + 'SemiPerminant/list_Main_Color_List');
    }
    display_Main_Color(prod_id :number) {
      return this.http.get(environment.BaseUrl + 'SemiPerminant/display_Main_Color/' + prod_id );
    }
    insert_Main_Color(form_group) {
      return this.http.post(environment.BaseUrl + 'SemiPerminant/insert_Main_Color' , form_group);
    }
    update_Main_Color(Main_Color_id :number, form_group) {
      return this.http.post(environment.BaseUrl + 'SemiPerminant/update_Main_Color/' + Main_Color_id, form_group);
    }
    Main_Color_delete(Main_Color_id :number) {
      return this.http.get(environment.BaseUrl + 'SemiPerminant/Main_Color_delete/' + Main_Color_id );
    }

    list_Sub_Color(Main_Color_id :number) {
      return this.http.get(environment.BaseUrl + 'SemiPerminant/list_Sub_Color/' + Main_Color_id );
    }
    display_Sub_Color(prod_id :number) {
      return this.http.get(environment.BaseUrl + 'SemiPerminant/display_Sub_Color/' + prod_id );
    }    
    insert_Sub_Color(form_group) {
      return this.http.post(environment.BaseUrl + 'SemiPerminant/insert_Sub_Color' , form_group);
    }
    update_Sub_Color(Sub_Color_id :number, form_group) {
      return this.http.post(environment.BaseUrl + 'SemiPerminant/update_Sub_Color/' + Sub_Color_id , form_group);
    }
    sub_Color_delete(Main_Color_id :number) {
      return this.http.get(environment.BaseUrl + 'SemiPerminant/sub_Color_delete/' + Main_Color_id );
    }

    //discounts
    Discounts_list() {
      return this.http.get(environment.BaseUrl + 'PaymentPointTSManagement/Discounts_list');
    }
    Discount_related_customerservice() {
      return this.http.get(environment.BaseUrl + 'PaymentPointTSManagement/Discount_related_customerservice');
    }
    Discounts_insert(Discount_id :number, form_group) {
      return this.http.post(environment.BaseUrl + 'PaymentPointTSManagement/Discounts_insert/' + Discount_id, form_group);
    }
    Discounts_display(Discount_id :number) {
      return this.http.get(environment.BaseUrl + 'PaymentPointTSManagement/Discounts_display/' + Discount_id );
    }
    Discounts_update(Discount_id :number, form_group) {
      return this.http.post(environment.BaseUrl + 'PaymentPointTSManagement/Discounts_update/' + Discount_id , form_group);
    }
    Discounts_delete(Discount_id :number) {
      return this.http.get(environment.BaseUrl + 'PaymentPointTSManagement/Discounts_delete/' + Discount_id );
    }

    /// Points_Prices
    Points_Prices_list() {
      return this.http.get(environment.BaseUrl + 'PaymentPointTSManagement/Points_Prices_list');
    }
    Points_Prices_list_availiable() {
      return this.http.get(environment.BaseUrl + 'PaymentPointTSManagement/Points_Prices_list_availiable');
    }
    Points_Prices_insert(Points_Price_id :number, form_group) {
      return this.http.post(environment.BaseUrl + 'PaymentPointTSManagement/Points_Prices_insert/' + Points_Price_id, form_group);
    }
    Points_Prices_display(Points_Price_id :number) {
      return this.http.get(environment.BaseUrl + 'PaymentPointTSManagement/Points_Prices_display/' + Points_Price_id );
    }
    Points_Prices_update(Points_Price_id :number, form_group) {
      return this.http.post(environment.BaseUrl + 'PaymentPointTSManagement/Points_Prices_update/' + Points_Price_id , form_group);
    }
    Points_Prices_delete(Points_Price_id :number) {
      return this.http.get(environment.BaseUrl + 'PaymentPointTSManagement/Points_Prices_delete/' + Points_Price_id );
    }
}
