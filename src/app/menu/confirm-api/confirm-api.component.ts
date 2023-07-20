import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderServiceService } from 'src/app/@services/order-service.service';

@Component({
  selector: 'app-confirm-api',
  templateUrl: './confirm-api.component.html',
  styleUrls: ['./confirm-api.component.css']
})
export class ConfirmApiComponent implements OnInit{
  transactionId!:string;
  orderId!:string;
  constructor(private active:ActivatedRoute,private orderSerivce:OrderServiceService,private router:Router) {}

  ngOnInit(): void {
    this.active.queryParams.subscribe(param => {
        this.transactionId = param['transactionId']
        this.orderId = param['orderId']
        if (this.transactionId == null) {
          this.router.navigateByUrl('/onlineOrder/order')
          return ;
        }
        this.orderSerivce.confirmLinePayApi(this.transactionId,this.orderId).subscribe(returnCode => {
          if (returnCode.returnCode == '0000') {
            sessionStorage.setItem('checkPay',JSON.stringify('pay'));
            sessionStorage.setItem('orderNo',JSON.stringify(returnCode.orderNo));
            this.router.navigateByUrl('/onlineOrder/sucessPay')
            return ;
          }else {
            alert('失敗')
            this.router.navigateByUrl('/onlineOrder/order')
            return ;
          }
        })
      })
  }

}
