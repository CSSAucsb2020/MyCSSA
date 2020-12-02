// pages/sponsor1/sponsor1.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    restaurant:
    {
      type:"正宗中餐",
      index:12,
      nav:"../sponsor12/sponsor12",
      address:"6831 Hollister Ave, Goleta, CA 93117",
      name:"Lucky Dragon",
      url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg" , //demo url
      text:"Lucky Dragon 是位于UCSB附近地理位置绝佳的川菜馆。Market Place是新生们在还没有车的情况下最理想的就餐地点，更别说Lucky Dragon是一家本就在 Isla Vista/Goleta少有的中餐馆。沸腾鱼，酸菜鱼，夫妻肺片等等川菜让人直流口水。当然，他们家最特别的还是这两个必点菜：火爆腰花和酒酿丸子。在Santa Barbara很难吃到这么地道的火爆腰花，饭后再来一个老板自酿的酒酿丸子，简直不能太幸福。\n\n优惠：10% off\n地址：6831 Hollister Ave, Goleta, CA 93117\n电话：(805)770-5651"
    },
    isMember:false,
    code:"no discount",
    hidden:false,
    nocancel:false
  },
  
  modalBtn1: function(e){
    var that = this;
    const db = wx.cloud.database();
    db.collection('sponsor').where({index:'12'}).get().then(res => {
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
    db.collection('blMember').where({openid:app.globalData.openid}).get().then(res => {
      //console.log(res.data);
      if(res.data.length === 1){
        that.setData({
          isMember: true
        })
      }
    });
  }
})