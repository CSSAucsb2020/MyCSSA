// pages/myIndex/myIndex.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageItems: [{
      id: 0,
      link: "https://s3.ax1x.com/2020/11/24/DNZQaR.jpg"
    }, {
      id: 1,
      link: "https://s3.ax1x.com/2020/11/24/DNK7qS.jpg"
    }, {
      id: 2,
      link: "https://s3.ax1x.com/2020/11/24/DNKqaQ.png"
    }],
    imgs1:[
      { url: 'https://s3.ax1x.com/2020/11/24/DNGIYD.png', 
        name: '优惠',
        id:"0",
        navigator: "sponsorNavigate"},
      { url: 'https://s3.ax1x.com/2020/11/24/DNG5FO.jpg', 
        name: '按钮',
        id:"1",
        navigator: "sponsorNavigate"},
      { url: 'https://s3.ax1x.com/2020/11/24/DNGhTK.jpg', 
        name: '按钮',
        id:"2",
        navigator: "sponsorNavigate"},
      { url: 'https://s3.ax1x.com/2020/11/24/DNGfw6.jpg', 
        name: '按钮',
        id:"3",
        navigator: "sponsorNavigate"},
    ],
    info:""
  },
  sponsorNavigate: function (e) {
    wx.navigateTo({
      url: '../sponsorList/sponsorList',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onGetUserInfo: function(e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  },
  onCheckMember: function(){
    const db = wx.cloud.database();
    wx.cloud.callFunction({    //调用云函数
      name:"checkMember",
      complete:res=>{
        db.collection("blMember").where({
          openid: app.globalData.openid //进行筛选
        }).get({
          success:res=>{
            console.log(res.data.length)
            if(res.data.length==0){
              console.log("查无此人")
            }else{
              console.log("尊贵的黑卡会员")
            }
          }
        })
      }
    })
  }
})