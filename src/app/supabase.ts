
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { createClient } from '@supabase/supabase-js'
import { SharedService } from './shared.service';

// Create a single supabase client for interacting with your database
const supabase = createClient('https://cmavfkccucmnhtchqclw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtYXZma2NjdWNtbmh0Y2hxY2x3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE5Mjg1MDcsImV4cCI6MjAxNzUwNDUwN30.3ECiXzz6m1Aus48D6D4LbAfSaGlqBL-QQuib9iIwTek')

export default supabase;
export class Supabase{
constructor(private sharedService:SharedService){}




  

 
async InsertUser(){
const Iv = this.sharedService.userId;

    // Insert a new record into the 'users' table
    const { error } = await supabase
      .from('users')
      .insert({ googleUserId: Iv });

    if (error) {
      console.error(error);
    } else {
      console.log('User inserted successfully.');
    }
  }
  




// const { data:userdata, error:usererror } = await supabase
//   .from('users')
//   .select()

//   if(!usererror){
//     console.log(userdata)
//   }

  }

  

 
