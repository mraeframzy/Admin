import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public FB: FormBuilder, private http: HttpClient) { }
      // user register formgroup
      Login_FG = this.FB.group({
        UserName: ['', [Validators.required, Validators.maxLength(49)]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(84)]]
      });
  
      Login(formData){
        return this.http.post(environment.BaseUrl+'ApplicationUser/Login',formData);
      }
      reset_Login_FG(){this.Login_FG.setValue({UserName:'',password:''})}
      
      roleMatch(requiredRoles):boolean{
        //get all roles of the user and check if it is mentioned in the required roles
        var isMatch = false;
        var payLoad = JSON.parse(window.atob(localStorage.getItem('Token').split('.')[1]));
        var userRoles = payLoad.role;
        //console.log(requiredroles);
        requiredRoles.forEach(element => {
          if (userRoles.includes(element)) {
          isMatch = true;
          return false;
          }
        });    
        //});
        return isMatch;
      }
}
