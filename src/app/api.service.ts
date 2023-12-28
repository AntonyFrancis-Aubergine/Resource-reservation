import { Injectable } from '@angular/core';
import { Supabase } from './supabase';
import { AuthChangeEvent, AuthSession, Session, SupabaseClient, createClient } from '@supabase/supabase-js';
import { initSupabase } from './utils/initSupabase';
import { BlockResource, Reserve, Resource, Users } from './resource.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  _session: AuthSession | null;
  constructor() { }

  supabase: SupabaseClient = createClient(initSupabase.supabaseUrl, initSupabase.supabaseKey);

  async addResources(resource: Resource) {
    const { data, error } = await this.supabase
      .from('resource')
      .insert(resource)
    return { data, error };
  }

  async addReservation(reserve: any) {
    const { data, error } = await this.supabase
      .from('reservation')
      .insert(reserve)
    return { data, error };
  }

 



  async addUsers (user:any){
    const { data , error } = await this.supabase
    .from('users')
    .insert(user)
    return {data,error};
  }

  async addUsers (user:any){
    const { data , error } = await this.supabase
    .from('users')
    .insert(user)
    return {data,error};
  }

  async addUsers (user:any){
    const { data , error } = await this.supabase
    .from('users')
    .insert(user)
    return {data,error};
  }



  async getResources() {

    return await this.supabase
      .from('resourcesMaster')
      .select('*')

    // if(!error){
    //   console.log(data)
    // }

  }

  async getRegisteredResources() {

    return await this.supabase
      .from('resource')
      .select('*')

    // if(!error){
    //   console.log(data)
    // }

  }

  async getRegisteredUsers() {
    return await this.supabase
      .from('users')
      .select('*')
  }

  async getResourcesDependent(typeId: string) {
    return await this.supabase
      .from('resource')
      .select('resourceId')
      .eq('resourceTypeId', typeId)
  }

  async login(user: Users) {
    return await this.supabase
      .from('users')
      .select('email' || 'password')
    // .eq('email' , user.email || 'password' , user.password);
  }


  async loginOauth() {
    const { data, error } = await this.supabase.auth.signInWithOAuth({
      provider: 'google'
    })
  }

async  handleSignInWithGoogle(response :any) {
  const { data, error } = await this.supabase.auth.signInWithIdToken({
    provider: 'google',
    token: response.credential,
    nonce: 'NONCE', // must be the same one as provided in data-nonce (if any)
  })
}


  async handleSignInWithGoogle(response: any) {
    const { data, error } = await this.supabase.auth.signInWithIdToken({
      provider: 'google',
      token: response.credential,
      nonce: 'NONCE', // must be the same one as provided in data-nonce (if any)
    })
  }

  async blockResourseUsers(blockResource: BlockResource) {
async loginOauth(){
  const { data, error } = await this.supabase.auth.signInWithOAuth({
  provider: 'google'
})
}

async  handleSignInWithGoogle(response :any) {
  const { data, error } = await this.supabase.auth.signInWithIdToken({
    provider: 'google',
    token: response.credential,
    nonce: 'NONCE', // must be the same one as provided in data-nonce (if any)
  })
}

  async blockResourseUsers(blockResource :BlockResource){

    const { data, error } = await this.supabase
      .from('resource')
      .update({ isBlocked: 'blocked' } || { employeeId: blockResource.employeeId })
      .eq('resourceId', blockResource.resourceId)
      .select()

    return { data, error }
  }
  async getUserProfile() {
    const { data } = await this.supabase.auth.getUser()
    const user = data.user

    return new Response(JSON.stringify({ user }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,

    })
  }
    return{data,error}
}

  async deleteResource(deleteResource: Resource) {
    await this.supabase
      .from('resource')
      .delete()
      .eq('resourceId', deleteResource.resourceId)
  }

   signinGoogle(){
    return this.supabase.auth.signInWithOAuth({
   signinGoogle(){
    return this.supabase.auth.signInWithOAuth({
    provider: 'google',
    options:{
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },

    }

    options:{
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },

    }

  })
}

getSession(){
  return this.supabase.auth.getSession();
}

getSession(){
  return this.supabase.auth.getSession();
}

  get session() {
    this.supabase.auth.getSession().then((data: any) => {
      this._session = data.session;
    });
    return this._session;
  }
  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback);
  }
  async signIn(email: string) {
    const { data, error } = await this.supabase.auth.signInWithOtp({
      email: email,
      options: {
        // set this to false if you do not want the user to be automatically signed up
        shouldCreateUser: false,
        emailRedirectTo: 'https://localhost:4200/',
        emailRedirectTo: 'https://localhost:4200/',
      },
    })
    this.supabase.auth.getSession().then((res)=>
    {
        console.log("important" + res)
    })
    this.supabase.auth.getSession().then((res)=>
    {
        console.log("important" + res)
    })
    console.log(data);
  }


}



