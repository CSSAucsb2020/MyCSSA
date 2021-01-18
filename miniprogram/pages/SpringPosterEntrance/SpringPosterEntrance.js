// pages/SpringPosterEntrance/SpringPosterEntrance.js
const bgMusic = wx.getBackgroundAudioManager() //创建背景音乐
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlaying: false,
    playingPosition: 0,
    hasStart: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

        /**  
         * 监听音乐播放  
         */  
        wx.onBackgroundAudioPlay(function() {  
          console.log('onBackgroundAudioPlay')  
      })  

      /**  
       * 监听音乐暂停  
       */  
      wx.onBackgroundAudioPause(function() {  
          console.log('onBackgroundAudioPause')  
      })  

      /**  
       * 监听音乐停止  
       */  
      wx.onBackgroundAudioStop(function() {  
          console.log('onBackgroundAudioStop')  
      }) 
      wx.playBackgroundAudio({  
        //播放地址  
        dataUrl: 'http://m701.music.126.net/20210118170317/37deef8bed773ca452c4bc19d8d8e600/jdyyaac/515f/530f/5408/f531136b80debc0548c4cb2df9732e2c.m4a',  
        title: '海绵宝宝',  
        //图片地址  
        coverImgUrl: 'http://r1.ykimg.com/050E0000576B75F667BC3C136B06E4E7'  
    }) 
    this.setData({
      isPlaying: true
    })
  },
  listenerButtonPause: function() {
    console.log(this.data.isPlaying)
    if(this.data.isPlaying){
      wx.getBackgroundAudioPlayerState({
        success: (result) => {
          this.setData({
            playingPosition: result.currentPosition
          })
        },
      })
      wx.pauseBackgroundAudio();
      this.setData({
        isPlaying: false
      })
    }  else{
      wx.playBackgroundAudio({
        dataUrl: 'http://m701.music.126.net/20210118170317/37deef8bed773ca452c4bc19d8d8e600/jdyyaac/515f/530f/5408/f531136b80debc0548c4cb2df9732e2c.m4a',
        position: this.data.playingPosition
      })
      this.setData({
        isPlaying: true
      })
      
    }
  }, 
  listenerStartScroll: function(){
    this.setData({
      hasStart: true
    })
    // var animation = wx.createAnimation({
    //   delay: 0,
    //   duration: 300
    // })
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

  }
})