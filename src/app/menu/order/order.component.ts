import { Router, RouterEvent } from '@angular/router';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { OrderServiceService } from 'src/app/@services/order-service.service';
import { RefreshHeaderService } from 'src/app/@services/refresh-header.service';
import {HostListener } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  shopCarNum!:number
  data: any;

  constructor(private orderService: OrderServiceService,private router:Router,private refreshHeaderService:RefreshHeaderService,private renderer: Renderer2, private elementRef: ElementRef) { }
  ngOnInit(): void {
    sessionStorage.removeItem('checkPay')
    this.orderService.getOrderData().subscribe(data => {
      this.data = data
    } );
    this.refreshHeaderService.refreshHeader$.subscribe(() => {
      var arraySize = JSON.parse(this.getSessionData()!);
      if (arraySize != null) {
        this.shopCarNum = arraySize.length;
      }else {
        this.shopCarNum = 0
      }
      console.log( this.shopCarNum)
    });
    var arraySize = JSON.parse(this.getSessionData()!);
    if (arraySize != null) {
      this.shopCarNum = arraySize.length;
    }
    console.log( this.shopCarNum)
  }

  productDetail(id:string) {
    this.router.navigateByUrl("/onlineOrder/productDeatil?id="+id)
  }

  getSessionData() {
    return sessionStorage.getItem('productData');
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 0) {
      this.fadeInElement();
     
    }
  }
  fadeInElement() {
    const gotopElement = this.elementRef.nativeElement.querySelector('#gotop');
    this.renderer.setStyle(gotopElement, 'display', 'block');
    this.renderer.setStyle(gotopElement, 'opacity', '1');
  }
}
