// pages/sponsor1/sponsor1.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    restaurant:
    {
      type:"中餐/音乐/唱K",
      index:6,
      nav:"../sponsor6/sponsor6",
      address:"2251 Las Positas Rd, Santa Barbara, CA 93105",
      name:"Meet Up Chinese Cuisine",
      url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
      text:"Meet Up Chinese Cuisine 遇见 是圣巴巴拉地区唯一一家音乐主题的休闲餐厅， 每周末都会有乐队为客人带来独特的就餐体验， 还可以预定唱K包间呢～遇见根据当地饮食习惯，地域风情为当地消费者群体专属定制中式餐饮系列。以各种食材的完美搭配， 烹饪出各种创意中餐， 非常符合留学生口味...在享受美食和音乐的同时，遇见也提供各种卡牌游戏，还会赠送饮品哦。欢迎大家进店坐坐～\n\n优惠：唱K九折，赠送饮品\n地址：2251 Las Positas Rd, Santa Barbara, CA 93105\n营业时间：Mon to Sun 11:00a.m.-23:00p.m.\n联系方式：（805）507-7777"
    },
    isMember:false,
    code:"no discount",
    hidden:false,
    nocancel:false
  },
  
  modalBtn1: function(e){
    var that = this;
    const db = wx.cloud.database();
    db.collection('sponsor').where({index:'6'}).get().then(res => {
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