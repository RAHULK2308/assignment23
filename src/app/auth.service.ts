import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient) { }

  addusers(data:any){
    return  this.http.post("http://localhost:3000/register",data)
    }
}
