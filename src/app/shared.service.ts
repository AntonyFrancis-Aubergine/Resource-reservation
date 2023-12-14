import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  userId:string | null = null;

  setUserId(Id:string): void {
    this.userId = Id;
  }

  getUserId():string | null {
    return this.userId;
  }

  
}
