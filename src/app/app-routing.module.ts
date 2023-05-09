import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: 'contactlist', component: ContactListComponent,canActivate:[AuthGuard] },
  { path: 'add', component: ContactAddComponent ,canActivate:[AuthGuard]},
  {path:'update/:id',component:UpdateContactComponent ,canActivate:[AuthGuard]},
  {path:'login-signup',component:LoginSignupComponent},
  {path:'',redirectTo:'login-signup',pathMatch:'full'},
  {path:'**',redirectTo:'login-signup',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
