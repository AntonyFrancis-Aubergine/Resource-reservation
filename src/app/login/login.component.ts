import { Component } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: any;
  loggedIn: any;


  constructor(private authService: SocialAuthService, private sharedService: SharedService) { }

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
  
  
 

}
