// pages/sponsor2/sponsor2.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    restaurant:
    {
      type:"自行车&修理",
      index:2,
      nav:"../sponsor2/sponsor2",
      address:"6547 Pardall Rd, Isla Vista, CA 93117",
      name:"Varsity Bike Shop",
      url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
      text:"Varsity Bike Shop这家老牌自行车店1964年就成立啦！它一直给UCSB的学生提供着非常优质的自行车、滑板车以及其他修车服务。这家店不仅有着良好的口碑，更有着实惠的价格。老板Steven非常的热情好客，哪怕你不买自行车，也欢迎你来店里坐坐呀！在UCSB这个大校园中，如果你也需要一个代步工具，就快来Varsity Bike Shop选购吧！\n\n优惠：10% off 自行车，15% off 其他商品（包括滑板和零件等）\n地址：6547 Pardall Rd, Isla Vista, CA 93117\n电话：805-968-4914\n营业时间：Mon-Thurs 9AM to 6PM; Fri-Sat 9AM to 5PM"
    },
    isMember:false,
    code:"no discount",
    hidden:false,
    nocancel:false
  },
  
  modalBtn1: function(e){
    var that = this;
    const db = wx.cloud.database();
    db.collection('sponsor').where({index:'2'}).get().then(res => {
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