import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lineUser } from '../@models/data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {

  constructor(private http:HttpClient) { }

  getUser(lineUser:lineUser) {
    console.log(lineUser)
    return this.http.post<lineUser>("/angular/line",lineUser)
  }
}
