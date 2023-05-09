import { Component,OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { contact } from '../contactmodel';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{
data:undefined|contact[]
  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.get();
  
  }
  get(){
    this.api.get().subscribe((res=>{
      this.data=res
    }))
  }
  //delete data
delete(id:number){
  if(confirm('Are You Want to delete the Data'))//this is for confirmation
   this.api.delete(id)
   .subscribe(res=>{
 alert(" Data Deleted Successfully");
 this.get();
   })
 }
 logout(){
  localStorage.removeItem("logindata");
 }
 
}
