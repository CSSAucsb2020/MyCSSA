// pages/ClassQRCode/ClassQRCode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subject: "",
    promise: "blur(4px)",
    perm: 0,
    QRurl:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

    this.setData({
      subject: options.subject
    })
    wx.setNavigationBarTitle({
      title: options.subject
    })

    const db = wx.cloud.database()
    db.collection('CourseList').where({
      // subject: options.subject
    }).get({
      success: res=>{
        console.log("[search success]:  " ,options.subject);
        if(res.data.length == 0){
          console.log("[二维码获取失败]:  没有对象", res);
        }else{
          this.setData({
            QRurl: res.data[0].url
          })
          console.log("[二维码获取成功]：  ", this.data.QRurl );
        }
      },
      fail: res=>{
        console.log("[二维码获取失败]： db search fail")
      }
    })
  },
  permInput: function(e){
    this.setData({
      perm: e.detail.value
    })
    
  },
  clickButton: function(){
    var perm = this.data.perm
    console.log('[perm]:  ', this.data.perm)
    if(perm>9999999 || perm < 1000000){
      wx.showToast({
        title: 'perm未通过验证',
        icon: 'none',
        duration: 6000
      })       
    }else{
      wx.showToast({
        title: '感谢你的理解和配合!',
        icon: 'none',
        duration: 6000
      }) 
      this.setData({
        promise: "blur()"
      })
      
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