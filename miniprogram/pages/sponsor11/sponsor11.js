// pages/sponsor1/sponsor1.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    restaurant:
    {
      type:"越南料理",
      index:11,
      nav:"../sponsor11/sponsor11",
      address:"903 Embarcadero del Norte, Isla Vista, CA 93117",
      name:"Pho Bistro",
      url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
      text:"Pho Bistro 是一家越南料理店，位于Isla Vista，距离学校步行可到达，菜色多样，除了越南河粉外还提供各色饮料，盖饭，炒饭，馄饨等中国菜色。色香味俱全的亚洲美食等待大家来品尝！\n\n优惠: 10% off \n地址：903 Embarcadero del Norte, Isla Vista, CA 93117\n电话：806-685-3601"
    },
    isMember:false,
    code:"no discount",
    hidden:false,
    nocancel:false
  },
  
  modalBtn1: function(e){
    var that = this;
    const db = wx.cloud.database();
    db.collection('sponsor').where({index:'11'}).get().then(res => {
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