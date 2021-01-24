// miniprogram/pages/Spring_Spring/Spring_Spring.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      user_data: 0b0000000000000000000000000000000000000000000000000000,
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
        { url: 'https://s3.ax1x.com/2021/01/19/sgsy2d.jpg', 
        name: '囤积卫生纸',
        id:"4",
        navigator: "choose5"},
        { url: 'https://s3.ax1x.com/2021/01/19/sgsy2d.jpg', 
        name: '第一堂网课',
        id:"5",
        navigator: "choose6"},
        { url: 'https://s3.ax1x.com/2021/01/19/sgsy2d.jpg', 
        name: '自己做饭',
        id:"6",
        navigator: "choose7"},
        { url: 'https://s3.ax1x.com/2021/01/19/sgsy2d.jpg', 
        name: '邮寄跨国包裹',
        id:"7",
        navigator: "choose8"},
    ]
  },

  choose1: function(e){
      if(this.data.selection[0].url=='https://s3.ax1x.com/2021/01/06/sVVlqJ.png'){
      this.setData(
        {'selection[0].url' : 'https://s3.ax1x.com/2021/01/19/sgdfVe.jpg'}
      )
      var data = this.data.user_data + 0b1;
      this.setData({'user_data' : data})
      }
      else{
      this.setData(
        {'selection[0].url': 'https://s3.ax1x.com/2021/01/06/sVVlqJ.png'}
      )
      var data = this.data.user_data - 0b1;
      this.setData({'user_data': data})
      }
  },

  choose2: function(e){
    if(this.data.selection[1].url=='https://s3.ax1x.com/2021/01/06/sVmPKO.png'){
    this.setData(
      {'selection[1].url' : 'https://s3.ax1x.com/2021/01/19/sgdfVe.jpg'}
    )
    var data = this.data.user_data + 0b10;
    this.setData({'user_data' : data})
    }
    else{
    this.setData(
      {'selection[1].url': 'https://s3.ax1x.com/2021/01/06/sVmPKO.png'}
    )
    var data = this.data.user_data - 0b10;
      this.setData({'user_data' : data})
      }
},

 choose3: function(e){
  if(this.data.selection[2].url=='https://s3.ax1x.com/2021/01/06/sVmMM8.png'){
  this.setData(
    {'selection[2].url' : 'https://s3.ax1x.com/2021/01/19/sgdfVe.jpg'}
  )
  var data = this.data.user_data + 0b100;
    this.setData({'user_data' : data})
    }
  else{
  this.setData(
    {'selection[2].url': 'https://s3.ax1x.com/2021/01/06/sVmMM8.png'}
  )
  var data = this.data.user_data - 0b100;
      this.setData({'user_data' : data})
      }
},

 choose4: function(e){
  if(this.data.selection[3].url=='https://s3.ax1x.com/2021/01/19/sgsy2d.jpg'){
  this.setData(
    {'selection[3].url' : 'https://s3.ax1x.com/2021/01/19/sgdfVe.jpg'}
  )
  var data = this.data.user_data + 0b1000;
    this.setData({'user_data' : data})
    }
  else{
  this.setData(
    {'selection[3].url': 'https://s3.ax1x.com/2021/01/19/sgsy2d.jpg'}
  )
   var data = this.data.user_data - 0b1000;
    this.setData({'user_data' : data})
    }
},

 choose5: function(e){
  if(this.data.selection[4].url=='https://s3.ax1x.com/2021/01/19/sgsy2d.jpg'){
  this.setData(
    {'selection[4].url' : 'https://s3.ax1x.com/2021/01/19/sgdfVe.jpg'}
  )
  var data = this.data.user_data + 0b10000;
    this.setData({'user_data' : data})
    }
  else{
  this.setData(
    {'selection[4].url': 'https://s3.ax1x.com/2021/01/19/sgsy2d.jpg'}
  )
  var data = this.data.user_data - 0b10000;
    this.setData({'user_data' : data})
    }
},

 choose6: function(e){
  if(this.data.selection[5].url=='https://s3.ax1x.com/2021/01/19/sgsy2d.jpg'){
  this.setData(
    {'selection[5].url' : 'https://s3.ax1x.com/2021/01/19/sgdfVe.jpg'}
  )
  var data = this.data.user_data + 0b100000;
    this.setData({'user_data' : data})
    }
  else{
  this.setData(
    {'selection[5].url': 'https://s3.ax1x.com/2021/01/19/sgsy2d.jpg'}
  )
  var data = this.data.user_data - 0b100000;
    this.setData({'user_data' : data})
    }
},

 choose7: function(e){
  if(this.data.selection[6].url=='https://s3.ax1x.com/2021/01/19/sgsy2d.jpg'){
  this.setData(
    {'selection[6].url' : 'https://s3.ax1x.com/2021/01/19/sgdfVe.jpg'}
  )
  var data = this.data.user_data + 0b1000000;
    this.setData({'user_data' : data})
    }
  else{
  this.setData(
    {'selection[6].url': 'https://s3.ax1x.com/2021/01/19/sgsy2d.jpg'}
  )
  var data = this.data.user_data - 0b1000000;
    this.setData({'user_data' : data})
    }
},

 choose8: function(e){
  if(this.data.selection[7].url=='https://s3.ax1x.com/2021/01/19/sgsy2d.jpg'){
  this.setData(
    {'selection[7].url' : 'https://s3.ax1x.com/2021/01/19/sgdfVe.jpg'}
  )
  var data = this.data.user_data + 0b10000000;
    this.setData({'user_data' : data})
    }
  else{
  this.setData(
    {'selection[7].url': 'https://s3.ax1x.com/2021/01/19/sgsy2d.jpg'}
  )
  var data = this.data.user_data - 0b10000000;
    this.setData({'user_data' : data})
    }
},

  EnterSummer: function(){
    if(this.data.selection[3].url=='https://s3.ax1x.com/2021/01/19/sgdfVe.jpg')
    wx.navigateTo({
      url: '../Spring_Summer_Cathay/SSC?user_data1='+this.data.user_data, //中国的夏
    })
    else
    wx.navigateTo({
      url: '../Spring_Summer_State/SSS?user_data1='+this.data.user_data,  //米国的夏
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