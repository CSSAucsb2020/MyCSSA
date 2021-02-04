// pages/SpringPoster/Selection/Selection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selection: 0,
    nickname: "",
    
    event1:{
        _icon_id: "001",
        _icon_text: "包饺子",
        _icon_url: "https://s3.ax1x.com/2021/02/01/yeWcQI.png",
        _selection: 0,
        _selected: false
    },
    event2:{
        _icon_id: "002",
        _icon_text: "看春晚",
        _icon_url: "https://s3.ax1x.com/2021/02/01/yeYnDx.png",
        _selection: 0,
        _selected: false
    },
    event3:{
        _icon_id: "003",
        _icon_text: "年夜饭",
        _icon_url: "https://s3.ax1x.com/2021/02/01/yeJTDP.png",
        _selection: 0,
        _selected: false
    },
    event4:{
        _icon_id: "004",
        _icon_text: "赶due",
        _icon_url: "https://s3.ax1x.com/2021/02/01/yeYMVK.png",
        _selection: 0,
        _selected: false
    },
    event5:{
        _icon_id: "005",
        _icon_text: "拜年",
        _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
        _selection: 0,
        _selected: false
    },
    // 选择,
    isShow: [false,false],
    inChina: false,
    selectedList:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取数据
    var info = JSON.parse(options.info)
    console.log("[info]: ", info)
    this.setData({
      selection: info.selection,
      nickname: info.nickname
    })
    if(this.data.selection == 1){
      this.setData({
        inChina: true
      })
    }
  },
  //选择
  onChoose1: function(e){
    this.setData({
        event1:{
            _selected: !this.data.event1._selected
        }
    })
  }
})