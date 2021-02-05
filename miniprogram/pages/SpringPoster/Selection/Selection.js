// pages/SpringPoster/Selection/Selection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selection: 0,
    imWidth: 300,
    imHeight: 300,
    
  selectionCathay:[
      {
        _icon_id: "001",
        _icon_text: "新的计划！",
        _icon_url: "https://s3.ax1x.com/2021/02/05/yJCxgI.png",
        _selection: 0,
        _selected: false,
        navigator: "choose1"
    },
    {
        _icon_id: "002",
        _icon_text: "聚餐一起干饭叭！",
        _icon_url: "https://s3.ax1x.com/2021/02/05/yJprPs.png",
        _selection: 0,
        _selected: false,
        navigator: "choose2"
    },
    {
        _icon_id: "003",
        _icon_text: "年糕酱！",
        _icon_url: "https://s3.ax1x.com/2021/02/05/yJ9DeO.png",
        _selection: 0,
        _selected: false,
        navigator: "choose3"
    },
    {
        _icon_id: "005",
        _icon_text: "是时候滑雪了！",
        _icon_url: "https://s3.ax1x.com/2021/02/05/yJCZnK.png",
        _selection: 0,
        _selected: false,
        navigator: "choose5"
    },
   {
        _icon_id: "007",
        _icon_text: "开会_就用瞩目！",
        _icon_url: "https://s3.ax1x.com/2021/02/05/yJpy2q.png",
        _selection: 0,
        _selected: false,
        navigator: "choose7"
    },
    {
      _icon_id: "008",
      _icon_text: "春晚_难忘啊今宵！",
      _icon_url: "https://s3.ax1x.com/2021/02/05/yJSTu8.png",
      _selection: 0,
      _selected: false,
      navigator: "choose8"
  },
  {
    _icon_id: "009",
    _icon_text: "赶due人敢due吗！",
    _icon_url: "https://s3.ax1x.com/2021/02/05/yJkUrq.png",
    _selection: 0,
    _selected: false,
    navigator: "choose9"
},
{
  _icon_id: "010",
  _icon_text: "贴窗花.png",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJC5g1.png",
  _selection: 0,
  _selected: false,
  navigator: "choose10"
},
{
  _icon_id: "011",
  _icon_text: "去年元夜时，花市灯如昼",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJCm7D.png",
  _selection: 0,
  _selected: false,
  navigator: "choose11"
},
{
  _icon_id: "013",
  _icon_text: "三六九万顺着您！",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJCl9A.png",
  _selection: 0,
  _selected: false,
  navigator: "choose13"
},
{
  _icon_id: "015",
  _icon_text: "爆米花和大屏幕的记忆！",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJSt74.png",
  _selection: 0,
  _selected: false,
  navigator: "choose15"
},
{
  _icon_id: "018",
  _icon_text: "开学！",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJpfZF.png",
  _selection: 0,
  _selected: false,
  navigator: "choose18"
},
{
  _icon_id: "020",
  _icon_text: "抢红包",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJ9z0U.png",
  _selection: 0,
  _selected: false,
  navigator: "choose20"
},
{
  _icon_id: "021",
  _icon_text: "贴倒福",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJCTu6.png",
  _selection: 0,
  _selected: false,
  navigator: "choose21"
},
{
  _icon_id: "106",
  _icon_text: "年年有鱼",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJ9RSI.png",
  _selection: 0,
  _selected: false,
  navigator: "choose106"
},
{
  _icon_id: "110",
  _icon_text: "keep_social_distancing！",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJSEX8.png",
  _selection: 0,
  _selected: false,
  navigator: "choose110"
},
{
  _icon_id: "112",
  _icon_text: "买新衣服",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJ9Go4.png",
  _selection: 0,
  _selected: false,
  navigator: "choose112"
},
{
  _icon_id: "113",
  _icon_text: "包饺子",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJSm7Q.png",
  _selection: 0,
  _selected: false,
  navigator: "choose113"
},
{
  _icon_id: "114",
  _icon_text: "吃八宝饭",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJSh9I.png",
  _selection: 0,
  _selected: false,
  navigator: "choose114"
},
{
  _icon_id: "115",
  _icon_text: "吃火锅",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJS5gP.png",
  _selection: 0,
  _selected: false,
  navigator: "choose115"
},
{
  _icon_id: "202",
  _icon_text: "守岁.",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJCRN4.png",
  _selection: 0,
  _selected: false,
  navigator: "choose202"
},
{
  _icon_id: "204",
  _icon_text: "年夜饭.png",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJ97kQ.png",
  _selection: 0,
  _selected: false,
  navigator: "choose204"
},
{
  _icon_id: "206",
  _icon_text: "戴口罩.png",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJpFUJ.png",
  _selection: 0,
  _selected: false,
  navigator: "choose206"
},
{
  _icon_id: "208",
  _icon_text: "拜年.png",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJSZnS.png",
  _selection: 0,
  _selected: false,
  navigator: "choose208"
},
{
  _icon_id: "210",
  _icon_text: "收压岁钱.png",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJCB3n.png",
  _selection: 0,
  _selected: false,
  navigator: "choose210"
},
{
  _icon_id: "213",
  _icon_text: "群发祝福.png",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJCKtH.png",
  _selection: 0,
  _selected: false,
  navigator: "choose213"
},
{
  _icon_id: "215",
  _icon_text: "跟男女朋友一起过",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJpk59.png",
  _selection: 0,
  _selected: false,
  navigator: "choose215"
},
{
  _icon_id: "218",
  _icon_text: "贴对联",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJCqED.png",
  _selection: 0,
  _selected: false,
  navigator: "choose218"
},
{
  _icon_id: "004",
  _icon_text: "老k登场！",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJ9mJs.png",
  _selection: 1,
  _selected: false,
  navigator: "choose4"
},
{
  _icon_id: "006",
  _icon_text: "熊孩子有什么坏心思！",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJCzvt.png",
  _selection: 1,
  _selected: false,
  navigator: "choose6"
},
{
  _icon_id: "012",
  _icon_text: "蹦迪！",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJScHe.png",
  _selection: 1,
  _selected: false,
  navigator: "choose12"
},
{
  _icon_id: "014",
  _icon_text: "爆竹声中一岁除！",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJS091.png",
  _selection: 1,
  _selected: false,
  navigator: "choose14"
},
{
  _icon_id: "016",
  _icon_text: "谁放明灯惹梦游",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJCW4J.png",
  _selection: 1,
  _selected: false,
  navigator: "choose16"
},
{
  _icon_id: "017",
  _icon_text: "觥筹交错，众宾欢也！",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJpZgx.png",
  _selection: 17,
  _selected: false,
  navigator: "choose17"
},
{
  _icon_id: "019",
  _icon_text: "年画娃娃",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJ9sTe.png",
  _selection: 1,
  _selected: false,
  navigator: "choose19"
},
{
  _icon_id: "022",
  _icon_text: "海边度假",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJpnKK.png",
  _selection: 1,
  _selected: false,
  navigator: "choose22"
},
{
  _icon_id: "108",
  _icon_text: "gap_quarter",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJSFpt.png",
  _selection: 1,
  _selected: false,
  navigator: "choose108"
},
{
  _icon_id: "109",
  _icon_text: "昼夜颠倒工作不停！",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJPevq.png",
  _selection: 1,
  _selected: false,
  navigator: "choose109"
},
{
  _icon_id: "111",
  _icon_text: "买年货",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJ93eU.png",
  _selection: 1,
  _selected: false,
  navigator: "choose111"
},
{
  _icon_id: "116",
  _icon_text: "回老家",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJp15d.png",
  _selection: 1,
  _selected: false,
  navigator: "choose116"
},
{
  _icon_id: "203",
  _icon_text: "实习打工人",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJCJnf.png",
  _selection: 1,
  _selected: false,
  navigator: "choose203"
},
{
  _icon_id: "205",
  _icon_text: "庙会.png",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJ9tY9.png",
  _selection: 1,
  _selected: false,
  navigator: "choose205"
},
{
  _icon_id: "207",
  _icon_text: "拍全家福.png",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJ9bfs.png",
  _selection: 1,
  _selected: false,
  navigator: "choose207"
},
{
  _icon_id: "211",
  _icon_text: "检测无数次核酸",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJpJ2t.png",
  _selection: 1,
  _selected: false,
  navigator: "choose211"
},
{
  _icon_id: "214",
  _icon_text: "被催找对象.png",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJSynO.png",
  _selection: 1,
  _selected: false,
  navigator: "choose214"
}
  ],
  selectionUS:[
    {
      _icon_id: "001",
      _icon_text: "新的计划！",
      _icon_url: "https://s3.ax1x.com/2021/02/05/yJCxgI.png",
      _selection: 0,
      _selected: false,
      navigator: "choose1"
  },
  {
      _icon_id: "002",
      _icon_text: "聚餐一起干饭叭！",
      _icon_url: "https://s3.ax1x.com/2021/02/05/yJprPs.png",
      _selection: 0,
      _selected: false,
      navigator: "choose2"
  },
  {
      _icon_id: "003",
      _icon_text: "年糕酱！",
      _icon_url: "https://s3.ax1x.com/2021/02/05/yJ9DeO.png",
      _selection: 0,
      _selected: false,
      navigator: "choose3"
  },
  {
      _icon_id: "005",
      _icon_text: "是时候滑雪了！",
      _icon_url: "https://s3.ax1x.com/2021/02/05/yJCZnK.png",
      _selection: 0,
      _selected: false,
      navigator: "choose5"
  },
 {
      _icon_id: "007",
      _icon_text: "开会_就用瞩目！",
      _icon_url: "https://s3.ax1x.com/2021/02/05/yJpy2q.png",
      _selection: 0,
      _selected: false,
      navigator: "choose7"
  },
  {
    _icon_id: "008",
    _icon_text: "春晚_难忘啊今宵！",
    _icon_url: "https://s3.ax1x.com/2021/02/05/yJSTu8.png",
    _selection: 0,
    _selected: false,
    navigator: "choose8"
},
{
  _icon_id: "009",
  _icon_text: "赶due人敢due吗！",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJkUrq.png",
  _selection: 0,
  _selected: false,
  navigator: "choose9"
},
{
_icon_id: "010",
_icon_text: "贴窗花.png",
_icon_url: "https://s3.ax1x.com/2021/02/05/yJC5g1.png",
_selection: 0,
_selected: false,
navigator: "choose10"
},
{
_icon_id: "011",
_icon_text: "去年元夜时，花市灯如昼",
_icon_url: "https://s3.ax1x.com/2021/02/05/yJCm7D.png",
_selection: 0,
_selected: false,
navigator: "choose11"
},
{
_icon_id: "013",
_icon_text: "三六九万顺着您！",
_icon_url: "https://s3.ax1x.com/2021/02/05/yJCl9A.png",
_selection: 0,
_selected: false,
navigator: "choose13"
},
{
_icon_id: "015",
_icon_text: "爆米花和大屏幕的记忆！",
_icon_url: "https://s3.ax1x.com/2021/02/05/yJSt74.png",
_selection: 0,
_selected: false,
navigator: "choose15"
},
{
_icon_id: "018",
_icon_text: "开学！",
_icon_url: "https://s3.ax1x.com/2021/02/05/yJpfZF.png",
_selection: 0,
_selected: false,
navigator: "choose18"
},
{
_icon_id: "020",
_icon_text: "抢红包",
_icon_url: "https://s3.ax1x.com/2021/02/05/yJ9z0U.png",
_selection: 0,
_selected: false,
navigator: "choose20"
},
{
_icon_id: "021",
_icon_text: "贴倒福",
_icon_url: "https://s3.ax1x.com/2021/02/05/yJCTu6.png",
_selection: 0,
_selected: false,
navigator: "choose21"
},
{
_icon_id: "106",
_icon_text: "年年有鱼",
_icon_url: "https://s3.ax1x.com/2021/02/05/yJ9RSI.png",
_selection: 0,
_selected: false,
navigator: "choose106"
},
{
_icon_id: "110",
_icon_text: "keep_social_distancing！",
_icon_url: "https://s3.ax1x.com/2021/02/05/yJSEX8.png",
_selection: 0,
_selected: false,
navigator: "choose110"
},
{
_icon_id: "112",
_icon_text: "买新衣服",
_icon_url: "https://s3.ax1x.com/2021/02/05/yJ9Go4.png",
_selection: 0,
_selected: false,
navigator: "choose112"
},
{
_icon_id: "113",
_icon_text: "包饺子",
_icon_url: "https://s3.ax1x.com/2021/02/05/yJSm7Q.png",
_selection: 0,
_selected: false,
navigator: "choose113"
},
{
_icon_id: "114",
_icon_text: "吃八宝饭",
_icon_url: "https://s3.ax1x.com/2021/02/05/yJSh9I.png",
_selection: 0,
_selected: false,
navigator: "choose114"
},
{
_icon_id: "115",
_icon_text: "吃火锅",
_icon_url: "https://s3.ax1x.com/2021/02/05/yJS5gP.png",
_selection: 0,
_selected: false,
navigator: "choose115"
},
{
_icon_id: "202",
_icon_text: "守岁.",
_icon_url: "https://s3.ax1x.com/2021/02/05/yJCRN4.png",
_selection: 0,
_selected: false,
navigator: "choose202"
},
{
_icon_id: "204",
_icon_text: "年夜饭.png",
_icon_url: "https://s3.ax1x.com/2021/02/05/yJ97kQ.png",
_selection: 0,
_selected: false,
navigator: "choose204"
},
{
_icon_id: "206",
_icon_text: "戴口罩.png",
_icon_url: "https://s3.ax1x.com/2021/02/05/yJpFUJ.png",
_selection: 0,
_selected: false,
navigator: "choose206"
},
{
_icon_id: "208",
_icon_text: "拜年.png",
_icon_url: "https://s3.ax1x.com/2021/02/05/yJSZnS.png",
_selection: 0,
_selected: false,
navigator: "choose208"
},
{
_icon_id: "210",
_icon_text: "收压岁钱.png",
_icon_url: "https://s3.ax1x.com/2021/02/05/yJCB3n.png",
_selection: 0,
_selected: false,
navigator: "choose210"
},
{
_icon_id: "213",
_icon_text: "群发祝福.png",
_icon_url: "https://s3.ax1x.com/2021/02/05/yJCKtH.png",
_selection: 0,
_selected: false,
navigator: "choose213"
},
{
_icon_id: "215",
_icon_text: "跟男女朋友一起过",
_icon_url: "https://s3.ax1x.com/2021/02/05/yJpk59.png",
_selection: 0,
_selected: false,
navigator: "choose215"
},
{
_icon_id: "218",
_icon_text: "贴对联",
_icon_url: "https://s3.ax1x.com/2021/02/05/yJCqED.png",
_selection: 0,
_selected: false,
navigator: "choose218"
},
{
  _icon_id: "101",
  _icon_text: "领养宠物",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJ9uzq.png",
  _selection: 2,
  _selected: false,
  navigator: "choose101"
},
{
  _icon_id: "102",
  _icon_text: "经历山火",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJp0aQ.png",
  _selection: 2,
  _selected: false,
  navigator: "choose102"
},
{
  _icon_id: "103",
  _icon_text: "怀疑自己被感染",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJpQVe.png",
  _selection: 2,
  _selected: false,
  navigator: "choose103"
},
{
  _icon_id: "104",
  _icon_text: "买不到口罩",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJ9QyV.png",
  _selection: 2,
  _selected: false,
  navigator: "choose104"
},
{
  _icon_id: "105",
  _icon_text: "拥有了自己的拿手菜",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJPk5Q.png",
  _selection: 2,
  _selected: false,
  navigator: "choose105"
},
{
  _icon_id: "107",
  _icon_text: "BLM",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJSCtA.png",
  _selection: 2,
  _selected: false,
  navigator: "choose107"
},
{
  _icon_id: "117",
  _icon_text: "因懂王各种作妖政策焦虑",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJPiVS.png",
  _selection: 2,
  _selected: false,
  navigator: "choose117"
},
{
  _icon_id: "201",
  _icon_text: "囤粮囤水",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJCO4H.png",
  _selection: 2,
  _selected: false,
  navigator: "choose201"
},
{
  _icon_id: "209",
  _icon_text: "收到防疫物资",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJC09s.png",
  _selection: 2,
  _selected: false,
  navigator: "choose209"
},
{
  _icon_id: "212",
  _icon_text: "线上组局",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJCjCd.png",
  _selection: 2,
  _selected: false,
  navigator: "choose212"
},
{
  _icon_id: "216",
  _icon_text: "被取消机票",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJCS7F.png",
  _selection: 2,
  _selected: false,
  navigator: "choose216"
},
{
  _icon_id: "217",
  _icon_text: "被迫搬家搬离宿舍",
  _icon_url: "https://s3.ax1x.com/2021/02/05/yJS6BD.png",
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
    if(this.data.selectionCathay[0]._icon_url=='https://s3.ax1x.com/2021/02/05/yJCxgI.png'){
    this.setData(
      {'selectionCathay[0]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wkLV.png',
      'selectionUS[0]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wkLV.png',
      'List[0].s' : 1,
      imWidth: 300,
      imHeight: 300
    }
    )
    }
    else{
    this.setData(
      {'selectionCathay[0]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJCxgI.png',
      'selectionUS[0]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJCxgI.png',
      'List[0].s' : 0,
      imWidth: 300,
      imHeight: 300
    
    }
    )
    }
},
choose2: function(e){
  if(this.data.selectionCathay[1]._icon_url=='https://s3.ax1x.com/2021/02/05/yJprPs.png'){
  this.setData(
    {'selectionCathay[1]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'selectionUS[1]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wVdU.png',
    'List[1].s' : 1,
    imWidth: 300,
    imHeight: 300
  
  }
  )
  }
  else{
  this.setData(
    {'selectionCathay[1]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJprPs.png',
    'selectionUS[1]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJprPs.png',
    'List[1].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose3: function(e){
  if(this.data.selectionCathay[2]._icon_url=='https://s3.ax1x.com/2021/02/05/yJ9DeO.png'){
  this.setData(
    {'selectionCathay[2]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wEZT.png',
    'selectionUS[2]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wEZT.png',
    'List[2].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[2]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJ9DeO.png',
    'selectionUS[2]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJ9DeO.png',
    'List[2].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose5: function(e){
  if(this.data.selectionCathay[3]._icon_url=='https://s3.ax1x.com/2021/02/05/yJCZnK.png'){
  this.setData(
    {'selectionCathay[3]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wiMq.png',
    'selectionUS[3]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wiMq.png',
    'List[3].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[3]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJCZnK.png',
    'selectionUS[3]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJCZnK.png',
    'List[3].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose7: function(e){
  if(this.data.selectionCathay[4]._icon_url=='https://s3.ax1x.com/2021/02/05/yJpy2q.png'){
  this.setData(
    {'selectionCathay[4]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wZoF.png',
    'selectionUS[4]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wZoF.png',
    'List[4].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[4]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJpy2q.png',
    'selectionUS[4]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJpy2q.png',
    'List[4].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose8: function(e){
  if(this.data.selectionCathay[5]._icon_url=='https://s3.ax1x.com/2021/02/05/yJSTu8.png'){
  this.setData(
    {'selectionCathay[5]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wnJJ.png',
    'selectionUS[5]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wnJJ.png',
    'List[5].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[5]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJSTu8.png',
    'selectionUS[5]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJSTu8.png',
    'List[5].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose9: function(e){
  if(this.data.selectionCathay[6]._icon_url=='https://s3.ax1x.com/2021/02/05/yJkUrq.png'){
  this.setData(
    {'selectionCathay[6]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wuW9.png',
    'selectionUS[6]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wuW9.png',
    'List[6].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[6]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJkUrq.png',
    'selectionUS[6]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJkUrq.png',
    'List[6].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose10: function(e){
  if(this.data.selectionCathay[7]._icon_url=='https://s3.ax1x.com/2021/02/05/yJC5g1.png'){
  this.setData(
    {'selectionCathay[7]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wKzR.png',
    'selectionUS[7]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wKzR.png',
    'List[7].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[7]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJC5g1.png',
    'selectionUS[7]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJC5g1.png',
    'List[7].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose11: function(e){
  if(this.data.selectionCathay[8]._icon_url=='https://s3.ax1x.com/2021/02/05/yJCm7D.png'){
  this.setData(
    {'selectionCathay[8]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wQQ1.png',
    'selectionUS[8]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wQQ1.png',
    'List[8].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[8]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJCm7D.png',
    'selectionUS[8]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJCm7D.png',
    'List[8].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose13: function(e){
  if(this.data.selectionCathay[9]._icon_url=='https://s3.ax1x.com/2021/02/05/yJCl9A.png'){
  this.setData(
    {'selectionCathay[9]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1w1L6.png',
    'selectionUS[9]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1w1L6.png',
    'List[9].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[9]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJCl9A.png',
    'selectionUS[9]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJCl9A.png',
    'List[9].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose15: function(e){
  if(this.data.selectionCathay[10]._icon_url=='https://s3.ax1x.com/2021/02/05/yJSt74.png'){
  this.setData(
    {'selectionCathay[10]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wGdO.png',
    'selectionUS[10]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wGdO.png',
    'List[10].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[10]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJSt74.png',
    'selectionUS[10]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJSt74.png',
    'List[10].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose18: function(e){
  if(this.data.selectionCathay[11]._icon_url=='https://s3.ax1x.com/2021/02/05/yJpfZF.png'){
  this.setData(
    {'selectionCathay[11]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wtFe.png',
    'selectionUS[11]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wtFe.png',
    'List[11].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[11]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJpfZF.png',
    'selectionUS[11]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJpfZF.png',
    'List[11].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose20: function(e){
  if(this.data.selectionCathay[12]._icon_url=='https://s3.ax1x.com/2021/02/05/yJ9z0U.png'){
  this.setData(
    {'selectionCathay[12]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wwQI.png',
    'selectionUS[12]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wwQI.png',
    'List[12].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[12]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJ9z0U.png',
    'selectionUS[12]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJ9z0U.png',
    'List[12].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose21: function(e){
  if(this.data.selectionCathay[13]._icon_url=='https://s3.ax1x.com/2021/02/05/yJCTu6.png'){
  this.setData(
    {'selectionCathay[13]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1w0yt.png',
    'selectionUS[13]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1w0yt.png',
    'List[13].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[13]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJCTu6.png',
    'selectionUS[13]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJCTu6.png',
    'List[13].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose106: function(e){
  if(this.data.selectionCathay[14]._icon_url=='https://s3.ax1x.com/2021/02/05/yJ9RSI.png'){
  this.setData(
    {'selectionCathay[14]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wfln.png',
    'selectionUS[14]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wfln.png',
    'List[14].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[14]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJ9RSI.png',
    'selectionUS[14]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJ9RSI.png',
    'List[14].s' : 0,
    imWidth: 300,
    imHeight: 300}
  )
  }
},
choose110: function(e){
  if(this.data.selectionCathay[15]._icon_url=='https://s3.ax1x.com/2021/02/05/yJSEX8.png'){
  this.setData(
    {'selectionCathay[15]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1w4O0.png',
    'selectionUS[15]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1w4O0.png',
    'List[15].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[15]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJSEX8.png',
    'selectionUS[15]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJSEX8.png',
    'List[15].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose112: function(e){
  if(this.data.selectionCathay[16]._icon_url=='https://s3.ax1x.com/2021/02/05/yJ9Go4.png'){
  this.setData(
    {'selectionCathay[16]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wowT.png',
    'selectionUS[16]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wowT.png',
    'List[16].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[16]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJ9Go4.png',
    'selectionUS[16]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJ9Go4.png',
    'List[16].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose113: function(e){
  if(this.data.selectionCathay[17]._icon_url=='https://s3.ax1x.com/2021/02/05/yJSm7Q.png'){
  this.setData(
    {'selectionCathay[17]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGuJyQ.png',
    'selectionUS[17]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGuJyQ.png',
    'List[17].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[17]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJSm7Q.png',
    'selectionUS[17]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJSm7Q.png',
    'List[17].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose114: function(e){
  if(this.data.selectionCathay[18]._icon_url=='https://s3.ax1x.com/2021/02/05/yJSh9I.png'){
  this.setData(
    {'selectionCathay[18]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGuNes.png',
    'selectionUS[18]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGuNes.png',
    'List[18].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[18]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJSh9I.png',
    'selectionUS[18]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJSh9I.png',
    'List[18].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose115: function(e){
  if(this.data.selectionCathay[19]._icon_url=='https://s3.ax1x.com/2021/02/05/yJS5gP.png'){
  this.setData(
    {'selectionCathay[19]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGuaoq.png',
    'selectionUS[19]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGuaoq.png',
    'List[19].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[19]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJS5gP.png',
    'selectionUS[19]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJS5gP.png',
    'List[19].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose202: function(e){
  if(this.data.selectionCathay[20]._icon_url=='https://s3.ax1x.com/2021/02/05/yJCRN4.png'){
  this.setData(
    {'selectionCathay[20]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGurSU.png',
    'selectionUS[20]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGurSU.png',
    'List[20].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[20]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJCRN4.png',
    'selectionUS[20]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJCRN4.png',
    'List[20].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose204: function(e){
  if(this.data.selectionCathay[21]._icon_url=='https://s3.ax1x.com/2021/02/05/yJ97kQ.png'){
  this.setData(
    {'selectionCathay[21]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGu9d1.png',
    'selectionUS[21]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGu9d1.png',
    'List[21].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[21]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJ97kQ.png',
    'selectionUS[21]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJ97kQ.png',
    'List[21].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose206: function(e){
  if(this.data.selectionCathay[22]._icon_url=='https://s3.ax1x.com/2021/02/05/yJpFUJ.png'){
  this.setData(
    {'selectionCathay[22]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGnxsJ.png',
    'selectionUS[22]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGnxsJ.png',
    'List[22].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[22]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJpFUJ.png',
    'selectionUS[22]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJpFUJ.png',
    'List[22].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose208: function(e){
  if(this.data.selectionCathay[23]._icon_url=='https://s3.ax1x.com/2021/02/05/yJSZnS.png'){
  this.setData(
    {'selectionCathay[23]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGnvM4.png',
    'selectionUS[23]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGnvM4.png',
    'List[23].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[23]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJSZnS.png',
    'selectionUS[23]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJSZnS.png',
    'List[23].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose210: function(e){
  if(this.data.selectionCathay[24]._icon_url=='https://s3.ax1x.com/2021/02/05/yJCB3n.png'){
  this.setData(
    {'selectionCathay[24]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGuAzD.png',
    'selectionUS[24]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGuAzD.png',
    'List[24].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[24]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJCB3n.png',
    'selectionUS[24]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJCB3n.png',
    'List[24].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose213: function(e){
  if(this.data.selectionCathay[25]._icon_url=='https://s3.ax1x.com/2021/02/05/yJCKtH.png'){
  this.setData(
    {'selectionCathay[25]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGuVQe.png',
    'selectionUS[25]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGuVQe.png',
    'List[25].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[25]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJCKtH.png',
    'selectionUS[25]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJCKtH.png',
    'List[25].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose215: function(e){
  if(this.data.selectionCathay[26]._icon_url=='https://s3.ax1x.com/2021/02/05/yJpk59.png'){
  this.setData(
    {'selectionCathay[26]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGuneA.png',
    'selectionUS[26]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGuneA.png',
    'List[26].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[26]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJpk59.png',
    'selectionUS[26]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJpk59.png',
    'List[26].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose218: function(e){
  if(this.data.selectionCathay[27]._icon_url=='https://s3.ax1x.com/2021/02/05/yJCqED.png'){
  this.setData(
    {'selectionCathay[27]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGulJf.png',
    'selectionUS[27]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGulJf.png',
    'List[27].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[27]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJCqED.png',
    'selectionUS[27]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yJCqED.png',
    'List[27].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose4: function(e){
  if(this.data.selectionCathay[28]._icon_url=='https://s3.ax1x.com/2021/02/05/yJ9mJs.png'){
  this.setData(
    {'selectionCathay[28]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wFs0.png',
    'List[28].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[28]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJ9mJs.png',
    'List[28].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose6: function(e){
  if(this.data.selectionCathay[29]._icon_url=='https://s3.ax1x.com/2021/02/05/yJCzvt.png'){
  this.setData(
    {'selectionCathay[29]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wmi4.png',
    'List[29].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[29]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJCzvt.png',
    'List[29].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose12: function(e){
  if(this.data.selectionCathay[30]._icon_url=='https://s3.ax1x.com/2021/02/05/yJScHe.png'){
  this.setData(
    {'selectionCathay[30]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wlsx.png',
    'List[30].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[30]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJScHe.png',
    'List[30].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose14: function(e){
  if(this.data.selectionCathay[31]._icon_url=='https://s3.ax1x.com/2021/02/05/yJS091.png'){
  this.setData(
    {'selectionCathay[31]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1w8eK.png',
    'List[31].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[31]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJS091.png',
    'List[31].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose16: function(e){
  if(this.data.selectionCathay[32]._icon_url=='https://s3.ax1x.com/2021/02/05/yJCW4J.png'){
  this.setData(
    {'selectionCathay[32]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wJoD.png',
    'List[32].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[32]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJCW4J.png',
    'List[32].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose17: function(e){
  if(this.data.selectionCathay[33]._icon_url=='https://s3.ax1x.com/2021/02/05/yJpZgx.png'){
  this.setData(
    {'selectionCathay[33]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wNJH.png',
    'List[33].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[33]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJpZgx.png',
    'List[33].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose19: function(e){
  if(this.data.selectionCathay[34]._icon_url=='https://s3.ax1x.com/2021/02/05/yJ9sTe.png'){
  this.setData(
    {'selectionCathay[34]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wUWd.png',
    'List[34].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[34]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJ9sTe.png',
    'List[34].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose22: function(e){
  if(this.data.selectionCathay[35]._icon_url=='https://s3.ax1x.com/2021/02/05/yJpnKK.png'){
  this.setData(
    {'selectionCathay[35]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wref.png',
    'List[35].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[35]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJpnKK.png',
    'List[35].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose108: function(e){
  if(this.data.selectionCathay[36]._icon_url=='https://s3.ax1x.com/2021/02/05/yJSFpt.png'){
  this.setData(
    {'selectionCathay[36]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1whyq.png',
    'List[36].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[36]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJSFpt.png',
    'List[36].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose109: function(e){
  if(this.data.selectionCathay[37]._icon_url=='https://s3.ax1x.com/2021/02/05/yJPevq.png'){
  this.setData(
    {'selectionCathay[37]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wImV.png',
    'List[37].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[37]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJPevq.png',
    'List[37].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose111: function(e){
  if(this.data.selectionCathay[38]._icon_url=='https://s3.ax1x.com/2021/02/05/yJ93eU.png'){
  this.setData(
    {'selectionCathay[38]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wTTU.png',
    'List[38].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[38]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJ93eU.png',
    'List[38].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose116: function(e){
  if(this.data.selectionCathay[39]._icon_url=='https://s3.ax1x.com/2021/02/05/yJp15d.png'){
  this.setData(
    {'selectionCathay[39]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGu0YV.png',
    'List[39].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[39]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJp15d.png',
    'List[39].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose203: function(e){
  if(this.data.selectionCathay[40]._icon_url=='https://s3.ax1x.com/2021/02/05/yJCJnf.png'){
  this.setData(
    {'selectionCathay[40]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGu6OJ.png',
    'List[40].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[40]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJCJnf.png',
    'List[40].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose205: function(e){
  if(this.data.selectionCathay[41]._icon_url=='https://s3.ax1x.com/2021/02/05/yJ9tY9.png'){
  this.setData(
    {'selectionCathay[41]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGnzL9.png',
    'List[41].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[41]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJ9tY9.png',
    'List[41].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose207: function(e){
  if(this.data.selectionCathay[42]._icon_url=='https://s3.ax1x.com/2021/02/05/yJ9bfs.png'){
  this.setData(
    {'selectionCathay[42]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGnXzF.png',
    'List[42].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[42]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJ9bfs.png',
    'List[42].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose211: function(e){
  if(this.data.selectionCathay[43]._icon_url=='https://s3.ax1x.com/2021/02/05/yJpJ2t.png'){
  this.setData(
    {'selectionCathay[43]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGuZsH.png',
    'List[43].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[43]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJpJ2t.png',
    'List[43].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose214: function(e){
  if(this.data.selectionCathay[44]._icon_url=='https://s3.ax1x.com/2021/02/05/yJSynO.png'){
  this.setData(
    {'selectionCathay[44]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGuKot.png',
    'List[44].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionCathay[44]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJSynO.png',
    'List[44].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},


choose101: function(e){
  if(this.data.selectionUS[28]._icon_url=='https://s3.ax1x.com/2021/02/05/yJ9uzq.png'){
  this.setData(
    {'selectionUS[28]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wsw8.png',
    'List[45].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionUS[28]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJ9uzq.png',
    'List[45].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose102: function(e){
  if(this.data.selectionUS[29]._icon_url=='https://s3.ax1x.com/2021/02/05/yJp0aQ.png'){
  this.setData(
    {'selectionUS[29]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wyTS.png',
    'List[46].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionUS[29]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJp0aQ.png',
    'List[46].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose103: function(e){
  if(this.data.selectionUS[30]._icon_url=='https://s3.ax1x.com/2021/02/05/yJpQVe.png'){
  this.setData(
    {'selectionUS[30]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wcFg.png',
    'List[47].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionUS[30]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJpQVe.png',
    'List[47].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose104: function(e){
  if(this.data.selectionUS[31]._icon_url=='https://s3.ax1x.com/2021/02/05/yJ9QyV.png'){
  this.setData(
    {'selectionUS[31]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wgYQ.png',
    'List[48].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionUS[31]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJ9QyV.png',
    'List[48].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose105: function(e){
  if(this.data.selectionUS[32]._icon_url=='https://s3.ax1x.com/2021/02/05/yJPk5Q.png'){
  this.setData(
    {'selectionUS[32]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1w2Wj.png',
    'List[49].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionUS[32]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJPk5Q.png',
    'List[49].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose107: function(e){
  if(this.data.selectionUS[33]._icon_url=='https://s3.ax1x.com/2021/02/05/yJSCtA.png'){
  this.setData(
    {'selectionUS[33]._icon_url' : 'https://s3.ax1x.com/2021/02/04/y1wWSs.png',
    'List[50].s' : 1}
  )
  }
  else{
  this.setData(
    {'selectionUS[33]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJSCtA.png',
    'List[50].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose117: function(e){
  if(this.data.selectionUS[34]._icon_url=='https://s3.ax1x.com/2021/02/05/yJPiVS.png'){
  this.setData(
    {'selectionUS[34]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGuwF0.png',
    'List[51].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionUS[34]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJPiVS.png',
    'List[51].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose201: function(e){
  if(this.data.selectionUS[35]._icon_url=='https://s3.ax1x.com/2021/02/05/yJCO4H.png'){
  this.setData(
    {'selectionUS[35]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGuBWT.png',
    'List[52].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionUS[35]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJCO4H.png',
    'List[52].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose209: function(e){
  if(this.data.selectionUS[36]._icon_url=='https://s3.ax1x.com/2021/02/05/yJC09s.png'){
  this.setData(
    {'selectionUS[36]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGukRO.png',
    'List[53].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionUS[36]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJC09s.png',
    'List[53].s' : 0
    }
  )
  }
},
choose212: function(e){
  if(this.data.selectionUS[37]._icon_url=='https://s3.ax1x.com/2021/02/05/yJCjCd.png'){
  this.setData(
    {'selectionUS[37]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGueLd.png',
    'List[54].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionUS[37]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJCjCd.png',
    'List[54].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose216: function(e){
  if(this.data.selectionUS[38]._icon_url=='https://s3.ax1x.com/2021/02/05/yJCS7F.png'){
  this.setData(
    {'selectionUS[38]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGuQFP.png',
    'List[55].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionUS[38]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJCS7F.png',
    'List[55].s' : 0,
      imWidth: 300,
      imHeight: 300}
  )
  }
},
choose217: function(e){
  if(this.data.selectionUS[39]._icon_url=='https://s3.ax1x.com/2021/02/05/yJS6BD.png'){
  this.setData(
    {'selectionUS[39]._icon_url' : 'https://s3.ax1x.com/2021/02/05/yGu1W8.png',
    'List[56].s' : 1,
    imWidth: 300,
    imHeight: 300}
  )
  }
  else{
  this.setData(
    {'selectionUS[39]._icon_url': 'https://s3.ax1x.com/2021/02/05/yJS6BD.png',
    'List[56].s' : 0,
      imWidth: 300,
      imHeight: 300}
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
  onNavigate: function(e){
    var info = {
      nickname: this.data.nickname,
      List: this.data.List
    }
    wx.navigateTo({
      url: '../createPoster/Create?info=' + JSON.stringify(info),
    })
  }
  //选择
})

