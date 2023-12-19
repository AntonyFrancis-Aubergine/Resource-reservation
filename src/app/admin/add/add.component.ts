import { Component } from '@angular/core';
import { Resource, ResourceList } from '../../resource.model';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
 
  resource:Resource ={
    resourceId: '',
    resourceTypeId: '',
  };
  actionLabel:string ;
resourceOptions!: ResourceList[] ;
optionName: any;


  constructor(private api:ApiService){}

  ngOnInit(){
 this.api.getResources().then((response :any)=>
 {

  this.resourceOptions = response.data;
  console.log(this.resourceOptions)

  
 })

  }
  async addResource(data: Resource) {

    console.log(data)

    try {
      const result = await this.api.addResources(data);
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
