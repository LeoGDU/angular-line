export interface data {
    productCategoryName:string;
    dataList:any;
}

export interface dataList {
    dataList:any
    totalNum:number
    totalPrice:number
}

export interface orderDetail{
    orderDetail:any;
    
    noM:string;
    
    noL:string;
    
    sizeM:string;
    
    sizeL:string;
    
    priceM:string;
    
    priceL:string;
    
    listSize:number; 
}

export interface orderToShopCar{
    productName:string;
    productId:string;
    productSizeId:string;
    sweet:string;
    price:string;
    num:number;
    ice:string;
    size:string;
    dataList:orderToShopCar;
}

export interface sucessUrl {
    url:string;
}

export interface returnCode {
    returnCode:string;
    orderNo:string;
}

export interface lineUser {
    uName:string;
    uLineD:string;
}

export interface orderHistoryData {
    orderNo:any;
    totalPrice:any;
    orderTime:string;
    getTime:any;
    storeName:string;
    remark:string;
}

export interface orderHistoryDetailData {
    productSizeId:any;
    remark:string;
    num:any;
    sum:any;
}