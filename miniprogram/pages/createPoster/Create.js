//index.js
var nickname = "";
var imageUrl = "";
var backgroundUrl = "";
const app = getApp()
Page({
  data: {
    userInfo: {
      avatarUrl: "",
      nickname: "",
    }, //用户信息
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'), //测试getUserInfo在当前版本是否可用

  },//this.eventDraw()//自动画
  onLoad: function (options) {
    var that = this
    //如果全局对象用户信息为空
    if (app.globalData.userInfo) {
      console.log('全局对象用户信息不为空')
      this.setData({
        userInfo: app.globalData.userInfo, //将全局用户信息赋值给变量
        hasUserInfo: true //显示引导授权按钮
      },
        nickname = (app.globalData.userInfo.nickName),
        imageUrl = app.globalData.userInfo.avatarUrl,
      ),
        this.eventDraw()
    } else if (this.data.canIUse) { //getUserInfo在当前版本可用
      console.log('getUserInfo在当前版本可用')
      wx.getSetting({
        success(res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function (res) {
                console.log(res.userInfo),
                that.setData({
                  userInfo: res.userInfo,
                  hasUserInfo: true
                },
                nickname=res.userInfo.nickName,
                imageUrl=res.userInfo.avatarUrl,
                that.eventDraw()
                
                )
              }
            })
            console.log(nickname)
          } else {
            // 未授权，结果返回null
            that.setData({
              result: 'null',// 结果
            })
          }
        }
      })
      console.log(that.userInfo)
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      console.log('在没有 open-type=getUserInfo 版本的兼容处理')
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          },
            nickname = res.userInfo.nickName,
            imageUrl = res.userInfo.avatarUrl,
          ),
            this.eventDraw()
        }
      })
    };
    
  },

  getUserInfo: function (e) {
    //点击取消按钮
    if (e.detail.userInfo == null) {
      console.log("授权失败")
    }
    else {//点击允许按钮
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      },
        nickname = e.detail.userInfo.nickName,
        imageUrl = e.detail.userInfo.avatarUrl,
      )
    }
    //全局对象用户信息赋值
    app.globalData.userInfo = e.detail.userInfo
  },
  //that.eventDraw()
  eventDraw() {
    wx.showLoading({
      title: '绘制分享图片中',
      mask: true
    })
    this.setData({
      painting: {
        width: 375,
        height: 555,
        clear: true,
        views: [
          {//背景图
            type: 'image',
            url: 'https://s3.ax1x.com/2021/01/19/sgMRYD.jpg',
            top: 0,
            left: 0,
            width: 375,
            height: 555
          },
          {//头像
            type: 'image',
            url: imageUrl,
            top: 27.5,
            left: 29,
            width: 55,
            height: 55
          },
          {
            type: 'image',//圆形头像遮罩
            url: 'https://s3.ax1x.com/2021/01/19/sgMRYD.jpg',
            top: 27.5,
            left: 29,
            width: 55,
            height: 55
          },
          {
            type: 'text',//昵称
            content: nickname,//改成昵称
            fontSize: 16,
            color: '#402D16',
            textAlign: 'left',
            top: 33,
            left: 96,
            bolder: true
          },
          {
            type: 'text',//昵称下的字
            content: 'cssa新年海报',
            fontSize: 15,
            color: '#563D20',
            textAlign: 'left',
            top: 59.5,
            left: 96
          },
          {
            type: 'image',
            url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Ucsbseal.jpg',
            top: 136,
            left: 42.5,
            width: 290,
            height: 186
          },
          {
            type: 'image',
            url: 'https://s3.ax1x.com/2021/01/19/sgMRYD.jpg',
            top: 443,
            left: 85,
            width: 68,
            height: 68
          },
          {
            type: 'text',
            content: '新年好',
            fontSize: 16,
            lineHeight: 21,
            color: '#383549',
            textAlign: 'left',
            top: 336,
            left: 444,
            width: 287,
            MaxLineNumber: 2,
            breakWord: true,
            bolder: true
          },
          {
            type: 'text',
            content: '过年啦',
            fontSize: 19,
            color: '#E62004',
            textAlign: 'left',
            top: 387,
            left: 44.5,
            bolder: true
          },
          {
            type: 'text',
            content: '',
            fontSize: 13,
            color: '#7E7E8B',
            textAlign: 'left',
            top: 391,
            left: 110,
            textDecoration: 'line-through'
          },
          {
            type: 'text',
            content: '长按识别图中二维码分享',
            fontSize: 14,
            color: '#f4b3c2',
            textAlign: 'left',
            top: 460,
            left: 165.5,
            lineHeight: 20,
            MaxLineNumber: 2,
            breakWord: true,
            width: 125
          }
        ]
      }
    })
  },
  eventSave() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.shareImage,
      success(res) {
        wx.showToast({
          title: '保存图片成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  eventGetImage(event) {
    console.log(event)
    wx.hideLoading()
    const { tempFilePath, errMsg } = event.detail
    if (errMsg === 'canvasdrawer:ok') {
      this.setData({
        shareImage: tempFilePath
      })
    }
  }

})
