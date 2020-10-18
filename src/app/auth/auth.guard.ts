import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router : Router, private service : UserService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {      
      if (localStorage.getItem('Token') != null)
      {
        //get roles required for the current route
        let requiredroles = next.data['permitedroles'] as Array<string>        
        //check if roles is required to access the current route
        if (requiredroles) {
          /// check if current user has the required roles
          if  (this.service.roleMatch(requiredroles)){
            return true;
          }else {localStorage.removeItem('Token');this.router.navigate(['/main/login']);}
        }
        return true; 
      }
      else
      {this.router.navigate(['/main/login']);
      return false;}
  }
  
}
