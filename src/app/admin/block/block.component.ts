import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { BlockResource, Resource, Users } from '../../resource.model';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrl: './block.component.css'
})
export class BlockComponent {
registeredResources: BlockResource[];
registeredUsers:Users[];
// resource:Resource ={
//   resourceId : '',
//   resourceTypeId: ''
// };

block : BlockResource ={
  resourceId: '',
  employeeId: ''


}

  constructor(private api:ApiService){}

  ngOnInit(){
 this.api.getRegisteredResources().then((response :any)=>
 {
  this.registeredResources = response.data;
  console.log(this.registeredResources);
 })


 this.api.getRegisteredUsers().then((response:any) => 
 {
  this.registeredUsers = response.data;
  console.log(this.registeredUsers)
 })
}

  async blockResourceUser(blockRes : BlockResource){
  console.log(blockRes)

    try {
      const result = await this.api.blockResourseUsers(blockRes);
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
