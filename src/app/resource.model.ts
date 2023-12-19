export interface Resource {
    resourceId :string ;
    resourceTypeId :string;
// employeeId: any;
    

}
export interface ResourceList {
    resourceTypeId: string;
    name:string;
}

export interface RegisteredUsers {
    employeeId :string;
    email :string;
    password:string;
    googleUserId:string;

}
export interface Reserve{
    reservationId:string;
    employeeId:string;
    resourceId:string;
    dateFrom:string;
    dateTo:string;
    timeFrom:string;
    timeTo:string;
}

export interface BlockResource{
    resourceId:string;
    employeeId:string;
}

export interface Users {
    employeeId:string;
    email:string;
    password:string;
    googleUserId:string;

}