// pages/SpringPoster/Selection/Selection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: false,
    selected1:false,
    selected2:false,
    nickname: "",
    selection: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      nickname: options.nickname
    })
    console.log("[nickname]: " ,this.data.nickname)
  },
  onChina: function(e){
    console.log("[回国]")
    this.setData({
      selected: true,
      selected1: true,
      selection: 1
    })
  },
  onUS: function(e) {
    console.log("[留守]")
    this.setData({
      selected: true,
      selected2: true,
      selection: 2
    })
  },
  onGoing: function(){
    if(this.data.selection == 1){
      var info = {
        selection: this.data.selection, 
        nickname: this.data.nickname
      }
      console.log("[infoCarry]: ", info)
      wx.navigateTo({
        url: '../Selection/Selection?info=' + JSON.stringify(info),
      })
    }else if(this.data.selection == 2){
      var info = {
        selection: this.data.selection, 
        nickname: this.data.nickname
      }
      console.log("[infoCarry]: ", info)
      wx.navigateTo({
        url: '../Selection/Selection?info=' + JSON.stringify(info),
      })
    }else{
      console.log("[selection error]: ", this.data.selection)
    }
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