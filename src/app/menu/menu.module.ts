import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu.routing.module';
import { MenuComponent } from './menu.component';
import { OrderComponent } from './order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopCarComponent } from './shopCar/shop-car/shop-car.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrderCheckComponent } from './order-check/order-check.component';
import { OrderCheckPayComponent } from './order-check-pay/order-check-pay.component';
import { ConfirmApiComponent } from './confirm-api/confirm-api.component';
import { SucessPayComponent } from './sucess-pay/sucess-pay.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderHistroyDetailComponent } from './order-histroy-detail/order-histroy-detail.component';
import { BottomComponent } from './shared/bottom/bottom.component';



@NgModule({
  declarations: [
    MenuComponent,
    OrderComponent,
    ShopCarComponent,
    ProductDetailComponent,
    OrderCheckComponent,
    OrderCheckPayComponent,
    ConfirmApiComponent,
    SucessPayComponent,
    OrderHistoryComponent,
    OrderHistroyDetailComponent,
    BottomComponent,
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class MenuModule { }
