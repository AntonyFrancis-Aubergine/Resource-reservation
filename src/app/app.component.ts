import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';
import { SharedService } from './shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
 


  constructor(private authService: SocialAuthService, private sharedService :SharedService) { }

  ngOnInit() {
    
  }

  abc(){
    const userID =  console.log(this.sharedService.userId);
      }
}
