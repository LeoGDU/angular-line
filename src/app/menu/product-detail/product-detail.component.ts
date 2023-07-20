import { orderToShopCar, dataList } from './../../@models/data.model';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderServiceService } from 'src/app/@services/order-service.service';
import { RefreshHeaderService } from 'src/app/@services/refresh-header.service';

@Component({
  selector: 'app-product-detail',
  template: `
  <input [formControl]="control">`,
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  form: FormGroup;
  detail:any
  sizeL:any
  sizeM:any
  priceM:any
  priceL:any
  id:any
  noL:any
  noM:any
  num:number = 1;
  preview!:string;
  finalPrice1!:string;
  finalSizeId1!:string;
  dataList1!:orderToShopCar;
  shopCarNum!: number;
  constructor(private active:ActivatedRoute,private orderServiceService:OrderServiceService,private fb: FormBuilder,private router:Router,private refreshHeaderService:RefreshHeaderService){
    this.form = this.fb.group({
      // 表示一定要輸入
     productName : [''],
     productSizeId : [0],
     productId : [0],
     size : ['M'],
     ice : ['正常冰'],
     sweet : ['半糖'],
     num : ['1'],
     finalPrice : ['0'],
     dataList : [this.dataList1],
    })
  }
  ngOnInit(): void {
    this.dataList1 = JSON.parse(this.getSessionData()!);
    this.active.queryParams.subscribe(param => {
      this.id = param['id']
      this.orderServiceService.getOrderDetail(this.id).subscribe(data => {
        this.detail = data.orderDetail;
        this.sizeL = data.sizeL;
        this.sizeM = data.sizeM;
        this.priceM = data.priceM;
        this.priceL = data.priceL;
        this.noM = data.noM
        this.noL = data.noL
        this.finalPrice1 = data.priceM;
        this.finalSizeId1 = data.noM
      })
    })
  }

  numMinus(){
		var minusNum = this.num;
		if(minusNum - 1 == 0){
			alert('杯數不可為0杯');
		}else{
      this.num = minusNum - 1;
		}
	}

  numPlus(){
		var plusNum = this.num;
    this.num = plusNum + 1;
	}

  onChange(value:any) {
    if(value == 'L') {
      this.finalPrice1 = this.priceL;
      this.finalSizeId1 = this.noL;
    }else if (value == 'M') {
      this.finalPrice1 = this.priceM;
      this.finalSizeId1 = this.noM;
    }
  }

  // 提交執行的程式
  submitForm(){
    this.form.value.dataList = this.dataList1
    this.orderServiceService.checkToShopCar(this.form.value).subscribe(data => {
      var productData = JSON.stringify(data); 
      sessionStorage.setItem('productData',productData);
      this.dataList1 = data;
      this.router.navigateByUrl("/onlineOrder/order");
      this.refreshHeaderService.triggerHeaderRefresh();
    });
  }
  
  getSessionData() {
    return sessionStorage.getItem('productData');
  }
}
