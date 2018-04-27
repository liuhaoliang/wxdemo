//app.js
const userinfo = require("./utils/userinfo");

App({
  onLaunch: function () {
    userinfo.getUserInfo();
  },
  globalData: {
    userInfo: null
  }
})