import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{ Observable}from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  dologin(value: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private _httpClient:HttpClient) { }

  login(data:any):Observable<any>{
    return this._httpClient.post("https://reqres.in/api/login",data)
  }
}
