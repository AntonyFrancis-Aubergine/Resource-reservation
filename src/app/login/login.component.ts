import { Component } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { SharedService } from '../shared.service';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import supabase from '../supabase';
import { AuthSession } from '@supabase/supabase-js';
import supabase from '../supabase';
import { AuthSession } from '@supabase/supabase-js';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: any = {
    email: '',
    googleUserId: ''
  };
  loggedIn: any;
  email: string | undefined;
  status:any;
  status:any;

  session = this.api.session;

  constructor(private api: ApiService, private authService: SocialAuthService, private sharedService: SharedService, private router: Router) { }
  constructor(private api: ApiService, private authService: SocialAuthService, private sharedService: SharedService, private router: Router) { }

  ngOnInit() {
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    //   console.log(user)
    //   if(user && user.id)
    //   {
    //     this.sharedService.setUserId(user.id);
    //   }


    // });
    this.api.authChanges((_, session) => {
      this.session = session;
      console.log(session);
      if (this.session != null) {
        this.router.navigate(['user'])
      }
    });
    // this.api.getSession().then((res) =>
    // {
    //   this.user.email= res.data.session?.user.email;
    //   this.user.googleUserId = res.data.session?.user.id;
    //   console.log(res.data.session?.user.email);
    //   console.log(this.user.googleUserId)

    //   else
    //   {
    //     alert("invalid credentials")
    //   }
    // })
    });
    // this.api.getSession().then((res) =>
    // {
    //   this.user.email= res.data.session?.user.email;
    //   this.user.googleUserId = res.data.session?.user.id;
    //   console.log(res.data.session?.user.email);
    //   console.log(this.user.googleUserId)

    //   else
    //   {
    //     alert("invalid credentials")
    //   }
    // })

  }



  login(data?: any) {
  login(data?: any) {
    // console.log(data.email , data.password)
    this.api.signinGoogle()
    // .then((res)=> {
    //   if(res.data.provider.toString() === '')
    //   {
    //     alert("invalid credentials")
    //   }
    //   else
    //   {
    //     // this.router.navigate(['user'])
    //   }
    // })
    //   this.api.getSession().then((res) =>
    //   {
    //     this.user.email= res.data.session?.user.email;
    //     this.user.googleUserId = res.data.session?.user.id;
    //     console.log(res.data.session?.user.email);

    // })

    //   this.api.getSession().then((res) =>
    //   {
    //     this.user.email= res.data.session?.user.email;
    //     this.user.googleUserId = res.data.session?.user.id;
    //     console.log(res.data.session?.user.email);

    // })

  }

async addUser(user: any) {

    console.log(user)

    try {
      const result = await this.api.addUsers(user);
      if (result.error) {
        alert("Error adding resource: " + result.error.message);
      } else {
        alert("Resource added successfully");
      }
    } catch (error) {
      console.error("Error adding resource:", error);
      alert("An error occurred while adding the resource");
    }
  }










}
