import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  baseUrl: string = "http://springbootdemo-springbootdemo.b9ad.pro-us-east-1.openshiftapps.com/userdetail";

  getUsers(){
    return this.http.get<User[]>(this.baseUrl);
  }
}
