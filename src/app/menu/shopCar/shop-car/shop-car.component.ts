import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { orderToShopCar } from 'src/app/@models/data.model';
import { RefreshHeaderService } from 'src/app/@services/refresh-header.service';
import { ShopCarService } from 'src/app/@services/shop-car.service';

@Component({
  selector: 'app-shop-car',
  templateUrl: './shop-car.component.html',
  styleUrls: ['./shop-car.component.css']
})
export class ShopCarComponent implements OnInit{
  dataList!:orderToShopCar
  totalNum!:number
  totalPrice!:number;
  num!:number;
  constructor(private shopCarService:ShopCarService,private refreshHeaderService:RefreshHeaderService){}
  ngOnInit(): void {
    this.dataList = JSON.parse(sessionStorage.getItem('productData')!);
    if (this.dataList != null) {
      this.shopCarService.getShopCarData(this.dataList).subscribe(data => {
        this.totalNum = data.totalNum;
        this.totalPrice = data.totalPrice;
        sessionStorage.setItem('totalNum',JSON.stringify(this.totalNum));
        sessionStorage.setItem('totalPrice',JSON.stringify(this.totalPrice));
      })
    }
  }

  numMinus(idx:any,num:number){
    if (num - 1 < 1) {
      this.shopCarService.removeProduct(this.dataList,idx).subscribe(data => {
        this.refreshSession(data);
        this.refreshHeaderService.triggerHeaderRefresh();
      })
      return ;
    }
    this.shopCarService.editProduct(this.dataList,idx,"minus").subscribe(data => {
      this.refreshSession(data);
    })
	}

  numPlus(idx:any){
    this.shopCarService.editProduct(this.dataList,idx,"plus").subscribe(data => {
      this.refreshSession(data);
    })
	}

 refreshSession(data:any) {
  var productData = JSON.stringify(data);
  sessionStorage.setItem('productData',productData);
  this.dataList = JSON.parse(sessionStorage.getItem('productData')!);
  this.getNewProductData(JSON.parse(productData));
 }

  getNewProductData(data:orderToShopCar){
    this.shopCarService.getShopCarData(data).subscribe(data2 => {
      this.totalNum = data2.totalNum;
      this.totalPrice = data2.totalPrice;
      sessionStorage.setItem('totalNum',JSON.stringify(this.totalNum));
      sessionStorage.setItem('totalPrice',JSON.stringify(this.totalPrice));
    })
  }
}
