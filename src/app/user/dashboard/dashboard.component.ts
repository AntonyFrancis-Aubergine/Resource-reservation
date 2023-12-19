import { Component } from '@angular/core';
import { Reserve, Resource, ResourceList } from '../../resource.model';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

timepicker: any;
typeId:any;
fromTime:any
reserve:Reserve = {
  reservationId:'',
  employeeId:'',
  resourceId:'',
  dateFrom:'',
  timeFrom:'',
  dateTo:'',
  timeTo:''
}

fromDate:any;
toDate:any;
toTime:any;
selectedResourceId:string;
resourceTypeOptions:ResourceList[];
resourceOptionsPerType:Resource[];
resourceDependentList:Resource[] ;
resource:Resource ={
  resourceId: '',
  resourceTypeId: '',
};
constructor(private api:ApiService){}

onToTimeSelected(timeObject:any) {
  console.log(timeObject)
  console.log("abdc")

}
onFromTimeSelected(timeObject1:any) {
  console.log(timeObject1);

}
onToDateSelected(dateObject1:any) {
  console.log(dateObject1.value.toLocaleDateString("default", { day: "2-digit" }) + "-" + dateObject1.value.toLocaleDateString("default", { month: "2-digit" }) + "-" + dateObject1.value.toLocaleDateString("default", { year: "numeric" }))
  this.toDate = dateObject1.value.toLocaleDateString("default", { day: "2-digit" }) + "-" + dateObject1.value.toLocaleDateString("default", { month: "2-digit" }) + "-" + dateObject1.value.toLocaleDateString("default", { year: "numeric" });
  console.log(this.toDate);

}

onFromDateSelected(dateObject:any) {
  console.log(dateObject.value.toLocaleDateString("default", { day: "2-digit" }) + "-" + dateObject.value.toLocaleDateString("default", { month: "2-digit" }) + "-" + dateObject.value.toLocaleDateString("default", { year: "numeric" }))
  this.fromDate = (dateObject.value.toLocaleDateString("default", { day: "2-digit" }) + "-" + dateObject.value.toLocaleDateString("default", { month: "2-digit" }) + "-" + dateObject.value.toLocaleDateString("default", { year: "numeric" }))
  
}
onResourceSelected() {
  console.log(this.resource.resourceId);
  this.selectedResourceId = this.resource.resourceId;

}
onSelected() {
  console.log('selected resource is:' , this.resource.resourceTypeId);
  this.typeId = this.resource.resourceTypeId;
  console.log(this.typeId);
  this.populateSecondDropdown();
  
}
ngOnInit(){
  this.api.getResources().then((response:any)=>
  {
   this.resourceTypeOptions= response.data;
   console.log(this.resourceTypeOptions);
  })

  
 
}

populateSecondDropdown(){
  this.api.getResourcesDependent(this.typeId).then((response:any)=>
  {
    this.resourceDependentList=response.data;
    console.log(this.resourceDependentList)
  });
}

reserveForm(data:any){

  console.log
  (data);
}
}

