import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BranchManagementService {

  constructor(private http: HttpClient, public FB: FormBuilder) { }
  FG_Branches = this.FB.group({
    $Branch_ID: [{ value: 0, disabled: true }],
    Branch_Name: [{ value: '', disabled: true }, [Validators.required, Validators.maxLength(25)]],
    Branch_Description: ['', [Validators.required, Validators.maxLength(300)]],
    Branch_Related_Company: [0, Validators.required],
    Branch_Note: ['', [Validators.maxLength(300)]],
    Branch_Admin_Note: ['', [Validators.maxLength(300)]],
    Branch_Rate: [{ value: 0, disabled: true }],
    Branch_status: [0, Validators.required],
    Branch_Long: [{ value: 0, disabled: true }, [Validators.required, Validators.pattern("^\-?\\d+\\.\\d+"), Validators.min(-180), Validators.max(180)]],
    Branch_Lat: [{ value: 0, disabled: true }, [Validators.required, Validators.pattern("^\-?\\d+\\.\\d+"), Validators.min(-90), Validators.max(90)]],
    Is_valid_loc: [false, [Validators.requiredTrue]],
    Branch_Address: ['', [Validators.required, Validators.maxLength(80)]],
    Branch_Country: [0, Validators.required],
    Branch_City: [0, [Validators.required, Validators.min(1)]],
    Branch_Area: [0, [Validators.required, Validators.min(1)]],
    Branch_Updater: [{ value: '', disabled: true }, Validators.required],
    Branch_Update_Time: [{ value: '', disabled: true }],
    Branch_Description_Arabic: ['', [Validators.required, Validators.maxLength(300)]],
    Branch_Name_Arabic: [{ value: '', disabled: true }, [Validators.required, Validators.maxLength(25)]],
    Branch_Phone_1: ['', [Validators.required, Validators.maxLength(25)]],
    Branch_Phone_2: ['', [Validators.maxLength(25)]],
    Branch_Phone_3: ['', [Validators.maxLength(25)]],
    Branch_Owner_Phone: ['', [Validators.maxLength(25)]],
    Branch_Ban_Count: [{ value: 0, disabled: true }, Validators.required],
    Branch_Hot_Ban_Count: [{ value: 0, disabled: true }, Validators.required],
    Branch_Ban_Date: [{ value: '', disabled: true }],
    Branch_Ban_Period: [{ value: 0, disabled: true }, Validators.required],
    Branch_Is_Main_Branch: [true]
  });
  reset_FG_Branches() {
    this.FG_Branches.patchValue({
      $Branch_ID: 0,
      Branch_Name: '',
      Branch_Description: '',
      Branch_Related_Company: 0,
      Branch_Note: '',
      Branch_Admin_Note: '',
      Branch_Rate: '',
      Branch_status: 0,
      Branch_Long: 0,
      Branch_Lat: 0,
      Is_valid_loc: false,
      Branch_Address: '',
      Branch_Country: 0,
      Branch_City: 0,
      Branch_Area: 0,
      Branch_Updater: 0,
      Branch_Update_Time: '',
      Branch_Description_Arabic: '',
      Branch_Name_Arabic: '',
      Branch_Phone_1: '',
      Branch_Phone_2: '',
      Branch_Phone_3: '',
      Branch_Owner_Phone: '',
      Branch_Ban_Count: 0,
      Branch_Hot_Ban_Count: 0,
      Branch_Ban_Date: '',
      Branch_Ban_Period: 0,
      Branch_Is_Main_Branch: true
    })
  }
  FG_Company_Label = this.FB.group({
    $Company_Id: [{ value: 0, disabled: true }],
    Company_Name: [{ value: '', disabled: true }, [Validators.required]],
    Company_Name_Arabic: [{ value: '', disabled: true }, [Validators.required]]
  });
  Branch_Table(Company_Id) {
    return this.http.get(environment.BaseUrl + 'Branches/Branch_Table/' + Company_Id);
  }
  Company_Label(Company_Id) {
    return this.http.get(environment.BaseUrl + 'Branches/Company_Label/' + Company_Id);
  }

  FG_Location = this.FB.group({
    Branch_Long: [{ value: 0, disabled: false }, [Validators.required, Validators.pattern("^\-?\\d+\\.\\d+"), Validators.min(-180), Validators.max(180)]],
    Branch_Lat: [{ value: 0, disabled: false }, [Validators.required, Validators.pattern("^\-?\\d+\\.\\d+"), Validators.min(-90), Validators.max(90)]]
  });
  FG_Location_link = this.FB.group({
    Link: [{ value: '', disabled: false }, [Validators.required]]  //, Validators.pattern("/^https?\:\/\/(www\.|maps\.)?google\.[a-z]+\/maps\/?\?([^&]+&)*()")
  });
  Create_Branch(body, Company_Id) {
    return this.http.post(environment.BaseUrl + 'Branches/create_branch/' + Company_Id, body);
  }
  branch_Details(branch_Id) {
    return this.http.get(environment.BaseUrl + 'Branches/branch_Details/' + branch_Id);
  }
  update_branch_as_support(branch_Id, body) {
    return this.http.post(environment.BaseUrl + 'Branches/update_branch_as_support/' + branch_Id, body);
  }
  Load_company_users_table(Pic_Id: number) {
    return this.http.get(environment.BaseUrl + 'Branches/Get_Company_users_Table_Owner/' + Pic_Id + '/');
  }

  FG_User_Related_Branch = this.FB.group({
    $User_Related_Branch_Id: [0],
    User_Related_Branch_Related_User: [0, [Validators.required, Validators.min(1)]],
    User_Related_Branch_Related_Branch: [0, [Validators.required, Validators.min(1)]],
    User_Related_Branch_Updater: [0, Validators.required],
    User_Related_Branch_Update_Time: [''],
    User_Related_Branch_Is_Company_Manager: [false],
    User_Related_Branch_Employee_Id: ['', [Validators.maxLength(25)]],
    User_Related_Branch_Is_Valid: [false],
    User_Related_Branch_Web_Admin_Comment: ['', [Validators.maxLength(300)]],
    User_Related_Branch_Can_add_company_users: [false]
  });
  Create_User_Related_Branch(body, Company_Id) {
    return this.http.post(environment.BaseUrl + 'Branches/create_User_Related_Branch/' + Company_Id, body); //
  }
  Create_User_Related_all_Branches(body, Company_Id) {
    return this.http.post(environment.BaseUrl + 'Branches/create_User_Related_All_Branches/' + Company_Id, body); //
  }
  reset_FG_User_Related_Branch() {
    this.FG_User_Related_Branch.patchValue({
      $User_Related_Branch_Id: 0,
      User_Related_Branch_Related_User: 0,
      User_Related_Branch_Related_Branch: 0,
      User_Related_Branch_Updater: 0,
      User_Related_Branch_Update_Time: '',
      User_Related_Branch_Is_Company_Manager: false,
      User_Related_Branch_Employee_Id: '',
      User_Related_Branch_Is_Valid: false,
      User_Related_Branch_Web_Admin_Comment: '',
      User_Related_Branch_Can_add_company_users: false
    });
  }
  FG_User_Related_Branch_display = this.FB.group({
    $User_Related_Branch_Id: [{ value: 0, disabled: true }],
    User_Related_Branch_Related_User: [{ value: '', disabled: true }],
    User_Related_Branch_Related_Branch: [{ value: '', disabled: true }],
    company_id: [{ value: 0, disabled: true }],
    company_name: [{ value: '', disabled: true }],
    company_name_arabic: [{ value: '', disabled: true }],
    User_Related_Branch_Is_Company_Manager: [false],
    User_Related_Branch_Can_add_company_users: [false],
    User_Related_Branch_Web_Admin_Comment: ['', [Validators.maxLength(300)]],
    User_Related_Branch_Is_Valid: [false],
    User_Related_Branch_Employee_Id: ['', [Validators.maxLength(25)]],
    User_Related_Branch_Updater: [{ value: '', disabled: true }],
    User_Related_Branch_Update_Time: [{ value: '', disabled: true }],
  });
  reset_FG_User_Related_Branch_display() {
    this.FG_User_Related_Branch_display.patchValue({
      $User_Related_Branch_Id: 0,
      User_Related_Branch_Related_User: '',
      User_Related_Branch_Related_Branch:'',
      company_id: 0,
      company_name: '',
      company_name_arabic: '',
      User_Related_Branch_Is_Company_Manager: false,
      User_Related_Branch_Can_add_company_users: false,
      User_Related_Branch_Web_Admin_Comment: '',
      User_Related_Branch_Is_Valid: false,
      User_Related_Branch_Employee_Id: '',
      User_Related_Branch_Updater: '',
      User_Related_Branch_Update_Time: '',
    });
  }
  update_User_Related_Branch() {
    this.FG_User_Related_Branch_display.patchValue({
      $User_Related_Branch_Id: 0,
      User_Related_Branch_Is_Company_Manager: false,
      User_Related_Branch_Can_add_company_users: false,
      User_Related_Branch_Web_Admin_Comment: ['', [Validators.maxLength(300)]],
      User_Related_Branch_Is_Valid: false,
      User_Related_Branch_Employee_Id: ['', [Validators.maxLength(25)]]
    });
  }
  display_Company_membership(Pic_Id: number) {
    return this.http.get(environment.BaseUrl + 'Branches/display_Company_membership/' + Pic_Id );
  }
  update_user_in_branch(body, Company_Id) {
    return this.http.post(environment.BaseUrl + 'Branches/update_user_in_branch/' + Company_Id, body); //
  }
  delete_Company_membership(Pic_Id: number) {
    return this.http.get(environment.BaseUrl + 'Branches/delete_user_in_branch/' + Pic_Id );
  }
}
