import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { orderToShopCar } from 'src/app/@models/data.model';
import { OrderServiceService } from 'src/app/@services/order-service.service';

@Component({
  selector: 'app-order-check-pay',
  templateUrl: './order-check-pay.component.html',
  styleUrls: ['./order-check-pay.component.css']
})
export class OrderCheckPayComponent implements OnInit{
  uLineName!:string;
  takeTime!:string;
  totalPrice!:string;
  dataList!:orderToShopCar;
  uLineD!:string;
  constructor(private orderServiceService:OrderServiceService,private renderer: Renderer2,private router:Router) {}

  ngOnInit(): void {
    this.uLineName = JSON.parse(sessionStorage.getItem('uName')!);
    this.uLineD = JSON.parse(sessionStorage.getItem('uLineD')!);
    this.totalPrice = JSON.parse(sessionStorage.getItem('totalPrice')!);
    this.takeTime = JSON.parse(sessionStorage.getItem('takeTime')!);
    this.dataList = JSON.parse(sessionStorage.getItem('productData')!);
    if (this.takeTime == null) {
      this.router.navigateByUrl('/onlineOrder/order')
      return;
    }
  }

  checkOk() {
    this.orderServiceService.checkLinePay(this.dataList,this.takeTime,this.totalPrice,this.uLineD).subscribe(linePayUrl => {
      console.log(linePayUrl.url);
      this.redirectToNewUrl(linePayUrl.url);
    })
  }
  redirectToNewUrl(url: string): void {
    this.renderer.setProperty(window.location, 'href', url);
  }
}
