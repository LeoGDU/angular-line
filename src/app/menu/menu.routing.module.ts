import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { MenuComponent } from './menu.component';
import { ShopCarComponent } from './shopCar/shop-car/shop-car.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrderCheckComponent } from './order-check/order-check.component';
import { OrderCheckPayComponent } from './order-check-pay/order-check-pay.component';
import { ConfirmApiComponent } from './confirm-api/confirm-api.component';
import { SucessPayComponent } from './sucess-pay/sucess-pay.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderHistroyDetailComponent } from './order-histroy-detail/order-histroy-detail.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {path : '', 
  component: MenuComponent,
  children : [
    {path : 'order', component: OrderComponent},
    {path : 'shopCar', component: ShopCarComponent},
    {path : 'orderHistory', component: OrderHistoryComponent},
    {path : 'orderHistoryDetail', component: OrderHistroyDetailComponent},
    {path : 'productDeatil', component: ProductDetailComponent},
    {path : 'orderCheck', component: OrderCheckComponent},
    {path : 'orderCheckPay', component: OrderCheckPayComponent},
    {path : 'confirmApi', component: ConfirmApiComponent},
    {path : 'sucessPay', component: SucessPayComponent},
    { path: '',   redirectTo: 'store', pathMatch: 'full' },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
