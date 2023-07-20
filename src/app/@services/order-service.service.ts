import { data, dataList, orderDetail, orderToShopCar, returnCode, sucessUrl } from './../@models/data.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient) { }
  private url = '/order';

  getOrderData(){
    return this.http.get<data[]>("/angular/order");
  }

  getOrderDetail(id:string){
    return this.http.get<orderDetail>("/angular/order/orderData?id="+id);
  }

  checkToShopCar(value:orderToShopCar){
    return this.http.post<orderToShopCar>("/angular/order/checkToShopCar",value);
  }
  
  checkLinePay(dataList:orderToShopCar,takeTime:string,totalPrice:string,uLineD:string) {
    return this.http.post<sucessUrl>("/angular/confirmOrder/checkLinePay?takeTime="+takeTime+"&totalPrice="+totalPrice+"&uLineD="+uLineD,dataList);
  }

  confirmLinePayApi(transactionId:string,orderId:string) {
    return this.http.get<returnCode>("/angular/confirmOrder/checkPay?transactionId="+transactionId+"&orderId="+orderId)
  }
}
