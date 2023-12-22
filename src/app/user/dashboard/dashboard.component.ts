import { Component } from '@angular/core';
import { Reserve, Resource, ResourceList } from '../../resource.model';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

timepicker: any;
typeId:any= '2'
fromTime:any
reserve:Reserve = {
  reservationId:'',
  employeeId:'',
  resourceId:'',
  dateFrom:'',
  timeFrom:'',
  dateTo:'',
  timeTo:'',
  resourceTypeId:''
};

submitResource:any = {
  

};

fromDate:any='2023-12-01'
toDate:any='2023-12-30'
toTime:any;
fromProper: any;
toProper: any;
selectedResourceId:string;
resourceTypeOptions:ResourceList[];
resourceOptionsPerType:Resource[];
resourceDependentList:Resource[] ;
resource:Resource ={
  resourceId: '',
  resourceTypeId: '',
};
  emailOfUser: string | undefined;
constructor(private api:ApiService , private router:Router){}

onToTimeSelected(timeObject:any) {
  this.toTime = timeObject;
  console.log(this.toTime)

}
onFromTimeSelected(timeObject1:any) {
  this.fromTime = timeObject1;

}
onToDateSelected(dateObject1:any) {
  console.log(dateObject1.value.toLocaleDateString("default", { year: "numeric" }) + "-" + dateObject1.value.toLocaleDateString("default", { month: "2-digit" }) + "-" + dateObject1.value.toLocaleDateString("default", { day: "2-digit" }))
  this.toDate = dateObject1.value.toLocaleDateString("default", { year: "numeric" }) + "-" + dateObject1.value.toLocaleDateString("default", { month: "2-digit" }) + "-" + dateObject1.value.toLocaleDateString("default", { day: "2-digit" })
  console.log(this.toDate);

}

onFromDateSelected(dateObject1:any) {
  console.log(dateObject1.value.toLocaleDateString("default", { year: "numeric" }) + "-" + dateObject1.value.toLocaleDateString("default", { month: "2-digit" }) + "-" + dateObject1.value.toLocaleDateString("default", { day: "2-digit" }))
  this.fromDate = dateObject1.value.toLocaleDateString("default", { year: "numeric" }) + "-" + dateObject1.value.toLocaleDateString("default", { month: "2-digit" }) + "-" + dateObject1.value.toLocaleDateString("default", { day: "2-digit" })
  console.log(this.fromDate);
}
onResourceSelected() {
  console.log(this.reserve.resourceId);
  this.selectedResourceId = this.reserve.resourceId;

}
onSelected() {
  console.log('selected resource is:' , this.reserve.resourceTypeId);
  this.typeId = this.reserve.resourceTypeId;
  console.log(this.typeId);
  this.populateSecondDropdown();
  
}
ngOnInit(){
  this.api.getResources().then((response:any)=>
  {
   this.resourceTypeOptions= response.data;
   console.log(this.resourceTypeOptions);
  })

  this.api.authChanges((_, session) =>{

    this.emailOfUser = (session?.user.email);
    console.log(this.emailOfUser)
})

this.getreserver();
}
  
 


populateSecondDropdown(){
  this.api.getResourcesDependent(this.typeId).then((response:any)=>
  {
    this.resourceDependentList=response.data;
    console.log(this.resourceDependentList)
  });
}

async reserveForm(){

this.submitResource.dateFrom = this.fromDate;
this.submitResource.dateTo = this.toDate;
this.submitResource.resourceId = this.selectedResourceId;
this.submitResource.email = this.emailOfUser;
console.log(this.submitResource)
try {
  const result = await this.api.addReservation(this.submitResource);
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

async getreserver(){
  this.api.getResourcesAvailable(this.typeId,this.fromDate,this.toDate)

}


}

