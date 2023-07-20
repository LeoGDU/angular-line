import { lineUser } from './../../../@models/data.model';
import { HeaderServiceService } from './../../../@services/header-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RefreshHeaderService } from 'src/app/@services/refresh-header.service';
import liff from '@line/liff';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {
  shopCarNum!: number;
  picture!:string;
  uName!:string;
  uLineD!:string;

  constructor(private refreshHeaderService:RefreshHeaderService,private headerService:HeaderServiceService) { }

  ngOnInit(): void {
    var pictureUrl
    var uNameString
    var uLineDString
    uNameString = 'LeoTest'
    uLineDString = '512341231231231sda'
    this.uName = uNameString
    this.uLineD = uLineDString
  // liff.init({
  //     liffId: '1657828282-o24PQdv3',
  //     withLoginOnExternalBrowser: true,
  // }).then(function() {
  //   console.log('LIFF init');
  //   console.log('LIFF isLogin = ', liff.isLoggedIn());  // 判斷開啟此網頁的 LINE 使用者是否為登入狀態
  //   // 這邊開始寫使用其他功能
    
  //   if (liff.isLoggedIn()) {
  //    console.log('已登入');
  //    const idToken = liff.getDecodedIDToken();
  //    console.log('DecodedIDToken : ', idToken) // print decoded idToken object
  //    liff.getProfile()
  //     .then(profile => {
  //       pictureUrl = profile.pictureUrl
  //       uNameString = profile.displayName
  //       uLineDString = profile.userId
  //       if(sessionStorage.getItem('uName') == null) {
  //         sessionStorage.setItem('uName',JSON.stringify(uNameString))
  //         sessionStorage.setItem('uLineD',JSON.stringify(uLineDString))
  //       }
  //     })
  //   } else {
  //    console.log('未登入');
  //   }
    
  //   // 取得使用者公開資料
  //   liff.getProfile()
  //   console.log('LIFF Get User Profile : ', liff.getProfile());
   
  //   // 引用 LIFF SDK 的頁面，頁面中的 lang 值
  //   console.log('LIFF language : ', liff.getLanguage());
   
  //   // LIFF SDK 的版本
  //   console.log('LIFF version : ', liff.getVersion());
   
  //   // 回傳是否由 LINE App 存取
  //   console.log('LIFF inClient : ', liff.isInClient);
   
  //   // 使用者是否登入 LINE 帳號
  //   console.log('LIFF loggedIn : ', liff.isLoggedIn);
   
  //   // 回傳使用者作業系統：ios、android、web
  //   console.log('LIFF OS : ', liff.getOS());
   
  //   // 使用者的 LINE 版本
  //   console.log('LIFF Line Version : ', liff.getLineVersion());
  //  }).catch(function(error) {
  //   console.log(error);
  //  });

    if(sessionStorage.getItem('uLineD') == null) {
      sessionStorage.setItem('uName',JSON.stringify(uNameString))
      sessionStorage.setItem('uLineD',JSON.stringify(uLineDString))
    }

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

  logout(){
  }


  getSessionData() {
    return sessionStorage.getItem('productData');
  }
}
