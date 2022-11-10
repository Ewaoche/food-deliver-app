import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  login(url, data):any{
     return this.http.post<any>(url, data);
  }

  register(url, data):any{
    return this.http.post<any>(url, data);
  }
}
