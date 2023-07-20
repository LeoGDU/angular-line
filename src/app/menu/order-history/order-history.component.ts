import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { orderHistoryData } from 'src/app/@models/data.model';
import { OrderHistoryService } from 'src/app/@services/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  dataList!:orderHistoryData;
  uLineD!:string
  constructor(private orderHistoryService:OrderHistoryService,private router:Router) {}

  ngOnInit(): void {
    sessionStorage.removeItem('checkHistory')
    this.uLineD = JSON.parse(sessionStorage.getItem('uLineD')!);
    this.orderHistoryService.getOrderHistoryData(this.uLineD).subscribe(data => {
      this.dataList = data
      
    })
  }

  showHistory(orderNo:string,totalPrice:string,orderTime:string) {
    sessionStorage.setItem('orderNo',JSON.stringify(orderNo))
    sessionStorage.setItem('totalPrice',JSON.stringify(totalPrice))
    sessionStorage.setItem('orderTime',JSON.stringify(orderTime))
    sessionStorage.setItem('checkHistory',JSON.stringify('Y'))
    this.router.navigateByUrl("/onlineOrder/orderHistoryDetail?orderNo="+orderNo)
  }

}
