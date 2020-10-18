import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar:  MatSnackBar) { }
  config:MatSnackBarConfig = {
    duration:6000,
    horizontalPosition:'right',
    verticalPosition:'top'
  }
  send_success_message(msg){
    this.config['panelClass'] = ['notification','success'];
    this.snackBar.open(msg,'',this.config);} 

    send_fail_message(msg){
      this.config['panelClass'] = ['notification','fail'];
      this.snackBar.open(msg,'',this.config);} 
}
 