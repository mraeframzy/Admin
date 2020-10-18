import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-master',
  templateUrl: './main-master.component.html',
  styles: []
})
export class MainMasterComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    
  }
  onLogout(){
    localStorage.removeItem('Token');
    this.router.navigateByUrl('main/login');
  }
}
