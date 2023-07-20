import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { StoreComponent } from './menu/store/store.component';

const routes: Routes = [
  {path : 'store', component: StoreComponent},
  {path : 'onlineOrder', loadChildren:() => import('./menu/menu.module').then(m => m.MenuModule)},
  { path: '',   redirectTo: 'store', pathMatch: 'full' },
  // { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }