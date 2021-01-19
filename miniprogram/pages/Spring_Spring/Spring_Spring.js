// miniprogram/pages/Spring_Spring/Spring_Spring.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    selection:[
      { 
        url : 'https://s3.ax1x.com/2021/01/06/sVVlqJ.png',
        name: '拿A',
        id:"0",
        navigator: "choose1"},
      { url: 'https://s3.ax1x.com/2021/01/06/sVmPKO.png', 
        name: '谈恋爱',
        id:"1",
        navigator: "choose2"},
      { url: 'https://s3.ax1x.com/2021/01/06/sVmMM8.png', 
        name: '寄口罩',
        id:"2",
        navigator: "choose3"},
      { url: 'https://s3.ax1x.com/2021/01/19/sgsy2d.jpg', 
        name: '支持川普',
        id:"3",
        navigator: "choose4"},
    ]
  },

  choose1: function(e){
      if(this.data.selection[0].url=='https://s3.ax1x.com/2021/01/06/sVVlqJ.png')
      this.setData(
        {'selection[0].url' : 'https://s3.ax1x.com/2021/01/19/sgdfVe.jpg'}
      )
      else
      this.setData(
        {'selection[0].url': 'https://s3.ax1x.com/2021/01/06/sVVlqJ.png'}
      )
  },

  choose2: function(e){
    if(this.data.selection[1].url=='https://s3.ax1x.com/2021/01/06/sVmPKO.png')
    this.setData(
      {'selection[1].url' : 'https://s3.ax1x.com/2021/01/19/sgdfVe.jpg'}
    )
    else
    this.setData(
      {'selection[1].url': 'https://s3.ax1x.com/2021/01/06/sVmPKO.png'}
    )
},

 choose3: function(e){
  if(this.data.selection[2].url=='https://s3.ax1x.com/2021/01/06/sVmMM8.png')
  this.setData(
    {'selection[2].url' : 'https://s3.ax1x.com/2021/01/19/sgdfVe.jpg'}
  )
  else
  this.setData(
    {'selection[2].url': 'https://s3.ax1x.com/2021/01/06/sVmMM8.png'}
  )
},

 choose4: function(e){
  if(this.data.selection[3].url=='https://s3.ax1x.com/2021/01/19/sgsy2d.jpg')
  this.setData(
    {'selection[3].url' : 'https://s3.ax1x.com/2021/01/19/sgdfVe.jpg'}
  )
  else
  this.setData(
    {'selection[3].url': 'https://s3.ax1x.com/2021/01/19/sgsy2d.jpg'}
  )
},
  EnterSummer: function(){
    if(this.data.selection[3].url=='https://s3.ax1x.com/2021/01/19/sgdfVe.jpg')
    wx.navigateTo({
      url: '../Spring_Summer_Cathay/SSC', //中国的夏
    })
    else
    wx.navigateTo({
      url: '../Spring_Summer_State/SSS',  //米国的夏
    })
  }, 
  /**
   * 
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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