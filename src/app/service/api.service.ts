import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { contact } from '../contactmodel';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url="http://localhost:3000/posts";
  constructor(private http:HttpClient) { }

  //post method
  add(data:contact){
    return this.http.post<contact>(this.url,data);
      }

  //get method
  get(){
  return this.http.get<contact[]>(this.url);
}
 //update
 fetch(id:number){//for fetching this is.....
  return this.http.get<contact>(this.url +'/'+id);
 }
 update(data:contact,id:number){
  return this.http.put<contact>(this.url+"/"+id,data);
}
//delete
delete(id:number){
  return this.http.delete<contact>(this.url+'/'+id);
  //in this url is importanat + '/'this is important after posts
}
}
