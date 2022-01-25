import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators'
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private router : Router) {        
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
         if(localStorage.getItem('Token')!=null){
            const ClonedReq = req.clone({
                //add header the token                
                headers: req.headers.set('Authorization','Bearer '+ localStorage.getItem('Token'))
            });
            return next.handle(ClonedReq).pipe(
                tap(
                   req=>{},//token added successfully
                   err=>{if(err.status == 401){localStorage.removeItem('Token');this.router.navigateByUrl('main/login')}} //token is invalid
                )
            )            
         }
         else{return next.handle(req.clone());}   //if the local storage does not contain token send request as it is
    }
}