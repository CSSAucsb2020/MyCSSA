// pages/sponsor1/sponsor1.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    restaurant:
    {
      type:"奶茶/小吃",
      index:7,
      nav:"../sponsor7/sponsor7",
      address:"6530 Seville Rd, Ste 103, Isla Vista, CA 93117",
      name:"Mojo Asian Fusion Cafe",
      url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
      text:"Mojo是ucsb非常有名的一家奶茶店。本店不仅提供各种奶茶，还有主食rice bowel和各种小吃，如盐酥鸡，炸豆腐，章鱼小丸子等等～ Mojo位于iv，距离iv theater只有几分钟的路程，是大家上课下课休闲小坐的不二选择！本店有免费wifi和充电服务，店内干净整洁，很多同学也选择在这里学习看书呢。欢迎大家多多光临哦！！\n\n优惠：10%off original price\n地址：6530 Seville Rd，Ste 103，Isla Vista, CA 93117\n营业时间：Mon to Sun 11:00am-10:00pm\n联系方式：(805)-324-4350"
    },
    isMember:false,
    code:"no discount",
    hidden:false,
    nocancel:false
  },
  
  modalBtn1: function(e){
    var that = this;
    const db = wx.cloud.database();
    db.collection('sponsor').where({index:'7'}).get().then(res => {
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