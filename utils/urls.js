var host = 'http://test.jian24.com/';
// var host = 'https://api.jian24.com/';
module.exports = {
  getUserInfo: host + 'api/get-user-info/', //微信小程序获取用户信息
  getSession: host + 'api/get-session/:code/', //微信小程序获取服务器端session
  generateBarcode: host + 'user/generate-barcode/',//生成会员卡号
  delProduct: host + 'cart/del-product/', // 删除购物车商品
  updateProduct: host + 'cart/product-update-qty/', // 更新商品数量
  emptyCart: host + 'cart/empty-cart/',// 添加商品到购物车
  addProduct: host + 'cart/add-product/',// 添加商品到购物车
  cart: host + 'cart/', //购物车
  orderDetail: host + 'user/order/:order_id/',// 订单详情
  userOrders: host + 'user/orders/',// 订单列表
  applyCoupon: host + 'cart/apply-coupon/',//应用优惠券
  applyCouponCode: host + 'cart/apply-coupon-code/',//应用优惠券
  getAvailableCoupon: host + 'cart/get-available-coupon/',// 获取可用的优惠券
  checkout: host + 'cart/checkout/',//提交订单
  storeList: host + 'api/store-list/',// 获取门店列表
  generateOrderCode: host + 'order/generate-order-code/',//生成订单编码
  cancelOrder: host + 'user/order/:order_id/cancel/',//取消订单
  paymentData: host + 'payment/data/',//获取支付数据
  adviceTypes: host + 'user/advice-types',//获取反馈建议列表
  advice: host + 'user/advice',//创建反馈建议
  couponList: host + 'user/coupon-list',//优惠券列表
  imageUpload: host + 'api/image-upload',//上传图片
  getValidateCode: host + 'user/get-validate-code/',//获取短信验证码
  login: host + 'user/bind-mobile/',// 登录
  generateCaptcha: host + 'user/generate-captcha/',//图形验证码
  getWechatUserMobile: host + "api/get-wechat-user-mobile/",//判断微信小程序用户是否绑定手机号
  getBanners: host + 'core/get-banners/',//获取banner
  refreshSession: host + 'api/refresh-session/', //刷新session
  getPhoneNumber: host + 'api/get-phone-number/',
  wxContractSign: host + "payment/wx-contract-sign/",//签约
  wxContractUnsign: host + "payment/wx-contract-unsign",//解约
  papayEntrustweb: "https://api.mch.weixin.qq.com/papay/entrustweb",
  wxSignQuery: host + "payment/wx-sign-query",
  coffeeStoreList: host + "api/coffee-store-list/",//咖啡门店列表
  storeCoffeCart: host + "cart/store-coffe-cart/",//咖啡购物车
  productUpdateQty: host + "cart/product-update-qty",//更新商品
  showCoffe: host + "api/show-coffe",
  getOfficeProductList: host + "cart/get-office-product-list",
  cardCheckout: host + "cart/card-checkout",//卡支付
  getCardProductList: host + "cart/get-card-product-list",//卡列表
  userWalletLogs: host + "user/user-wallet-logs",//用户记录
  getUserWallet: host + "cart/get-user-wallet",//用户可以余额
  getConfig: host + "commonConfig/get-config",
  getNewerCouponlist: host + 'user/get-newer-couponlist/',//获取新人券
  userSaveFormId: host + 'user/save-form-id/',//缓存formid
  cartGetEedCoffeeList: host + "cart/get-coffee-list",//获取红鹈鹕咖啡列表
  coffeeCheck: host + "cart/coffee-checkout", //提交咖啡订单
  coffeeCalculate: host + "cart/coffee-calculate",//获取咖啡促销
  memCenter: host + 'userCenter/mem-center',//个人中心
  growthRecord: host + 'userCenter/growth-record',//积分纪录
  queryGifts: host + 'userCenter/query-gifts',//查询礼品
  obtainGifts: host + 'userCenter/obtain-gifts',//领取礼包
  queryGiftsStatus: host + 'userCenter/query-gifts-status',//查询是否领取过会员礼包
  userCenter: host + 'user/user-center/',
  pickupProducts: host + 'pickup/products',//到店自提商品列表
  checkAvailabel: host + 'cart/check-available',//校验
  redPacket: host + 'user/password-red-packet',
  wsUrl: "wss://api.jian24.com/ws/cart/status",
  //wsUrl: "ws://116.62.174.143:8089/cart/status",
  barcardUrl: host + 'user/generate-member-barcode',//获取一维码数据
  invoiceUrl: host + 'invoice/invoicing/',//开发票
  mailUrl: host + 'invoice/email_notice/',//邮箱推送
  indetailUrl: host + 'invoice/info/',//发票详情
}