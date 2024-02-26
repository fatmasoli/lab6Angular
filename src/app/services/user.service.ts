import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../models/iuser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  myHeaders={}
     constructor(private http:HttpClient) {
       this.myHeaders={headers:new HttpHeaders({
         'Content-Type':'application/json',
       })}
      }
     
     creatUser(user:Iuser):Observable<any>{
     return this.http.post<any>(`http://localhost:3000/users`,JSON.stringify(user),this.myHeaders)
     }
}
