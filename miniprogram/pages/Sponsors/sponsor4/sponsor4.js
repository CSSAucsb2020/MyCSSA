// pages/sponsor4/sponsor4.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    restaurant:
    {
      type:"正宗中餐",
      index:4,
      nav:"../sponsor4/sponsor4",
      address:"3955 State St, Santa Barbara, CA 93105",
      name:"Mandarine Palace",
      url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
      text:"圣巴巴拉地区非常有名的中餐厅。对于留学生群体，菜品价格适中，口味正宗，妥妥的中国胃福音。川园菜品十分多样，宫保鸡丁，酸汤肥牛，麻婆豆腐，北京鸭， 芙蓉海鲜汤....川园是开了很多年的口碑老店， 老板十分热情好客。欢迎同学们进店品尝～\n\n优惠：10% off original price\n地址：3955 State St, Santa Barbara, CA 93105\n营业时间：Mon to Sun 11:00a.m.-21:30p.m.\n联系方式：（805）683-2158"
    },
    isMember:false,
    code:"no discount",
    hidden:false,
    nocancel:false
  },
  
  modalBtn1: function(e){
    var that = this;
    const db = wx.cloud.database();
    db.collection('sponsor').where({index:'4'}).get().then(res => {
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