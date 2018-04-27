// pages/home/home.js
var img = "iVBORw0KGgoAAAANSUhEUgAAAzoAAADsCAIAAAAzXERMAAAEwElEQVR4nO3dS27DIABAwVL1/lemB2hSYSHil2hmGRkC/khP3njMOb8AAKj6vnsBAAD8R64BAKTJNQCANLkGAJAm1wAA0uQaAECaXAMASJNrAABpcg0AIE2uAQCk/dy9gFcYY/z98eHXtx4eeengzY96PVvAzpLWh19yYvubf7S/pJdd03vn3L/P14evO3GhDz3RwZt/ffilGS5Nu+jEKd3f6Rttat273L2HnugP4+0aAECaXAMASJNrAABpcg0AIE2uAQCkyTUAgDS5BgCQJtcAANLkGgBAmlwDAEiTawAAaXINACBNrgEApMk1AIA0uQYAkCbXAADS5BoAQJpcAwBIk2sAAGlyDQAgTa4BAKTJNQCANLkGAJAm1wAA0uQaAECaXAMASJNrAABpcg0AIE2uAQCkyTUAgDS5BgCQJtcAANLkGgBAmlwDAEiTawAAaXINACBNrgEApMk1AIA0uQYAkCbXAADS5BoAQJpcAwBIk2sAAGlyDQAgTa4BAKTJNQCANLkGAJAm1wAA0uQaAECaXAMASJNrAABpcg0AIE2uAQCkyTUAgDS5BgCQJtcAANLkGgBAmlwDAEiTawAAaXINACBNrgEApMk1AIA0uQYAkCbXAADS5BoAQJpcAwBIk2sAAGlyDQAgTa4BAKTJNQCANLkGAJAm1wAA0uQaAECaXAMASJNrAABpcg0AIE2uAQCkyTUAgDS5BgCQJtcAANLkGgBAmlwDAEiTawAAaXINACBNrgEApMk1AIA0uQYAkCbXAADS5BoAQJpcAwBIk2sAAGlyDQAgTa4BAKTJNQCANLkGAJAm1wAA0uQaAECaXAMASJNrAABpcg0AIE2uAQCkyTUAgDS5BgCQJtcAANLkGgBAmlwDAEiTawAAaXINACBNrgEApMk1AIA0uQYAkCbXAADS5BoAQJpcAwBIk2sAAGlyDQAgTa4BAKTJNQCANLkGAJAm1wAA0uQaAECaXAMASJNrAABpcg0AIE2uAQCkyTUAgDS5BgCQJtcAANLkGgBAmlwDAEiTawAAaXINACBNrgEApMk1AIA0uQYAkCbXAADS5BoAQJpcAwBIk2sAAGlyDQAgTa4BAKTJNQCANLkGAJAm1wAA0uQaAECaXAMASJNrAABpcg0AIE2uAQCkyTUAgDS5BgCQJtcAANLkGgBAmlwDAEiTawAAaXINACBNrgEApMk1AIA0uQYAkCbXAADS5BoAQJpcAwBIk2sAAGlyDQAgTa4BAKTJNQCANLkGAJAm1wAA0uQaAECaXAMASJNrAABpcg0AIE2uAQCkyTUAgDS5BgCQJtcAANLkGgBAmlwDAEiTawAAaXINACBNrgEApMk1AIA0uQYAkCbXAADS5BoAQJpcAwBIk2sAAGlyDQAgTa4BAKTJNQCANLkGAJAm1wAA0uQaAECaXAMASJNrAABpcg0AIE2uAQCkyTUAgDS5BgCQJtcAANLkGgBAmlwDAEiTawAAaXINACBNrgEApMk1AIA0uQYAkCbXAADS5BoAQJpcAwBIk2sAAGlyDQAgTa4BAKSNOefdawAA4Clv1wAA0uQaAECaXAMASJNrAABpcg0AIE2uAQCkyTUAgDS5BgCQJtcAANLkGgBA2i+MpGHTYicrhgAAAABJRU5ErkJggg==";

let list_img = "http://osuq8u68f.bkt.clouddn.com/424c351c01bc11e895fc00163e0e32c4_1125*880";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    barcodeImage: img,
    imgs: [list_img, list_img, list_img]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  goToPage: function(e) {
    const index = e.currentTarget.dataset.index;
    console.log(index);
    this.dialog.showDialog();
  }
})