import { Component } from '@angular/core';
import { Resource } from '../../resource.model';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  registeredResources: Resource[];
  resource:Resource ={
    resourceId : '',
    resourceTypeId: ''
  };

  deleteResource:Resource;
    constructor(private api:ApiService){}
  
    ngOnInit(){
   this.api.getRegisteredResources().then((response :any)=>
   {
    this.registeredResources = response.data;
    console.log(this.registeredResources)
   })


  }

  delete(data:Resource){
     this.api.deleteResource(data);
    if (data) {
      alert("Deleted the resource with resource Id " + data.resourceId);
    } else {
      alert("Operation not successful");
    }
  } 

  }


