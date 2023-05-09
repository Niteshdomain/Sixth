import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactAddComponent,
    UpdateContactComponent,
    LoginSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
