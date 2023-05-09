import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { contact } from '../contactmodel';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {
  contactform: FormGroup;
 
  constructor(private formbuilder: FormBuilder, private route: Router, private api: ApiService) {
  }
  ngOnInit(): void {
    this.contactform = this.formbuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required]
    })
  }
  submit(data:contact) {
    // console.log(this.contactform.value);
    this.api.add(data).subscribe((res=>{
      this.contactform.reset();
      this.route.navigate(["/contactlist"]);
    }))
    
  }
}
