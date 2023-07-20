import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RefreshHeaderService } from 'src/app/@services/refresh-header.service';

@Component({
  selector: 'app-sucess-pay',
  templateUrl: './sucess-pay.component.html',
  styleUrls: ['./sucess-pay.component.css']
})
export class SucessPayComponent implements OnInit{

  takeTime!:string;
  totalPrice!:string;
  orderNo!:string;
  uLineName!:string;
  checkPay!:string;
  constructor(private router:Router,private refreshHeaderService:RefreshHeaderService) {}

  ngOnInit(): void {
    this.checkPay = JSON.parse(sessionStorage.getItem('checkPay')!);
    this.uLineName = JSON.parse(sessionStorage.getItem('uName')!);
    console.log(this.checkPay)
    if (this.checkPay != 'pay') {
      this.router.navigateByUrl('/onlineOrder/order')
      return;
    }
    console.log(JSON.parse(sessionStorage.getItem('takeTime')!))
    this.takeTime = JSON.parse(sessionStorage.getItem('takeTime')!)
    this.totalPrice = JSON.parse(sessionStorage.getItem('totalPrice')!)
    this.orderNo = JSON.parse(sessionStorage.getItem('orderNo')!)
    this.uLineName = 'LeoTest'
    sessionStorage.removeItem('totalNum')
    sessionStorage.removeItem('totalPrice')
    sessionStorage.removeItem('productData')
    sessionStorage.removeItem('takeTime')
    this.clearShopCar()
  }

  payCheck(){
    JSON.parse(sessionStorage.getItem('checkPay')!);
  }

  clearShopCar() {
    sessionStorage.removeItem('productData')
    console.log(sessionStorage.getItem('productData'))
    this.refreshHeaderService.triggerHeaderRefresh();
  }

}
