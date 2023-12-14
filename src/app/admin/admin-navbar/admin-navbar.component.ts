import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent {
logout() {
throw new Error('Method not implemented.');
}

  constructor(private router:Router,){}

@Output() toggleSidebarNow: EventEmitter<any>= new EventEmitter();


}
