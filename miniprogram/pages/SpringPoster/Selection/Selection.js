// pages/SpringPoster/Selection/Selection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selection: 0,
    nickname: "",
  selectionCathay:[
      {
        _icon_id: "001",
        _icon_text: "新的计划！",
        _icon_url: "https://s3.ax1x.com/2021/02/02/ynZQZd.png",
        _selection: 0,
        _selected: false,
        navigator: "choose1"
    },
    {
        _icon_id: "002",
        _icon_text: "聚餐一起干饭叭！",
        _icon_url: "https://s3.ax1x.com/2021/02/02/ynZ4oR.png",
        _selection: 0,
        _selected: false,
        navigator: "choose2"
    },
    {
        _icon_id: "003",
        _icon_text: "年糕酱！",
        _icon_url: "https://s3.ax1x.com/2021/02/01/yeJTDP.png",
        _selection: 0,
        _selected: false,
        navigator: "choose3"
    },
    {
        _icon_id: "005",
        _icon_text: "是时候滑雪了！",
        _icon_url: "https://s3.ax1x.com/2021/02/01/yeYMVK.png",
        _selection: 0,
        _selected: false,
        navigator: "choose5"
    },
   {
        _icon_id: "007",
        _icon_text: "开会_就用瞩目！",
        _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
        _selection: 0,
        _selected: false,
        navigator: "choose7"
    },
    {
      _icon_id: "008",
      _icon_text: "春晚_难忘啊今宵！",
      _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
      _selection: 0,
      _selected: false,
      navigator: "choose8"
  },
  {
    _icon_id: "009",
    _icon_text: "赶due人敢due吗！",
    _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
    _selection: 0,
    _selected: false,
    navigator: "choose9"
},
{
  _icon_id: "010",
  _icon_text: "贴窗花.png",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 0,
  _selected: false,
  navigator: "choose10"
},
{
  _icon_id: "011",
  _icon_text: "去年元夜时，花市灯如昼",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 0,
  _selected: false,
  navigator: "choose11"
},
{
  _icon_id: "013",
  _icon_text: "三六九万顺着您！",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 0,
  _selected: false,
  navigator: "choose13"
},
{
  _icon_id: "015",
  _icon_text: "爆米花和大屏幕的记忆！",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 0,
  _selected: false,
  navigator: "choose15"
},
{
  _icon_id: "018",
  _icon_text: "开学！",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 0,
  _selected: false,
  navigator: "choose18"
},
{
  _icon_id: "020",
  _icon_text: "抢红包",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 0,
  _selected: false,
  navigator: "choose20"
},
{
  _icon_id: "021",
  _icon_text: "贴倒福",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 0,
  _selected: false,
  navigator: "choose21"
},
{
  _icon_id: "106",
  _icon_text: "年年有鱼",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 0,
  _selected: false,
  navigator: "choose106"
},
{
  _icon_id: "110",
  _icon_text: "keep_social_distancing！",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 0,
  _selected: false,
  navigator: "choose110"
},
{
  _icon_id: "112",
  _icon_text: "买新衣服",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 0,
  _selected: false,
  navigator: "choose112"
},
{
  _icon_id: "113",
  _icon_text: "包饺子",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 0,
  _selected: false,
  navigator: "choose113"
},
{
  _icon_id: "114",
  _icon_text: "吃八宝饭",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 0,
  _selected: false,
  navigator: "choose114"
},
{
  _icon_id: "115",
  _icon_text: "吃火锅",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 0,
  _selected: false,
  navigator: "choose115"
},
{
  _icon_id: "202",
  _icon_text: "守岁.",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 0,
  _selected: false,
  navigator: "choose202"
},
{
  _icon_id: "204",
  _icon_text: "年夜饭.png",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 0,
  _selected: false,
  navigator: "choose204"
},
{
  _icon_id: "206",
  _icon_text: "戴口罩.png",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 0,
  _selected: false,
  navigator: "choose206"
},
{
  _icon_id: "208",
  _icon_text: "拜年.png",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 0,
  _selected: false,
  navigator: "choose208"
},
{
  _icon_id: "210",
  _icon_text: "收压岁钱.png",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 0,
  _selected: false,
  navigator: "choose210"
},
{
  _icon_id: "213",
  _icon_text: "群发祝福.png",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 0,
  _selected: false,
  navigator: "choose213"
},
{
  _icon_id: "215",
  _icon_text: "跟男女朋友一起过",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 0,
  _selected: false,
  navigator: "choose215"
},
{
  _icon_id: "218",
  _icon_text: "贴对联",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 0,
  _selected: false,
  navigator: "choose218"
},
{
  _icon_id: "004",
  _icon_text: "老k登场！",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 1,
  _selected: false,
  navigator: "choose4"
},
{
  _icon_id: "006",
  _icon_text: "熊孩子有什么坏心思！",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 1,
  _selected: false,
  navigator: "choose6"
},
{
  _icon_id: "012",
  _icon_text: "蹦迪！",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 1,
  _selected: false,
  navigator: "choose12"
},
{
  _icon_id: "014",
  _icon_text: "爆竹声中一岁除！",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 1,
  _selected: false,
  navigator: "choose14"
},
{
  _icon_id: "016",
  _icon_text: "谁放明灯惹梦游",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 1,
  _selected: false,
  navigator: "choose16"
},
{
  _icon_id: "017",
  _icon_text: "觥筹交错，众宾欢也！",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 17,
  _selected: false,
  navigator: "choose17"
},
{
  _icon_id: "019",
  _icon_text: "年画娃娃",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 1,
  _selected: false,
  navigator: "choose19"
},
{
  _icon_id: "022",
  _icon_text: "海边度假",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 1,
  _selected: false,
  navigator: "choose22"
},
{
  _icon_id: "108",
  _icon_text: "gap_quarter",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 1,
  _selected: false,
  navigator: "choose108"
},
{
  _icon_id: "109",
  _icon_text: "昼夜颠倒工作不停！",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 1,
  _selected: false,
  navigator: "choose109"
},
{
  _icon_id: "111",
  _icon_text: "买年货",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 1,
  _selected: false,
  navigator: "choose111"
},
{
  _icon_id: "116",
  _icon_text: "回老家",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 1,
  _selected: false,
  navigator: "choose116"
},
{
  _icon_id: "203",
  _icon_text: "实习打工人",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 1,
  _selected: false,
  navigator: "choose203"
},
{
  _icon_id: "205",
  _icon_text: "庙会.png",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 1,
  _selected: false,
  navigator: "choose205"
},
{
  _icon_id: "207",
  _icon_text: "拍全家福.png",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 1,
  _selected: false,
  navigator: "choose207"
},
{
  _icon_id: "211",
  _icon_text: "检测无数次核酸",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 1,
  _selected: false,
  navigator: "choose211"
},
{
  _icon_id: "214",
  _icon_text: "被催找对象.png",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 1,
  _selected: false,
  navigator: "choose214"
}
  ],
  selectionUS:[
    {
      _icon_id: "001",
      _icon_text: "新的计划！",
      _icon_url: "https://s3.ax1x.com/2021/01/19/sgdfVe.jpg",
      _selection: 0,
      _selected: false,
      navigator: "choose1"
  },
  {
      _icon_id: "002",
      _icon_text: "聚餐一起干饭叭！",
      _icon_url: "https://s3.ax1x.com/2021/02/01/yeYnDx.png",
      _selection: 0,
      _selected: false,
      navigator: "choose2"
  },
  {
      _icon_id: "003",
      _icon_text: "年糕酱！",
      _icon_url: "https://s3.ax1x.com/2021/02/01/yeJTDP.png",
      _selection: 0,
      _selected: false,
      navigator: "choose3"
  },
  {
      _icon_id: "005",
      _icon_text: "是时候滑雪了！",
      _icon_url: "https://s3.ax1x.com/2021/02/01/yeYMVK.png",
      _selection: 0,
      _selected: false,
      navigator: "choose5"
  },
 {
      _icon_id: "007",
      _icon_text: "开会_就用瞩目！",
      _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
      _selection: 0,
      _selected: false,
      navigator: "choose7"
  },
  {
    _icon_id: "008",
    _icon_text: "春晚_难忘啊今宵！",
    _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
    _selection: 0,
    _selected: false,
    navigator: "choose8"
},
{
  _icon_id: "009",
  _icon_text: "赶due人敢due吗！",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 0,
  _selected: false,
  navigator: "choose9"
},
{
_icon_id: "010",
_icon_text: "贴窗花.png",
_icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
_selection: 0,
_selected: false,
navigator: "choose10"
},
{
_icon_id: "011",
_icon_text: "去年元夜时，花市灯如昼",
_icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
_selection: 0,
_selected: false,
navigator: "choose11"
},
{
_icon_id: "013",
_icon_text: "三六九万顺着您！",
_icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
_selection: 0,
_selected: false,
navigator: "choose13"
},
{
_icon_id: "015",
_icon_text: "爆米花和大屏幕的记忆！",
_icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
_selection: 0,
_selected: false,
navigator: "choose15"
},
{
_icon_id: "018",
_icon_text: "开学！",
_icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
_selection: 0,
_selected: false,
navigator: "choose18"
},
{
_icon_id: "020",
_icon_text: "抢红包",
_icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
_selection: 0,
_selected: false,
navigator: "choose20"
},
{
_icon_id: "021",
_icon_text: "贴倒福",
_icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
_selection: 0,
_selected: false,
navigator: "choose21"
},
{
_icon_id: "106",
_icon_text: "年年有鱼",
_icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
_selection: 0,
_selected: false,
navigator: "choose106"
},
{
_icon_id: "110",
_icon_text: "keep_social_distancing！",
_icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
_selection: 0,
_selected: false,
navigator: "choose110"
},
{
_icon_id: "112",
_icon_text: "买新衣服",
_icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
_selection: 0,
_selected: false,
navigator: "choose112"
},
{
_icon_id: "113",
_icon_text: "包饺子",
_icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
_selection: 0,
_selected: false,
navigator: "choose113"
},
{
_icon_id: "114",
_icon_text: "吃八宝饭",
_icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
_selection: 0,
_selected: false,
navigator: "choose114"
},
{
_icon_id: "115",
_icon_text: "吃火锅",
_icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
_selection: 0,
_selected: false,
navigator: "choose115"
},
{
_icon_id: "202",
_icon_text: "守岁.",
_icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
_selection: 0,
_selected: false,
navigator: "choose202"
},
{
_icon_id: "204",
_icon_text: "年夜饭.png",
_icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
_selection: 0,
_selected: false,
navigator: "choose204"
},
{
_icon_id: "206",
_icon_text: "戴口罩.png",
_icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
_selection: 0,
_selected: false,
navigator: "choose206"
},
{
_icon_id: "208",
_icon_text: "拜年.png",
_icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
_selection: 0,
_selected: false,
navigator: "choose208"
},
{
_icon_id: "210",
_icon_text: "收压岁钱.png",
_icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
_selection: 0,
_selected: false,
navigator: "choose210"
},
{
_icon_id: "213",
_icon_text: "群发祝福.png",
_icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
_selection: 0,
_selected: false,
navigator: "choose213"
},
{
_icon_id: "215",
_icon_text: "跟男女朋友一起过",
_icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
_selection: 0,
_selected: false,
navigator: "choose215"
},
{
_icon_id: "218",
_icon_text: "贴对联",
_icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
_selection: 0,
_selected: false,
navigator: "choose218"
},
{
  _icon_id: "101",
  _icon_text: "领养宠物",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 2,
  _selected: false,
  navigator: "choose101"
},
{
  _icon_id: "102",
  _icon_text: "经历山火",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 2,
  _selected: false,
  navigator: "choose102"
},
{
  _icon_id: "103",
  _icon_text: "怀疑自己被感染",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 2,
  _selected: false,
  navigator: "choose103"
},
{
  _icon_id: "104",
  _icon_text: "买不到口罩",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 2,
  _selected: false,
  navigator: "choose104"
},
{
  _icon_id: "105",
  _icon_text: "拥有了自己的拿手菜",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 2,
  _selected: false,
  navigator: "choose105"
},
{
  _icon_id: "107",
  _icon_text: "BLM",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 2,
  _selected: false,
  navigator: "choose107"
},
{
  _icon_id: "117",
  _icon_text: "因懂王各种作妖政策焦虑",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 2,
  _selected: false,
  navigator: "choose117"
},
{
  _icon_id: "201",
  _icon_text: "囤粮囤水",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 2,
  _selected: false,
  navigator: "choose201"
},
{
  _icon_id: "209",
  _icon_text: "收到防疫物资",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 2,
  _selected: false,
  navigator: "choose209"
},
{
  _icon_id: "212",
  _icon_text: "线上组局",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 2,
  _selected: false,
  navigator: "choose212"
},
{
  _icon_id: "216",
  _icon_text: "被取消机票",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 2,
  _selected: false,
  navigator: "choose216"
},
{
  _icon_id: "217",
  _icon_text: "被迫搬家搬离宿舍",
  _icon_url: "https://s3.ax1x.com/2021/02/01/yeW2OP.png",
  _selection: 2,
  _selected: false,
  navigator: "choose217"
}
  ],
  List:[
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {s : 0},
    {nickname : ""}
  ],
    // 选择,
    isShow: [false,false],
    inChina: false,
    selectedList:{}
  },
  choose1: function(e){
    if(this.data.selectionCathay[0]._icon_url=='https://s3.ax1x.com/2021/02/02/ynZQZd.png'){
    this.setData(
      {'selectionCathay[0]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wkLV.png',
      'selectionUS[0]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wkLV.png',
      'List[0].s' : 1}
    )
    }
    else{
    this.setData(
      {'selectionCathay[0]._icon_url': 'https://s3.ax1x.com/2021/02/02/ynZQZd.png',
      'selectionUS[0]._icon_url' : 'https://s3.ax1x.com/2021/02/02/ynZQZd.png',
      'List[0].s' : 0}
    )
    }
},
choose2: function(e){
  if(this.data.selectionCathay[1]._icon_url=='https://s3.ax1x.com/2021/02/02/ynZ4oR.png'){
  this.setData(
    {'selectionCathay[1]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'selectionUS[1]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'List[1].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[1]._icon_url': 'https://s3.ax1x.com/2021/02/02/ynZ4oR.png',
    'selectionUS[1]._icon_url' : 'https://s3.ax1x.com/2021/02/02/ynZ4oR.png',
    'List[1].s' : 0}
  )
  }
},
choose3: function(e){
  if(this.data.selectionCathay[2]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[2]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wEZT.png',
    'selectionUS[2]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wEZT.png',
    'List[2].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[2]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[2]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[2].s' : 0}
  )
  }
},
choose5: function(e){
  if(this.data.selectionCathay[3]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[3]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wiMq.png',
    'selectionUS[3]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wiMq.png',
    'List[3].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[3]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[3]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[3].s' : 0}
  )
  }
},
choose7: function(e){
  if(this.data.selectionCathay[4]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[4]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wZoF.png',
    'selectionUS[4]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wZoF.png',
    'List[4].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[4]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[4]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[4].s' : 0}
  )
  }
},
choose8: function(e){
  if(this.data.selectionCathay[5]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[5]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wnJJ.png',
    'selectionUS[5]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wnJJ.png',
    'List[5].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[5]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[5]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[5].s' : 0}
  )
  }
},
choose9: function(e){
  if(this.data.selectionCathay[6]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[6]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wuW9.png',
    'selectionUS[6]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wuW9.png',
    'List[6].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[6]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[6]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[6].s' : 0}
  )
  }
},
choose10: function(e){
  if(this.data.selectionCathay[7]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[7]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wKzR.png',
    'selectionUS[7]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wKzR.png',
    'List[7].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[7]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[7]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[7].s' : 0}
  )
  }
},
choose11: function(e){
  if(this.data.selectionCathay[8]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[8]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wQQ1.png',
    'selectionUS[8]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wQQ1.png',
    'List[8].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[8]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[8]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[8].s' : 0}
  )
  }
},
choose13: function(e){
  if(this.data.selectionCathay[9]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[9]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1w1L6.png',
    'selectionUS[9]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1w1L6.png',
    'List[9].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[9]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[9]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[9].s' : 0}
  )
  }
},
choose15: function(e){
  if(this.data.selectionCathay[10]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[10]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wGdO.png',
    'selectionUS[10]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wGdO.png',
    'List[10].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[10]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[10]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[10].s' : 0}
  )
  }
},
choose18: function(e){
  if(this.data.selectionCathay[11]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[11]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wtFe.png',
    'selectionUS[11]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wtFe.png',
    'List[11].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[11]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[11]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[11].s' : 0}
  )
  }
},
choose20: function(e){
  if(this.data.selectionCathay[12]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[12]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wwQI.png',
    'selectionUS[12]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wwQI.png',
    'List[12].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[12]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[12]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[12].s' : 0}
  )
  }
},
choose21: function(e){
  if(this.data.selectionCathay[13]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[13]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1w0yt.png',
    'selectionUS[13]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1w0yt.png',
    'List[13].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[13]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[13]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[13].s' : 0}
  )
  }
},
choose106: function(e){
  if(this.data.selectionCathay[14]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[14]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wfln.png',
    'selectionUS[14]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wfln.png',
    'List[14].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[14]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[14]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[14].s' : 0}
  )
  }
},
choose110: function(e){
  if(this.data.selectionCathay[15]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[15]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1w4O0.png',
    'selectionUS[15]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1w4O0.png',
    'List[15].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[15]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[15]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[15].s' : 0}
  )
  }
},
choose112: function(e){
  if(this.data.selectionCathay[16]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[16]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wowT.png',
    'selectionUS[16]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wowT.png',
    'List[16].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[16]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[16]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[16].s' : 0}
  )
  }
},
choose113: function(e){
  if(this.data.selectionCathay[17]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[17]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'selectionUS[17]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'List[17].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[17]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[17]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[17].s' : 0}
  )
  }
},
choose114: function(e){
  if(this.data.selectionCathay[18]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[18]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'selectionUS[18]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'List[18].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[18]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[18]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[18].s' : 0}
  )
  }
},
choose115: function(e){
  if(this.data.selectionCathay[19]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[19]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'selectionUS[19]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'List[19].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[19]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[19]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[19].s' : 0}
  )
  }
},
choose202: function(e){
  if(this.data.selectionCathay[20]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[20]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'selectionUS[20]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'List[20].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[20]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[20]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[20].s' : 0}
  )
  }
},
choose204: function(e){
  if(this.data.selectionCathay[21]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[21]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'selectionUS[21]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'List[21].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[21]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[21]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[21].s' : 0}
  )
  }
},
choose206: function(e){
  if(this.data.selectionCathay[22]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[22]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'selectionUS[22]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'List[22].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[22]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[22]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[22].s' : 0}
  )
  }
},
choose208: function(e){
  if(this.data.selectionCathay[23]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[23]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'selectionUS[23]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'List[23].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[23]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[23]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[23].s' : 0}
  )
  }
},
choose210: function(e){
  if(this.data.selectionCathay[24]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[24]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'selectionUS[24]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'List[24].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[24]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[24]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[24].s' : 0}
  )
  }
},
choose213: function(e){
  if(this.data.selectionCathay[25]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[25]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'selectionUS[25]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'List[25].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[25]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[25]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[25].s' : 0}
  )
  }
},
choose215: function(e){
  if(this.data.selectionCathay[26]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[26]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'selectionUS[26]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'List[26].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[26]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[26]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[26].s' : 0}
  )
  }
},
choose218: function(e){
  if(this.data.selectionCathay[27]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[27]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'selectionUS[27]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'List[27].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[27]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'selectionUS[27]._icon_url' : 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[27].s' : 0}
  )
  }
},
choose4: function(e){
  if(this.data.selectionCathay[28]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[28]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wFs0.png',
    'List[28].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[28]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[28].s' : 0}
  )
  }
},
choose6: function(e){
  if(this.data.selectionCathay[29]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[29]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wmi4.png',
    'List[29].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[29]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[29].s' : 0}
  )
  }
},
choose12: function(e){
  if(this.data.selectionCathay[30]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[30]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wlsx.png',
    'List[30].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[30]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[30].s' : 0}
  )
  }
},
choose14: function(e){
  if(this.data.selectionCathay[31]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[31]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1w8eK.png',
    'List[31].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[31]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[31].s' : 0}
  )
  }
},
choose16: function(e){
  if(this.data.selectionCathay[32]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[32]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wJoD.png',
    'List[32].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[32]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[32].s' : 0}
  )
  }
},
choose17: function(e){
  if(this.data.selectionCathay[33]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[33]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wNJH.png',
    'List[33].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[33]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[33].s' : 0}
  )
  }
},
choose19: function(e){
  if(this.data.selectionCathay[34]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[34]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wUWd.png',
    'List[34].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[34]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[34].s' : 0}
  )
  }
},
choose22: function(e){
  if(this.data.selectionCathay[35]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[35]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wref.png',
    'List[35].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[35]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[35].s' : 0}
  )
  }
},
choose108: function(e){
  if(this.data.selectionCathay[36]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[36]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1whyq.png',
    'List[36].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[36]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[36].s' : 0}
  )
  }
},
choose109: function(e){
  if(this.data.selectionCathay[37]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[37]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wImV.png',
    'List[37].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[37]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[37].s' : 0}
  )
  }
},
choose111: function(e){
  if(this.data.selectionCathay[38]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[38]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wTTU.png',
    'List[38].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[38]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[38].s' : 0}
  )
  }
},
choose116: function(e){
  if(this.data.selectionCathay[39]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[39]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wFs0.png',
    'List[39].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[39]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[39].s' : 0}
  )
  }
},
choose203: function(e){
  if(this.data.selectionCathay[40]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[40]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wFs0.png',
    'List[40].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[40]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[40].s' : 0}
  )
  }
},
choose205: function(e){
  if(this.data.selectionCathay[41]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[41]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wFs0.png',
    'List[41].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[41]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[41].s' : 0}
  )
  }
},
choose207: function(e){
  if(this.data.selectionCathay[42]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[42]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wFs0.png',
    'List[42].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[42]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[42].s' : 0}
  )
  }
},
choose211: function(e){
  if(this.data.selectionCathay[43]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[43]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wFs0.png',
    'List[43].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[43]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[43].s' : 0}
  )
  }
},
choose214: function(e){
  if(this.data.selectionCathay[44]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionCathay[44]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wFs0.png',
    'List[44].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionCathay[44]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[44].s' : 0}
  )
  }
},


choose101: function(e){
  if(this.data.selectionUS[28]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionUS[28]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wsw8.png',
    'List[45].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionUS[28]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[45].s' : 0}
  )
  }
},
choose102: function(e){
  if(this.data.selectionUS[29]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionUS[29]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wyTS.png',
    'List[46].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionUS[29]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[46].s' : 0}
  )
  }
},
choose103: function(e){
  if(this.data.selectionUS[30]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionUS[30]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wcFg.png',
    'List[47].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionUS[30]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[47].s' : 0}
  )
  }
},
choose104: function(e){
  if(this.data.selectionUS[31]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionUS[31]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wgYQ.png',
    'List[48].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionUS[31]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[48].s' : 0}
  )
  }
},
choose105: function(e){
  if(this.data.selectionUS[32]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionUS[32]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1w2Wj.png',
    'List[49].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionUS[32]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[49].s' : 0}
  )
  }
},
choose107: function(e){
  if(this.data.selectionUS[33]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionUS[33]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wWSs.png',
    'List[50].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionUS[33]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[50].s' : 0}
  )
  }
},
choose117: function(e){
  if(this.data.selectionUS[34]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionUS[34]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wFs0.png',
    'List[51].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionUS[34]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[51].s' : 0}
  )
  }
},
choose201: function(e){
  if(this.data.selectionUS[35]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionUS[35]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wFs0.png',
    'List[52].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionUS[35]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[52].s' : 0}
  )
  }
},
choose209: function(e){
  if(this.data.selectionUS[36]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionUS[36]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wFs0.png',
    'List[53].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionUS[36]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[53].s' : 0
    }
  )
  }
},
choose212: function(e){
  if(this.data.selectionUS[37]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionUS[37]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wFs0.png',
    'List[54].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionUS[37]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[54].s' : 0}
  )
  }
},
choose216: function(e){
  if(this.data.selectionUS[38]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionUS[38]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wFs0.png',
    'List[55].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionUS[38]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[55].s' : 0}
  )
  }
},
choose217: function(e){
  if(this.data.selectionUS[39]._icon_url=='https://s3.ax1x.com/2021/02/01/yeYnDx.png'){
  this.setData(
    {'selectionUS[39]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wFs0.png',
    'List[56].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionUS[39]._icon_url': 'https://s3.ax1x.com/2021/02/01/yeYnDx.png',
    'List[56].s' : 0}
  )
  }
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取数据
    var info = JSON.parse(options.info)
    console.log("[info]: ", info)
    var name = info.nickname
    this.setData({
      selection: info.selection,
      nickname: info.nickname,
      'List[57].nickname' : name,
    })
    if(this.data.selection == 1){
      this.setData({
        inChina: true
      })
    }
  },
  //选择
})