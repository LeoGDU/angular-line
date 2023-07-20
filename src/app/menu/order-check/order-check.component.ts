import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { orderToShopCar } from 'src/app/@models/data.model';

@Component({
  selector: 'app-order-check',
  templateUrl: './order-check.component.html',
  styleUrls: ['./order-check.component.css']
})
export class OrderCheckComponent implements OnInit{
  dataList!:orderToShopCar
  takeTime!:string;
  pickUpTimePlus!:string
  pickUpTime!:string
  constructor(private router:Router) {}

  ngOnInit(): void {
    this.dataList = JSON.parse(sessionStorage.getItem('productData')!);
    if (this.dataList == null) {
      this.router.navigateByUrl("/onlineOrder/order")
    }
    console.log(this.dataList)
  }

  checkTime(event:any){
    let date = new Date();
    this.pickUpTimePlus = date.getHours()+':'+ (date.getMinutes()+15)
    if(event.target.value < this.pickUpTimePlus) {
      alert('取餐時間不可早於即時起15分鐘')
      return ;
    }
    this.pickUpTime = event.target.value;
	}

  next() {
    console.log(this.pickUpTime)
    let date = new Date();
    this.pickUpTimePlus = date.getHours()+':'+ (date.getMinutes()+15)
    if (this.pickUpTime == null) {
      alert('取餐時間不得為空');
      return;
    }else if (this.pickUpTime < this.pickUpTimePlus) {
      alert('取餐時間不可早於即時起15分鐘')
      return ;
    }
    sessionStorage.setItem('takeTime',JSON.stringify(this.pickUpTime));
    this.router.navigateByUrl("/onlineOrder/orderCheckPay");
  }
}
