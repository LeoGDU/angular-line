import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { orderHistoryData, orderHistoryDetailData } from '../@models/data.model';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  constructor(private http:HttpClient) { }

  getOrderHistoryData(uLineD:string) {
    return this.http.get<orderHistoryData>("/angular/orderHistory?uLineD="+uLineD)
  }

  getHistoryDetail(orderNo:string) {
    return this.http.post<orderHistoryDetailData>("/angular/orderHistoryDetail",orderNo)
  }
}
