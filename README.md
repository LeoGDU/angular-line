#angular-line
利用angular前端框架來實作模擬一家咖啡簡餐店的行動預點功能的前端頁面！
搭配Repository - lineOrder 後端Api 完成 前後端分離 - 後端操作商品等資訊、呼叫Line Pay api等功能

頁面功能說明：
order - 店家menu (依照飲料種類分別列出各式飲料及價錢)

product-detail - 商品詳細資訊(選擇冰塊甜度、中杯大杯及杯數)、將商品購物車

shopCar - 購物車頁面(呈現所選飲品及總價格、總數量)

order-check - 選擇取餐時間、商品確認

order-check-pay - 最終訂單訊息確認

confirm-api - 等待Line Pay轉跳頁面

sucess-pay - Line Pay付款後的訂單成功頁面

order-history - 歷史訂單頁面(曾經完成的訂單)

order-history-detail - 歷史訂單的詳細資訊(詳細商品資訊、訂單時間)

網頁流程：
order(瀏覽菜單) -> product-detail(選取飲品資訊) -> shopCar(查看購物車) -> order-check(選擇取餐時間) -> order-check-pay(最終訂單訊息確認) -> confirm-api(等待轉跳LINE PAY頁面) -> sucess-pay(訂單成功)
