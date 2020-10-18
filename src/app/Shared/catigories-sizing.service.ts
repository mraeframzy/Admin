import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatigoriesSizingService {

  constructor(private http: HttpClient, public FB: FormBuilder) { }
  formGroup_Product_Catigories_1 = this.FB.group({
    $Product_Catigory_1_Id: [0],
    Product_Catigory_1_Name: ['', [Validators.required, Validators.maxLength(50)]],
    Product_Catigory_1_Name_Arabic: ['', [Validators.required, Validators.maxLength(50)]],
    Product_Catigory_1_Is_Contain_Products: [0],
    Product_Catigory_1_Is_Active: [0],
    Product_Catigory_1_Desc: ['', [Validators.maxLength(300)]],
    Product_Catigory_1_Desc_Arabic: ['', [Validators.maxLength(300)]],
    Product_Catigory_1_Periority: [0, Validators.required]
  });

  formGroup_Product_Catigories_2 = this.FB.group({
    $Product_Catigory_2_Id: [0],
    Product_Catigory_2_Name: ['', [Validators.required, Validators.maxLength(25)]],
    Product_Catigory_2_Name_Arabic: ['', [Validators.required, Validators.maxLength(25)]],
    Product_Catigory_2_Related_Cat_1: [0, Validators.required],
    Product_Catigory_2_Is_Contain_Products: [0],
    Product_Catigory_2_Is_Active: [0],
    Product_Catigory_2_Desc: ['', [Validators.maxLength(300)]],
    Product_Catigory_2_Desc_Arabic: ['', [Validators.maxLength(300)]],
    Product_Catigory_2_Periority: [0]
  });

  formGroup_Product_Catigories_3 = this.FB.group({
    $Product_Catigory_3_Id: [0],
    Product_Catigory_3_Name: ['', [Validators.required, Validators.maxLength(25)]],
    Product_Catigory_3_Name_Arabic: ['', [Validators.required, Validators.maxLength(25)]],
    Product_Catigory_3_Related_Cat_2: [0, Validators.required],
    Product_Catigory_3_Is_Contain_Products: [0],
    Product_Catigory_3_Is_Active: [0],
    Product_Catigory_3_Desc: ['', [Validators.maxLength(300)]],
    Product_Catigory_3_Desc_Arabic: ['', [Validators.maxLength(300)]],
    Product_Catigory_3_Periority: [0]
  });

  formGroup_Product_Catigories_4 = this.FB.group({
    $Product_Catigory_4_Id: [0],
    Product_Catigory_4_Name: ['', [Validators.required, Validators.maxLength(25)]],
    Product_Catigory_4_Name_Arabic: ['', [Validators.required, Validators.maxLength(25)]],
    Product_Catigory_4_Related_Cat_3: [0, Validators.required],
    Product_Catigory_4_Is_Contain_Products: [0],
    Product_Catigory_4_Is_Active: [0],
    Product_Catigory_4_Desc: ['', [Validators.maxLength(500)]],
    Product_Catigory_4_Desc_Arabic: ['', [Validators.maxLength(500)]],
    Product_Catigory_4_Periority: [0]
  });

  formGroup_Catigory_1_Pics = this.FB.group({
    $Catigory_1_Pic_Id: [0],
    Catigory_1_Pic_Cat_1: [0],
    Catigory_1_Pic_Comment: ['', [Validators.maxLength(50)]],
    Catigory_1_Pic_Save_Name: ['', [Validators.maxLength(25)]],
    Catigory_1_Pic_Age_From: [0, [Validators.max(100)]],
    Catigory_1_Pic_Age_To: [0, [Validators.max(100)]]
  });

  formGroup_Catigory_2_Pics = this.FB.group({
    $Catigory_2_Pic_Id: [0],
    Catigory_2_Pic_Cat_1: [0],
    Catigory_2_Pic_Comment: ['', [Validators.maxLength(50)]],
    Catigory_2_Pic_Save_Name: ['', [Validators.maxLength(25)]],
    Catigory_2_Pic_Age_From: [0, [Validators.max(100)]],
    Catigory_2_Pic_Age_To: [0, [Validators.max(100)]]
  });

  formGroup_Catigory_3_Pics = this.FB.group({
    $Catigory_3_Pic_Id: [0],
    Catigory_3_Pic_Cat_1: [0],
    Catigory_3_Pic_Comment: ['', [Validators.maxLength(50)]],
    Catigory_3_Pic_Save_Name: ['', [Validators.maxLength(25)]],
    Catigory_3_Pic_Age_From: [0, [Validators.max(100)]],
    Catigory_3_Pic_Age_To: [0, [Validators.max(100)]]
  });

  formGroup_Catigory_4_Pics = this.FB.group({
    $Catigory_4_Pic_Id: [0],
    Catigory_4_Pic_Cat_4: [0],
    Catigory_4_Pic_Comment: ['', [Validators.maxLength(50)]],
    Catigory_4_Pic_Save_Name: ['', [Validators.maxLength(25)]],
    Catigory_4_Pic_Age_From: [0, [Validators.max(100)]],
    Catigory_4_Pic_Age_To: [0, [Validators.max(100)]]
  });

  
  get_catigory_1_list() {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/get_catigory_1_list');
  }
  get_catigory_2_list(related_cat_1 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/get_catigory_2_list/' + related_cat_1);
  }
  get_catigory_3_list(related_cat_2 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/get_catigory_3_list/' + related_cat_2 );
  }
  get_catigory_4_list(related_cat_3 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/get_catigory_4_list/' + related_cat_3);
  }
  get_catigory_1_list_min() {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/get_catigory_1_list_min');
  }
  get_catigory_2_list_min(related_cat_1 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/get_catigory_2_list_min/' + related_cat_1);
  }
  get_catigory_3_list_min(related_cat_2 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/get_catigory_3_list_min/' + related_cat_2 );
  }
  get_catigory_4_list_min(related_cat_3 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/get_catigory_4_list_min/' + related_cat_3);
  }
  get_catigory_1_display(related_cat_1 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/get_catigory_1_display/' + related_cat_1);
  }
  get_catigory_2_display(related_cat_2 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/get_catigory_2_display/' + related_cat_2);
  }
  get_catigory_3_display(related_cat_3 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/get_catigory_3_display/' + related_cat_3 );
  }
  get_catigory_4_display(related_cat_4 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/get_catigory_4_display/' + related_cat_4);
  }
  get_catigory_1_delete(related_cat_1 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/get_catigory_1_delete/' + related_cat_1);
  }
  get_catigory_2_delete(related_cat_2 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/get_catigory_2_delete/' + related_cat_2);
  }
  get_catigory_3_delete(related_cat_3 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/get_catigory_3_delete/' + related_cat_3 );
  }
  get_catigory_4_delete(related_cat_4 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/get_catigory_4_delete/' + related_cat_4);
  }
  catigory_1_update(related_cat_1 : number, form_group : FormGroup) {
    return this.http.post(environment.BaseUrl + 'CatigoryManagement/catigory_1_update/' + related_cat_1 , form_group);
  }
  catigory_2_update(related_cat_2 : number, form_group : FormGroup) {
    return this.http.post(environment.BaseUrl + 'CatigoryManagement/catigory_2_update/' + related_cat_2 , form_group);
  }
  catigory_3_update(related_cat_3 : number, form_group : FormGroup) {
    return this.http.post(environment.BaseUrl + 'CatigoryManagement/catigory_3_update/' + related_cat_3 , form_group);
  }
  catigory_4_update(related_cat_4 : number, form_group : FormGroup) {
    return this.http.post(environment.BaseUrl + 'CatigoryManagement/catigory_4_update/' + related_cat_4 , form_group);
  }
  catigory_1_insert(form_group : FormGroup) {
    return this.http.post(environment.BaseUrl + 'CatigoryManagement/catigory_1_insert/' , form_group);
  }
  catigory_2_insert(form_group : FormGroup) {
    return this.http.post(environment.BaseUrl + 'CatigoryManagement/catigory_2_insert/' , form_group);
  }
  catigory_3_insert(form_group : FormGroup) {
    return this.http.post(environment.BaseUrl + 'CatigoryManagement/catigory_3_insert/' , form_group);
  }
  catigory_4_insert(form_group : FormGroup) {
    return this.http.post(environment.BaseUrl + 'CatigoryManagement/catigory_4_insert/' , form_group);
  }
///////////////////////////////////catigories pictures
  Catigory_1_Pics_list(related_cat_1 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/Catigory_1_Pics_list/' + related_cat_1);
  }
  Catigory_2_Pics_list(related_cat_2 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/Catigory_2_Pics_list/' + related_cat_2);
  }
  Catigory_3_Pics_list(related_cat_3 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/Catigory_3_Pics_list/' + related_cat_3 );
  }
  Catigory_4_Pics_list(related_cat_4 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/Catigory_4_Pics_list/' + related_cat_4);
  }

  Catigory_1_Pics_display(related_cat_1 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/Catigory_1_Pics_display/' + related_cat_1);
  }
  Catigory_2_Pics_display(related_cat_2 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/Catigory_2_Pics_display/' + related_cat_2);
  }
  Catigory_3_Pics_display(related_cat_3 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/Catigory_3_Pics_display/' + related_cat_3 );
  }
  Catigory_4_Pics_display(related_cat_4 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/Catigory_4_Pics_display/' + related_cat_4);
  }
  
  Catigory_1_Pic_delete(related_cat_1 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/Catigory_1_Pic_delete/' + related_cat_1);
  }
  Catigory_2_Pic_delete(related_cat_2 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/Catigory_2_Pic_delete/' + related_cat_2);
  }
  Catigory_3_Pic_delete(related_cat_3 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/Catigory_3_Pic_delete/' + related_cat_3 );
  }
  Catigory_4_Pic_delete(related_cat_4 : number) {
    return this.http.get(environment.BaseUrl + 'CatigoryManagement/Catigory_4_Pic_delete/' + related_cat_4);
  }
  Catigory_1_Pics_update(related_cat_1 : number, form_group : FormGroup) {
    return this.http.post(environment.BaseUrl + 'CatigoryManagement/Catigory_1_Pics_update/' + related_cat_1 , form_group);
  }
  Catigory_2_Pics_update(related_cat_2 : number, form_group : FormGroup) {
    return this.http.post(environment.BaseUrl + 'CatigoryManagement/Catigory_2_Pics_update/' + related_cat_2 , form_group);
  }
  Catigory_3_Pics_update(related_cat_3 : number, form_group : FormGroup) {
    return this.http.post(environment.BaseUrl + 'CatigoryManagement/Catigory_3_Pics_update/' + related_cat_3 , form_group);
  }
  Catigory_4_Pics_update(related_cat_4 : number, form_group : FormGroup) {
    return this.http.post(environment.BaseUrl + 'CatigoryManagement/Catigory_4_Pics_update/' + related_cat_4 , form_group);
  }

  Catigory_1_Pics_insert(form_group : FormGroup) {
    return this.http.post(environment.BaseUrl + 'CatigoryManagement/Catigory_1_Pics_insert/' , form_group);
  }
  Catigory_2_Pics_insert(form_group : FormGroup) {
    return this.http.post(environment.BaseUrl + 'CatigoryManagement/Catigory_2_Pics_insert/' , form_group);
  }
  Catigory_3_Pics_insert(form_group : FormGroup) {
    return this.http.post(environment.BaseUrl + 'CatigoryManagement/Catigory_3_Pics_insert/' , form_group);
  }
  Catigory_4_Pics_insert(form_group : FormGroup) {
    return this.http.post(environment.BaseUrl + 'CatigoryManagement/Catigory_4_Pics_insert/' , form_group);
  }
}
