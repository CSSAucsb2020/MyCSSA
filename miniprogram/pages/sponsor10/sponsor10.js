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
      index:10,
      nav:"../sponsor10/sponsor10",
      address:"5599 Hollister Ave. Unit B-C 217 高速 Hollister Ave",
      name:"Uniboil",
      url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
      text:"煮道除了最最出名的猪手锅，现在还推出了各式铁板烧! 不要说我没告诉你， 铁板牛真的是嫩到没朋友!!!更激动人心的是，除了煮道我们还带来了煮道的附属品牌  PHRESH TEAS还会愁在SB喝不到好喝的奶茶吗?\n\n优惠：10% off original price\n地址:  5599 Hollister Ave. Unit B-C 217 高速 hollister Ave. 入口旁，近 Toyota dealership\n电话:  805-770-3875"
    },
    isMember:false,
    code:"no discount",
    hidden:false,
    nocancel:false
  },
  
  modalBtn1: function(e){
    var that = this;
    const db = wx.cloud.database();
    db.collection('sponsor').where({index:'10'}).get().then(res => {
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