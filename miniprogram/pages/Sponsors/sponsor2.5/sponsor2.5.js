// pages/sponsor2/sponsor2.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    restaurant:
    {
      type:"在线学习平台",
      index:2,
      nav:"../sponsor2.5/sponsor2.5",
      address:"251 W 30th St, New York, NY, 10001",
      name:"Offer帮",
      url:"https://s3.ax1x.com/2021/01/19/sgw5eU.png", //demo url
      text:" Offer帮是首个专注于留学生求职的在线学习平台，由北大、常春藤校友联合创办，核心团队来自摩根大通、麦肯锡、摩根士丹利、普华永道、谷歌等全球顶尖公司。以涵盖各领域的专业导师、长期课研的求职核心课程、丰富的海内外企业资源，成为数万留学生信赖和首选的求职学习平台。\n\n优惠：单门课程80美金优惠\n\n地址：251 W 30th St, New York, NY, 10001\n\n电话：+1 404-626-2063\n"
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