
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { createClient } from '@supabase/supabase-js'
import { SharedService } from './shared.service';

// Create a single supabase client for interacting with your database
const supabase = createClient('https://cmavfkccucmnhtchqclw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtYXZma2NjdWNtbmh0Y2hxY2x3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE5Mjg1MDcsImV4cCI6MjAxNzUwNDUwN30.3ECiXzz6m1Aus48D6D4LbAfSaGlqBL-QQuib9iIwTek')

export default supabase;
export class Supabase{}



    // Insert a new record into the 'users' table
    // const { error } = await supabase
    //   .from('resource')
    //   .insert({ resourceId: '15153' });

    // if (error) {
    //   console.error(error);
    // } else {
    //   console.log('Resource inserted successfully.');
    // }
  
  

// const { data, error } = await supabase
//   .from('resourcesList')
//   .select('*')

//   if(!error){
//     console.log(data)
//   }

  
 
// const { data, error } = await supabase
    // .from('resource')
    // .select('resourceId')
    // .eq('resourceTypeId' , '2')

    // if(!error)
    // {
    //   console.log(data)
    // }



      // const { data , error } = await supabase
      // .from('reservation')
      // .insert(reserve)
      // return {data,error};
    
    //   const {data,error} = await supabase
    //   .from('users')
    //   .select('*')
    //   .eq('email', 'antony@auberginesolutions.com')
    //   .eq('password', 'abcd')
    //   .eq('role' , 'admin')


     const {data,error} = await supabase.from('auth.users').select('*')
     console.log(data,error);
