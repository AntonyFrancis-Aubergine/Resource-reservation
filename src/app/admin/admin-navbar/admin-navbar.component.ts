import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent {
  constructor(private router: Router, private api:ApiService){}
logout() {
  if(confirm("do you want to logout?") == true){
    this.api.signOut();
    this.router.navigate([''])


  }
}


@Output() toggleSidebarNow: EventEmitter<any>= new EventEmitter();


}
