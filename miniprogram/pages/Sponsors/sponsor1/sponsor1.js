// pages/sponsor1/sponsor1.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    restaurant:
      { type:"中国超市",
        index:1,
        nav:"../sponsor1/sponsor1",
        address:"5863 Hollister Ave, Goleta, CA 93117",
        name:"Oriental Market",
        url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
        text:"UCSB附近性价比最高种类齐全的中国超市，有许多在其他地方买不到的中国商品，比如维他柠檬茶，螺狮粉，火鸡面，海底捞火锅底料以及各种调料，生鲜都应有尽有，来了就会忍不住买不停的中超！\n\n优惠：10% off original price\n地址：5863 Hollister Ave Goleta, CA 93117\n电话：805-683-4417"
        
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