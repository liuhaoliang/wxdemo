// components/member-card.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    // 弹窗显示控制
    isShow: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //隐藏弹框
    hide() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    //展示弹框
    show() {
      // this.setData({
      //   isShow: !this.data.isShow
      // })
    }
  }
})
