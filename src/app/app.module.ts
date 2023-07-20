import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProcessBarComponent } from './@shared/process-bar/process-bar.component';
import { ProcessBarModule } from './@shared/process-bar/process-bar.module';
import { Header2Component } from './menu/shared/header2/header2.component';
import { StoreComponent } from './menu/store/store.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    Header2Component,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ProcessBarModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
