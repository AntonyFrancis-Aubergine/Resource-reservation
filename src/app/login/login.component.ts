import { Component } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { SharedService } from '../shared.service';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: any;
  loggedIn: any;


  constructor(private api: ApiService,private authService: SocialAuthService, private sharedService: SharedService , private router:Router) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);

      if(user && user.id)
      {
        this.sharedService.setUserId(user.id);
      }

    });



  }
  

  async login(data:any){
    console.log(data.email , data.password)
    this.api.signIn(data.email ).then((res)=> {

      
      this.router.navigate(['user'])
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
 

}
