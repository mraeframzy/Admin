import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Validators, FormBuilder, FormGroup, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class CompaniesMangementService {
  check_company_name_bool: boolean = false;
  check_company_name_arabic_bool: boolean = false;

  constructor(private http: HttpClient, public FB: FormBuilder) { }
  formGroup_Create_Company = this.FB.group({
    Company_Name: [{value:'', disabled: false }, Validators.compose([Validators.required, Validators.maxLength(50)])],  //(control as FormControl)
    Company_Desc: ['', [Validators.required, Validators.maxLength(300)]],
    Company_Note: ['', [Validators.maxLength(300)]],
    Company_Web_Admin_Note: [{value:'', disabled: false }, [Validators.maxLength(300)]],
    Company_Desc_Arabic: [{value:'', disabled: false }, [Validators.required,Validators.maxLength(300)]],
    Company_Name_Arabic: [{value:'', disabled: false }, [Validators.required, Validators.maxLength(50)]],
    Company_Phone_1: [{value:'', disabled: false }, [Validators.required, Validators.maxLength(25)]],
    Company_Phone_2: [{value:'', disabled: false }, [Validators.maxLength(25)]],
    Company_Phone_3: [{value:'', disabled: false }, [Validators.maxLength(25)]],
    Company_Phone_4: [{value:'', disabled: false }, [Validators.maxLength(25)]],
    Company_Owner: [{value:0, disabled: true },[Validators.min(1)]],
    Company_Name_check : new FormControl({value:false,disabled:false}),
    Company_Name_arabic_check : new FormControl({value:false,disabled:false}),
    Company_Has_Location : new FormControl({value:false,disabled:false})
  }
  , this.check_parabmeter
    );
  formGroup_Company = this.FB.group({
    $Company_Id: [{value:0, disabled: true }],
    Company_Name: [{value:'', disabled: true }, [Validators.required, Validators.maxLength(50)]],
    Company_Desc: ['', [Validators.required, Validators.maxLength(300)]],
    Company_Note: ['', [Validators.maxLength(300)]],
    Company_Status: [0, Validators.required ],
    Copmany_Rate: [{value:0, disabled: true }],
    Company_Updater: [{value:0, disabled: true }, Validators.required ],
    Company_Update_Time: [{value:'', disabled: true }],
    Company_Points: [{value:0, disabled: true }, Validators.required ],
    Company_Desc_Arabic: ['', [Validators.maxLength(300)]],
    Company_Name_Arabic: [{value:'', disabled: true }, [Validators.required, Validators.maxLength(50)]],
    Company_Web_Admin_Note: ['', [Validators.maxLength(300)]],
    Company_Point_Transition_Auto_Comment: [{value:'', disabled: true }],
    Company_Ban_Count: [{value:0, disabled: true }, Validators.required ],
    Company_Hot_Ban_Count: [{value:0, disabled: true }, Validators.required ],
    Company_Ban_Date: [{value:'', disabled: true }],
    Company_Ban_Period: [{value:0, disabled: true }, Validators.required ],
    Company_Phone_1: ['', [Validators.required, Validators.maxLength(25)]],
    Company_Phone_2: ['', [Validators.maxLength(25)]],
    Company_Phone_3: ['', [Validators.maxLength(25)]],
    Company_Phone_4: ['', [Validators.maxLength(25)]],
    Company_Owner: [{value:0, disabled: true }],
    Company_Likes_Count: [{value:0, disabled: true }],
    Company_Followers_Count: [{value:0, disabled: true }, Validators.required ],
    Company_Owner_Is_With_Photo_Id: [false],
    Company_Has_Location:[false]
    });
  
  Owner_Copmany_Table(last_id, company_status, No_Records) {
    return this.http.get(environment.BaseUrl + 'CompaniesManagment/cmto/'+last_id+'/'+company_status+'/'+No_Records);
  }
  get_search_companies_list(last_id, number_records, search_text,is_exact, company_status) {
    return this.http.get(environment.BaseUrl + 'CompaniesManagment/csmto/' + last_id + '/' + number_records+ '/' + search_text + '/' + is_exact + '/' + company_status);
  }
  get_company_details(user_id) {
    return this.http.get(environment.BaseUrl + 'CompaniesManagment/company_Details/' + user_id );
  }
  Update_company_as_CS (update_data : any){
    let x = update_data.$Company_Id;    
    let body =({
      "Company_Desc": update_data.Company_Desc,
      "Company_Desc_Arabic": update_data.Company_Desc_Arabic,
      "Company_Phone_1": update_data.Company_Phone_1,
      "Company_Phone_2": update_data.Company_Phone_2,
      "Company_Phone_3": update_data.Company_Phone_3,
      "Company_Phone_4": update_data.Company_Phone_4,
      "Company_Note": update_data.Company_Note,
    });
    return this.http.post(environment.BaseUrl + 'CompaniesManagment/update_company_as_CS/' + x ,body );
  }
  Update_company_as_Support (update_data : any){    
    let x = update_data.$Company_Id;    
    let body =({
      "Company_Owner_Is_With_Photo_Id": update_data.Company_Owner_Is_With_Photo_Id,
      "Company_Status": +update_data.Company_Status,
      "Company_Web_Admin_Note": update_data.Company_Web_Admin_Note,
      "Company_Has_Location": update_data.Company_Has_Location
    });
    return this.http.post(environment.BaseUrl + 'CompaniesManagment/update_company_as_support/' + x ,body );
  }
  Create_Company(body ){
    return this.http.post(environment.BaseUrl + 'CompaniesManagment/create_company' ,body );
  }
  reset_create_company_fg(){
    this.formGroup_Create_Company = new FormGroup({
      Company_Name: new FormControl ({value:'', disabled: false }, Validators.compose([Validators.required, Validators.maxLength(50)])),  //(control as FormControl)
      //,{validator:this.check_company_name_validator}
      Company_Desc: new FormControl ({value:'', disabled: false }, [Validators.required, Validators.maxLength(300)]),
      Company_Note: new FormControl ({value:'', disabled: false }, [Validators.maxLength(300)]),
      Company_Web_Admin_Note: new FormControl ({value:'', disabled: false }, [Validators.maxLength(300)]),
      Company_Desc_Arabic: new FormControl ({value:'', disabled: false }, [Validators.required,Validators.maxLength(300)]),
      Company_Name_Arabic: new FormControl ({value:'', disabled: false }, [Validators.required, Validators.maxLength(50)]),
      Company_Phone_1: new FormControl ({value:'', disabled: false }, [Validators.required, Validators.maxLength(25)]),
      Company_Phone_2: new FormControl ({value:'', disabled: false }, [Validators.maxLength(25)]),
      Company_Phone_3: new FormControl ({value:'', disabled: false }, [Validators.maxLength(25)]),
      Company_Phone_4: new FormControl ({value:'', disabled: false }, [Validators.maxLength(25)]),
      Company_Owner: new FormControl ({value:0, disabled: false },[Validators.min(1)]),
      Company_Name_check : new FormControl({value:false,disabled:false}),
      Company_Name_arabic_check : new FormControl({value:false,disabled:false}),
      Company_Has_Location : new FormControl({value:false,disabled:false})
    }
    ,this.check_parabmeter
    );
  }
  
  check_company_name() {
    let x = this.formGroup_Create_Company.controls['Company_Name'].value
    if (x != "" && x.length <50) {
      this.check_Company_name(x).subscribe(res => {
        if (res) { 
          this.check_company_name_bool = true; 
          this.formGroup_Create_Company.controls['Company_Name_check'].setValue(true);
        } 
        else { 
          this.check_company_name_bool = false;
          this.formGroup_Create_Company.controls['Company_Name_check'].setValue(false);
        }
      })     
    }
  }

  check_company_name_arabic() {
    let x = this.formGroup_Create_Company.controls['Company_Name_Arabic'].value
    if (x != "" && x.length <50) {
      this.check_Company_name(x).subscribe(res => {
        if (res) { 
          this.check_company_name_arabic_bool = true; 
          this.formGroup_Create_Company.controls['Company_Name_arabic_check'].setValue(true);
        } 
        else { 
          this.check_company_name_arabic_bool = false;
          this.formGroup_Create_Company.controls['Company_Name_arabic_check'].setValue(false);
        }
      })     
    }
  }
  
  check_parabmeter(control )  {
    const password = control.controls.Company_Name_check.value;
    const password_arabic = control.controls.Company_Name_arabic_check.value;     
    
    if(!password)  {control.controls.Company_Name.setErrors(null); control.controls.Company_Name.updateValueAndValidity({ onlySelf: true});} else{ control.controls.Company_Name.setErrors({'Company_Name_check': true});}
    if(!password_arabic)  {control.controls.Company_Name_Arabic.setErrors(null); control.controls.Company_Name_Arabic.updateValueAndValidity({ onlySelf: true});} else{ control.controls.Company_Name_Arabic.setErrors({'Company_Name_check': true});}
    return !password ? null : {Company_Name_and_arabic_check: false};
  }

  check_Company_name(name ){
    return this.http.get(environment.BaseUrl + 'CompaniesManagment/check_Company_name/'+name);
  }
  formGroup_Company_name = this.FB.group({
    $Company_Id: [{value:0, disabled: true }],
    Company_Name: [{value:'', disabled: false }, Validators.compose([Validators.required, Validators.maxLength(50)])],  //(control as FormControl)
    Company_Name_Arabic: [{value:'', disabled: false }, [Validators.required, Validators.maxLength(50)]]
  })

  companies_identites(company_id){
    return this.http.get(environment.BaseUrl + 'CompaniesManagment/companies_identites/'+company_id);
  }

  formGroup_Company_Picture_upload = this.FB.group({
    $Company_Picture_Id: [0],
    Company_Picture_Store_Name: ['', [Validators.required, Validators.maxLength(50)]],
    Company_Picture_Display_Name: ['', [Validators.required, Validators.maxLength(25)]],
    Company_Picture_Extention: ['', [Validators.required, Validators.maxLength(6)]],
    Company_Picture_Company: [0, Validators.required ],
    Company_Picture_Comment: ['', [Validators.maxLength(50)]],
    Company_Picture_Is_Owner_Identity: [0],
    Company_Picture_Is_Branch_Identity: [0],
    Dummy_Has_Photo : [false, [Validators.requiredTrue]],
    Dummy_Name_Already_Used : [true, [Validators.requiredTrue]],
    Dummy_Has_Pic_Type : [false, [Validators.requiredTrue]],
    });

    upload_company_image (body,Image : File){
      const formData : FormData= new FormData();
      formData.append('Image',Image );
      formData.append('ImageData',JSON.stringify(body));
      //console.log(body);
      return this.http.post(environment.BaseUrl + 'CompaniesManagment/upload_company_image/' ,formData);
    }
    initial_Pic_Name = '';

    check_company_Pic_name(pic_name : string, copmany_id : number) {
      if (pic_name != "" && pic_name.length <50 && copmany_id >0  && this.initial_Pic_Name !=pic_name) {
        this.check_Company_Pic_name_Get(pic_name,copmany_id).subscribe(res => {
          if (res) { 
            this.formGroup_Company_Picture_upload.controls['Dummy_Name_Already_Used'].setValue(false);
          } 
          else { 
            this.formGroup_Company_Picture_upload.controls['Dummy_Name_Already_Used'].setValue(true);
          }
        })
      }
      if(this.formGroup_Company_Picture_upload.controls['Company_Picture_Company'] .value > 0 && this.initial_Pic_Name == pic_name){
        this.formGroup_Company_Picture_upload.controls['Dummy_Name_Already_Used'].setValue(true);
      }
    }
    check_Company_Pic_name_Get(name : string, company_id:number){
      return this.http.get(environment.BaseUrl + 'CompaniesManagment/check_company_pic/'+name + '/' + company_id);
    }
    Load_Pic_ID(Pic_Id : number, company_id:number){
      return this.http.get(environment.BaseUrl + 'CompaniesManagment/Load_Pic/'+Pic_Id + '/' + company_id);
    }
    Update_company_image (update_data,To_Delete){
      let x = update_data.$Company_Picture_Id;
    let body =({
      "Company_Picture_Id":+update_data.$Company_Picture_Id,
      "Company_Picture_Display_Name":update_data.Company_Picture_Display_Name,
      "Company_Picture_Comment": update_data.Company_Picture_Comment,
      "Company_Picture_Is_Owner_Identity": update_data.Company_Picture_Is_Owner_Identity,
      "Company_Picture_Is_Branch_Identity": update_data.Company_Picture_Is_Branch_Identity,
      "Company_Picture_Is_Deleted": To_Delete
    });    
    //console.log(body);
     return this.http.post(environment.BaseUrl + 'CompaniesManagment/Update_Company_Pic/' + x ,body);
    }
}
