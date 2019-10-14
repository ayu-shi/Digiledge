import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BusinessService } from './business.service';
import { AddThiefComponent } from './add-thief/add-thief.component';
import { GetThiefComponent } from './get-thief/get-thief.component';
import { UpdateDeleteThiefComponent } from './update-delete-thief/update-delete-thief.component';
import { ThiefEditComponent } from './thief-edit/thief-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    AddThiefComponent,
    GetThiefComponent,
    UpdateDeleteThiefComponent,
    ThiefEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
