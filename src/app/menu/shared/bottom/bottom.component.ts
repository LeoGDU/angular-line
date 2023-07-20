import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from 'src/app/@services/header-service.service';
import { RefreshHeaderService } from 'src/app/@services/refresh-header.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit {
  shopCarNum!: number;
  show!: boolean;
  constructor(private refreshHeaderService:RefreshHeaderService,private headerService:HeaderServiceService,private location: Location) { }

  ngOnInit(): void {

    // const currentPath = this.location.path();
    // console.log(currentPath)
    // if(currentPath == '/onlineOrder/store'){
    //   this.show = false
    // }else {
    //   this.show = true
    // }

    this.refreshHeaderService.refreshHeader$.subscribe(() => {
      var arraySize = JSON.parse(this.getSessionData()!);
      if (arraySize != null) {
        this.shopCarNum = arraySize.length;
      }else {
        this.shopCarNum = 0
      }
    });
    var arraySize = JSON.parse(this.getSessionData()!);
    if (arraySize != null) {
      this.shopCarNum = arraySize.length;
    }
  }

  getSessionData() {
    return sessionStorage.getItem('productData');
  }
}
