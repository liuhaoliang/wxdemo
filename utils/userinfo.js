const urls = require("./urls");

const getUserInfo = (successCallback, failureCallback) => {
  var that = this
  //调用登录接口
  wx.login({
    success: function (data) {
      console.log(data)
      // 获取sessionId
      var url = urls.getSession.replace(":code", data.code);
      wx.request({
        url: url,
        method: 'GET',
        data: {},
        header: {
          'Accept': 'application/json'
        },
        success: function (res) {
          console.log(res)
          if (res.statusCode == 200) {
            wx.setStorageSync("sessionId", res.data.data.jian_session);
            wx.getUserInfo({
              success: function (resp) {
                wx.setStorageSync("usreInfo", resp);
                // getUserCenter(successCallback, failureCallback);
              }
            })
          }
        }
      });
    }
  })
}

module.exports = {
  getUserInfo: getUserInfo
}