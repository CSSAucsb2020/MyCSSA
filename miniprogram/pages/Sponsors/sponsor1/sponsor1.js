// pages/sponsor1/sponsor1.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    restaurant:
      { type:"电子商城",
        index:1,
        nav:"../sponsor1/sponsor1",
        address:"https://k.koudai.com/fN1avZ2m",
        name:"UCSB CSSA电子商城",
        url:"https://s3.ax1x.com/2021/01/19/sgNQE9.png", //demo url
        text:"CSSA特联系到正规渠道代理商（资质已严格审查，同学们可以放心购买！）联合上线CSSA华为/苹果商城，为同学们提供大额学生优惠。\n\n优惠：商品均享受10-200大额现金优惠。\n\n地址：UCSB CSSA电子商城 https://k.koudai.com/fN1avZ2m\n\n电话：188-3886-5588"        
      },
    isMember:false,
    code:"no discount",
    hidden:false,
    nocancel:false
  },
  
  modalBtn1: function(e){
    var that = this;
    const db = wx.cloud.database();
    db.collection('sponsor').where({index:'1'}).get().then(res => {
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