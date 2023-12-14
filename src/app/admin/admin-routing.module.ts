import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AddComponent } from './add/add.component';
import { BlockComponent } from './block/block.component';
import { DeleteComponent } from './delete/delete.component';


const routes: Routes = [{path:'',component:AdminNavbarComponent,
children:[
  {path:'add', component:AddComponent},
  {path:'block', component:BlockComponent},
  {path:'delete', component:DeleteComponent}
]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
