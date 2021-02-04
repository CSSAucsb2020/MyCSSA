// pages/sponsor4/sponsor4.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    restaurant:
    {
      type:"线下自习室",
      index:4,
      nav:"../sponsor4/sponsor4",
      address:"北京 上海 深圳 杭州",
      name:"Easiversity 得易青年",
      url:"https://s3.ax1x.com/2021/01/19/sgrv3d.png", //demo url
      text:"为滞留在中国的留学生 建立线下全方位发展自习室\n\n优惠：\n上海 1799/月/人\n北京 1599/月/人\n深圳 1899/月/人\n杭州 1600/月/人\n\n地址：\n上海：淮海中路627号4层\n北京：王府井大街219号淘汇新天7层\n深圳：科发路19号华润置地大厦D座5层\n益田路6003号荣超商务中心B座4层\n杭州：上城区延安路292号7层\n\n电话：18939907089"
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
    this.setData({
      isMember: app.globalData.blackID
    })
  }
})