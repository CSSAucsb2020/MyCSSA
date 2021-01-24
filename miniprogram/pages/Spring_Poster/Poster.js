// miniprogram/pages/Spring_Poster/Poster.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_data1:0b0,  //选项追踪器
    user_data2:0b0,
    user_data3:0b0,
    user_data4:0b0,
  },

  GoBack: function(){
    wx.switchTab({
      url: '../myIndex/myIndex', //结束
    })

  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var ud1 = options.user_data1 
    var ud2 = options.user_data2 
    var ud3 = options.user_data3
    var ud4 = options.user_data4
    this.setData({
      user_data1: ud1
    })
    this.setData({
      user_data2: ud2
    })
    this.setData({
      user_data3: ud3
    })
    this.setData({
      user_data4: ud4
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  }
})