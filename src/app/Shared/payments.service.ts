import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private http: HttpClient, public FB: FormBuilder) { }
  formGroup_Payement_Card = this.FB.group({
    $Payement_Card_Id: [0, Validators.required],
    Payement_Card_Id_Date: [0, Validators.required ],
    Payement_Card_Status: [0, [Validators.required,Validators.min(1) ]],
    Payement_Card_Key: ['', [Validators.required, Validators.maxLength(25)]],
    Payement_Card_Generate_Date: [''],
    Payement_Card_Print_Date: [''],
    Payement_Card_With_Seller_Date: [''],
    Payement_Card_Sell_Date: [''],
    Payement_Card_Expire_Date: [''],
    Payement_Card_Value_EGP: [0, [Validators.required,Validators.min(1) ] ],
    Payement_Card_Consumer: [0],
    If_Consumer_valid:[false,[Validators.requiredTrue]],
    Payement_Card_Seller: [0],
    If_Seller_valid:[false,[Validators.requiredTrue]],
    Payement_Card_Patch_Id: [0, [Validators.required,Validators.min(1) ] ],
    Payement_Card_Updater: [0, Validators.required ],
    Payement_Card_Update_DateTime: ['', Validators.required ]
    });
    Payement_Cards_list(patch_id : number) {
      return this.http.get(environment.BaseUrl + 'PaymentPointTSManagement/Payement_Cards_list/' + patch_id);
    }
    Payement_Cards_insert(form_group) {
      return this.http.post(environment.BaseUrl + 'PaymentPointTSManagement/Payement_Cards_insert' , form_group);
    }
    Payement_Cards_display(Payement_Card_id :number,Payement_Card_Id_Date :number) {
      return this.http.get(environment.BaseUrl + 'PaymentPointTSManagement/Payement_Cards_display/' + Payement_Card_id + '/' + Payement_Card_Id_Date);
    }
    Payement_Cards_update(Payement_Card_id :number,Payement_Card_Id_Date :number, form_group) {
      return this.http.post(environment.BaseUrl + 'PaymentPointTSManagement/Payement_Cards_update/' + Payement_Card_id  + '/' + Payement_Card_Id_Date, form_group);
    }
    Payement_Cards_delete(Payement_Card_id :number,Payement_Card_Id_Date :number) {
      return this.http.get(environment.BaseUrl + 'PaymentPointTSManagement/Payement_Cards_delete/' + Payement_Card_id + '/' + Payement_Card_Id_Date);
    }

    Payment_card_get(){
      //return this.http.get(enjjjjvnv)
    }
}
