// pages/sponsor1/sponsor1.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    restaurant:
    {
      type:"中餐美食",
      index:5,
      nav:"../sponsor5/sponsor5",
      address:"511 State St, Santa Barbara CA 93101",
      name:"Asie",
      url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
      text:"圣巴巴拉知名的中餐厅。对于留学生群体，菜品价格有折扣优惠且口味鲜美。瑞轩餐厅菜品丰富多样:重庆火锅，广东点心，水煮鱼，麻婆豆腐，北京烤鸭等等，期待大家的惠顾:)\n\n优惠：Hotpot 30% off original price every Thursday, 12% off every day except Thursday.\n地址：511 state st Santa Barbara CA 93101\n联系方式：805-869-6407"
    },
    isMember:false,
    code:"no discount",
    hidden:false,
    nocancel:false
  },
  
  modalBtn1: function(e){
    var that = this;
    const db = wx.cloud.database();
    db.collection('sponsor').where({index:'8'}).get().then(res => {
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