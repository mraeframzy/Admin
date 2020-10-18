import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Shared/user.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/Shared/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(public service: UserService, private router : Router , private notification : NotificationService) { }

  ngOnInit(): void {
    if (localStorage.getItem('Token')!=null){
      this.router.navigateByUrl('main/employee/home');
    }
    else{console.log('test');}
  }
  signin( ) {
    if (this.service.Login_FG.valid) {
      this.service.Login(this.service.Login_FG.value).subscribe(
        (res:any)=>{localStorage.setItem('Token',res.token);
  this.service.reset_Login_FG();this.router.navigateByUrl('/main/employee/home');},
        err=>{if(err.status == 400)
        this.notification.send_fail_message('Incorrect Username or Password')
        else
        this.notification.send_fail_message('Unknown error')
        }
      );
    }
  }
}
