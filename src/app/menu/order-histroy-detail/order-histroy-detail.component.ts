import { OrderHistoryService } from 'src/app/@services/order-history.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { orderHistoryDetailData } from 'src/app/@models/data.model';

@Component({
  selector: 'app-order-histroy-detail',
  templateUrl: './order-histroy-detail.component.html',
  styleUrls: ['./order-histroy-detail.component.css']
})
export class OrderHistroyDetailComponent implements OnInit{
  orderNo!:string;
  orderTime!:string;
  totalPrice!:string;
  dataList!:orderHistoryDetailData
  constructor(private active:ActivatedRoute,private orderHistoryService:OrderHistoryService,private router:Router) {}

  ngOnInit(): void {
    var checkHistory = JSON.parse(sessionStorage.getItem('checkHistory')!)
    if (checkHistory != 'Y') {
      this.router.navigateByUrl("/onlineOrder/orderHistory")
      return ;
    }
    this.orderTime = JSON.parse(sessionStorage.getItem('orderTime')!)
    this.totalPrice = JSON.parse(sessionStorage.getItem('totalPrice')!)
    this.active.queryParams.subscribe(param => {
      this.orderNo = param['orderNo']
      this.orderHistoryService.getHistoryDetail(this.orderNo).subscribe(data => {
        this.dataList = data
        console.log(this.dataList)
      })
    })
  }

}
