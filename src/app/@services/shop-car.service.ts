import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataList, orderToShopCar } from '../@models/data.model';

@Injectable({
  providedIn: 'root'
})
export class ShopCarService {

  constructor(private http: HttpClient) { }
  private url = '/shopCar';

  getShopCarData(dataList:orderToShopCar){
    return this.http.post<dataList>("/angular/shopCar",dataList);
  }

  editProduct(dataList:orderToShopCar,idx:any,mt:string){
    return this.http.post<dataList>("/angular/shopCar/edit?idx="+idx+"&mt="+mt,dataList);
  }

  removeProduct(dataList:orderToShopCar,idx:any) {
    return this.http.post<dataList>("/angular/shopCar/remove?idx="+idx,dataList);
  }

}
