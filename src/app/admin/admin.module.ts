import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatNativeDateModule} from '@angular/material/core';
import {MatListModule, MatNavList} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './header/header.component';
import { AddComponent } from './add/add.component';
import { BlockComponent } from './block/block.component';
import { DeleteComponent } from './delete/delete.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
  
       AdminNavbarComponent,
       HeaderComponent,
       AddComponent,
       BlockComponent,
       DeleteComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    AdminRoutingModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
MatButtonModule,
MatIconModule,
MatTableModule ,
MatToolbarModule,
MatCardModule,
MatFormFieldModule ]
})
export class AdminModule { }
