import { Component } from '@angular/core';
import { Router } from '@angular/router';
import supabase from '../../supabase';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.css'
})
export class UserNavbarComponent {
  email: any;

  constructor(private router:Router,private api:ApiService) {
    
  }
ngOnInit(){
  this.api.authChanges((_, session) =>{

      console.log(session?.user);
      this.email = session?.user.email;
  })
}
  logout() {

    if(confirm("do you want to logout?") == true){
      this.api.signOut();
      this.router.navigate([''])


    }

}
}
