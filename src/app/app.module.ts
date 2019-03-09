import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from "./app.routing";
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserServiceService} from "./service/user-service.service";

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
