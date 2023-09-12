import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _httpClient:HttpClient) { }

  getstudents():Observable<any>{
    return this._httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students")
  }

  getpost(data:any):Observable<any>{
    return this._httpClient.post("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students",data)

  }
}
