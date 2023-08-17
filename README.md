# angular-line
利用angular前端框架來實作模擬一家咖啡簡餐店的行動預點功能的前端頁面！
搭配Repository - lineOrder 後端Api 完成 前後端分離 - 後端操作商品等資訊、呼叫Line Pay api等功能

# 頁面功能說明(component)：
`order` - 店家menu (依照飲料種類分別列出各式飲料及價錢)

`product-detail` - 商品詳細資訊(選擇冰塊甜度、中杯大杯及杯數)、將商品購物車

`shopCar` - 購物車頁面(呈現所選飲品及總價格、總數量)

`order-check` - 選擇取餐時間、商品確認

`order-check-pay` - 最終訂單訊息確認

`confirm-api` - 等待Line Pay轉跳頁面

`sucess-pay` - Line Pay付款後的訂單成功頁面

`order-history` - 歷史訂單頁面(曾經完成的訂單)

`order-history-detail` - 歷史訂單的詳細資訊(詳細商品資訊、訂單時間)


# 路由器Routing 分配：
### order
- component: OrderComponent
### shopCar
- component: ShopCarComponent
### orderHistory
- component: OrderComponent
### orderHistoryDetail
- component: OrderComponent
### orderCheck
- component: OrderCheckComponent
### orderCheckPay
- component: OrderCheckPayComponent
### confirmApi
- component: ConfirmApiComponent
### sucessPay
- component: SucessPayComponent
### productDeatil
- component: ProductDetailComponent

# 共用component：
###  shared
- bottom 畫面底部功能按鈕(點餐、購物車、歷史訂單)
- header2 畫面置頂導航列(首頁、點餐、購物車、歷史訂單、使用者名稱)
# @services (放置所有component所需API)：
### order-service
- 取得菜單資訊  -getOrderData()
```
/angular/order
```
- 取得商品詳細資訊  -getOrderDetail(id:string)
```
/angular/order/orderData?id="+id
```
- 加入購物車  -checkToShopCar(value:orderToShopCar)
```
/angular/order/checkToShopCar",value
```
- 呼叫LINE PAY RequestAPI  -checkLinePay(dataList:orderToShopCar,takeTime:string,totalPrice:string,uLineD:string)
```
checkLinePay(dataList:orderToShopCar,takeTime:string,totalPrice:string,uLineD:string)
```
- 呼叫LINE PAY ConfirmAPI  -confirmLinePayApi(transactionId:string,orderId:string)
```
/angular/confirmOrder/checkPay?transactionId="+transactionId+"&orderId="+orderId
```
### shop-car-service
- 取得購物車資訊  -getShopCarData(dataList:orderToShopCar)
```
/angular/shopCar",dataList
```
- 刪除購物車資訊  -removeProduct(dataList:orderToShopCar,idx:any)
```
/angular/shopCar/remove?idx="+idx,dataList
```
- 編輯購物車資訊  -editProduct(dataList:orderToShopCar,idx:any,mt:string)
```
/angular/shopCar/edit?idx="+idx+"&mt="+mt,dataList
```
### order-history-service
- 取得過去訂單資訊  -getOrderHistoryData(uLineD:string)
```
/angular/orderHistory?uLineD="+uLineD
```
- 取得歷史訂單詳細資訊  -getHistoryDetail(orderNo:string)
```
/angular/orderHistoryDetail",orderNo
```
