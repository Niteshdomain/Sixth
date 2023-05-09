import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute ,Params, Router} from '@angular/router';
import { contact } from '../contactmodel';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  public contactid!:number;
  public contactdata:contact={} as contact;

  constructor(private api:ApiService, private aroute:ActivatedRoute,private route:Router) {
    
  }
ngOnInit(): void {
    this.aroute.params.subscribe((param:Params)=>{
   this.contactid=param['id']
    })
    this.api.fetch(this.contactid).subscribe((data:contact)=>{
 this.contactdata =data;

    })
}
update(){
  this.api.update(this.contactdata,this.contactid).subscribe((res:contact)=>{
  alert("Data Updated Successfully!!");
  this.route.navigate(['/contactlist']);
  })
}
}
