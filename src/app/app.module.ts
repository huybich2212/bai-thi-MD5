import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { DetailStudentComponent } from './student/detail-student/detail-student.component';

@NgModule({
  declarations: [
    AppComponent,
    ListStudentComponent,
    NavbarComponent,
    CreateStudentComponent,
    EditStudentComponent,
    DetailStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
