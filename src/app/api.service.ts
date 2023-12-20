import { Injectable } from '@angular/core';
import { Supabase } from './supabase';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { initSupabase } from './utils/initSupabase';
import { BlockResource, Reserve, Resource, Users } from './resource.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  supabase: SupabaseClient = createClient(initSupabase.supabaseUrl , initSupabase.supabaseKey);

  async addResources (resource : Resource){
    const { data, error } = await this.supabase
    .from('resource')
    .insert(resource)
    return {data,error};
  }

  async addReservation (reserve :any ){
    const { data , error } = await this.supabase
    .from('reservation')
    .insert(reserve)
    return {data,error};
  }



  async getResources(){

    return await this.supabase
    .from('resourcesMaster')
    .select('*')
  
    // if(!error){
    //   console.log(data)
    // }
  
  }

  async getRegisteredResources(){

    return await this.supabase
    .from('resource')
    .select('*')
  
    // if(!error){
    //   console.log(data)
    // }
  
  }

  async getRegisteredUsers(){
    return await this.supabase
    .from('users')
    .select('*')
  }

  async getResourcesDependent(typeId:string){
    return await this.supabase
    .from('resource')
    .select('resourceId')
    .eq('resourceTypeId' , typeId)
  }

  async login(user:Users){
    return await this.supabase
    .from('users')
    .select('email' || 'password')
    // .eq('email' , user.email || 'password' , user.password);
  }


async loginOauth(){
  const { data, error } = await this.supabase.auth.signInWithOAuth({
  provider: 'google'
})
}
  async blockResourseUsers(blockResource :BlockResource){

    const { data, error } = await this.supabase
    .from('resource')
    .update({ isBlocked: 'blocked' } || {employeeId : blockResource.employeeId})
    .eq('resourceId', blockResource.resourceId)
    .select()

    return{data,error}
}

  async deleteResource(deleteResource : Resource)
  {
    await this.supabase
    .from('resource')
    .delete()
    .eq('resourceId', deleteResource.resourceId)
  }

  async signinGoogle(){this.supabase.auth.signInWithOAuth({
    provider: 'google',
  })
}

  async signIn(email:string) {
    const { data, error } = await this.supabase.auth.signInWithOtp({
      email: email,
      options: {
        // set this to false if you do not want the user to be automatically signed up
        shouldCreateUser: false,
        emailRedirectTo: 'https://google.com/',
      },
    })
    console.log(data);
  }

  
}



