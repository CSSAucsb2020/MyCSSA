// pages/sponsor3/sponsor3.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    restaurant:
    {
      type:"奶茶/小吃",
      index:3,
      nav:"../sponsor3/sponsor3",
      address:"901 Embarcadero del Mar, Isla Vista,CA 93117",
      name:"Tea Tea",
      url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
      text:"Tea Tea 是UCSB IV地区首家奶茶店，从开业起我们一直为UCSB的学生提供美味的小吃如盐酥鸡以及品种丰富的奶茶。除了经典原味奶茶，脏脏茶也是我们的招牌奶茶之一，喜欢喝奶茶的同学不容错过～ 除此以外，我们还提供免费WiFi以及免费充电服务，同学们在品尝奶茶小吃的同时也可以享受休闲娱乐的时光。欢迎大家进店坐坐～\n\n优惠：10% off original price\n地址：901 Embarcadero del Mar, Isla Vista,CA 93117\n营业时间: Mon to Sun 11:00 a.m. to 22:00 p.m."
    },
    isMember:false,
    code:"no discount",
    hidden:false,
    nocancel:false
  },
  
  modalBtn1: function(e){
    var that = this;
    const db = wx.cloud.database();
    db.collection('sponsor').where({index:'3'}).get().then(res => {
      //console.log(res.data[0].code);
      that.setData({
        code: res.data[0].code
      })
      wx.showModal({
      title: '以下是您的优惠码',
      content: res.data[0].code,
      showCancel:false,
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
      })
    });
  },

  modalBtn2: function(e){
    wx.showModal({
      title: '您还不是CSSA黑卡会员',
      content: '请您前往 用户-黑卡绑定 界面进行会员身份验证或购买会员',
      showCancel:false,
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  onLoad: function (options) {
    var that = this;
    const db = wx.cloud.database();
    var code = this.data.code;
    // console.log('[云函数] [login] user openid: ', app.globalData.openid);
    this.setData({
      isMember: app.globalData.blackID
    })
  }
})