// pages/sponsor3/sponsor3.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    restaurant:
    {
      type:"在线舞蹈课程",
      index:3,
      nav:"../sponsor3/sponsor3",
      address:"Downtown Los Angeles, CA",
      name:"STEEZY Studio",
      url:"https://s3.ax1x.com/2021/01/19/sgDgWd.png", //demo url
      text:"美国知名舞室，提供在线舞蹈课程，由世界上最好的舞者授课。舞蹈类型 - 覆盖多舞种并不断更新：目前有韩舞，嘻哈（hiphop），流行编舞（popular choreography），地板舞/霹雳舞（breaking），健身舞，舞厅/雷鬼（dancehall），高跟鞋舞（heels），狂派舞（krump），lite feet，甩手舞（whacking），震撼舞（popping），以及舞蹈技巧课tips&lectures。提供网站和平板、手机APP等多种使用端口，上课方式为录播，镜面正面背面可选，速度可调，可全方位360º看instructor的动作、使用先进的分屏功能（一半屏幕可以看到自己，一半屏幕看到instructor），方便对比动作。课程类型包括基础动作breakdown讲解、完展编舞分解讲解，以及名师课堂，由国际知名舞者教授，还可以为你推送的每日的私人订制系列课程。STEEZY还提供舞者讨论的平台，包括Instagram、Facebook group等等，还有有趣的开party功能，让你可以与你的小伙伴们一起上课。\n\n优惠：50% off a monthly subscription plan for the first 12 months\n\n地址：Downtown Los Angeles, CA"
    },
    isMember:false,
    code:"no discount",
    hidden:false,
    nocancel:false
  },
  
  modalBtn1: function(e){
    var that = this;
    const db = wx.cloud.database();
    db.collection('sponsor').where({index:'5'}).get().then(res => {
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