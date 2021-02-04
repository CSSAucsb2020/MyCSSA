const DEFAULT_PAGE = 0;

Page({
  startPageX: 0,
  currentView: DEFAULT_PAGE,
  data: {
    toView: `card_${DEFAULT_PAGE}`,
    list: [{
        type: "电子商城",
        index: 1,
        nav: "../Sponsors/sponsor1/sponsor1",
        address: " online",
        name: "UCSB CSSA电子商城",
        url: "https://s3.ax1x.com/2021/01/19/sgNQE9.png", //demo url
        text: "CSSA特联系到正规渠道代理商（资质已严格审查，同学们可以放心购买！）联合上线CSSA华为/苹果商城，为同学们提供大额学生优惠。\n\n优惠：商品均享受10-200大额现金优惠。\n地址：UCSB CSSA电子商城 https://k.koudai.com/fN1avZ2m\n电话：188-3886-5588"

      },
      {
        type: "电子商城(黑卡优惠）",
        index: 2,
        nav: "../Sponsors/sponsor1.5/sponsor1.5",
        address: " online",
        name: "UCSB CSSA电子商城",
        url: "https://s3.ax1x.com/2021/01/19/sgNQE9.png", //demo url
        text: "CSSA特联系到正规渠道代理商（资质已严格审查，同学们可以放心购买！）联合上线CSSA华为/苹果商城，为同学们提供大额学生优惠。\n\n优惠：商品均享受10-200大额现金优惠 额外优惠9.8折。\n地址：UCSB CSSA电子商城 https://k.koudai.com/fN1avZ2m\n电话：188-3886-5588"

      },
      {
        type: "在线学习平台",
        index: 3,
        nav: "../Sponsors/sponsor2/sponsor2",
        address: "251 W 30th St, New York, NY, 10001",
        name: "Offer帮",
        url: "https://s3.ax1x.com/2021/01/19/sgw5eU.png", //demo url
        text: " Offer帮是首个专注于留学生求职的在线学习平台，由北大、常春藤校友联合创办，核心团队来自摩根大通、麦肯锡、摩根士丹利、普华永道、谷歌等全球顶尖公司。以涵盖各领域的专业导师、长期课研的求职核心课程、丰富的海内外企业资源，成为数万留学生信赖和首选的求职学习平台。\n\n优惠：单门课程50美金优惠\n地址：251 W 30th St, New York, NY, 10001\n电话：+1 404-626-2063"
      },
      {
        type: "在线学习平台（黑卡专享）",
        index: 4,
        nav: "../Sponsors/sponsor2.5/sponsor2.5",
        address: "251 W 30th St, New York, NY, 10001",
        name: "Offer帮",
        url: "https://s3.ax1x.com/2021/01/19/sgw5eU.png", //demo url
        text: " Offer帮是首个专注于留学生求职的在线学习平台，由北大、常春藤校友联合创办，核心团队来自摩根大通、麦肯锡、摩根士丹利、普华永道、谷歌等全球顶尖公司。以涵盖各领域的专业导师、长期课研的求职核心课程、丰富的海内外企业资源，成为数万留学生信赖和首选的求职学习平台。\n\n优惠：单门课程80美金优惠\n地址：251 W 30th St, New York, NY, 10001\n电话：+1 404-626-2063"
      },
      {
        type: "在线舞蹈课程（月卡）",
        index: 5,
        nav: "../Sponsors/sponsor3/sponsor3",
        address: "Downtown Los Angeles, CA",
        name: "STEEZY Studio",
        url: "https://s3.ax1x.com/2021/01/19/sgDgWd.png", //demo url
        text: "美国知名舞室，提供在线舞蹈课程，由世界上最好的舞者授课。舞蹈类型 - 覆盖多舞种并不断更新：目前有韩舞，嘻哈（hiphop），流行编舞（popular choreography），地板舞/霹雳舞（breaking），健身舞，舞厅/雷鬼（dancehall），高跟鞋舞（heels），狂派舞（krump），lite feet，甩手舞（whacking），震撼舞（popping），以及舞蹈技巧课tips&lectures。提供网站和平板、手机APP等多种使用端口，上课方式为录播，镜面正面背面可选，速度可调，可全方位360º看instructor的动作、使用先进的分屏功能（一半屏幕可以看到自己，一半屏幕看到instructor），方便对比动作。课程类型包括基础动作breakdown讲解、完展编舞分解讲解，以及名师课堂，由国际知名舞者教授，还可以为你推送的每日的私人订制系列课程。STEEZY还提供舞者讨论的平台，包括Instagram、Facebook group等等，还有有趣的开party功能，让你可以与你的小伙伴们一起上课。\n\n优惠：50% off a monthly subscription plan for the first 12 months\n地址：Downtown Los Angeles, CA"
      },
      {
        type: "在线舞蹈课程（年卡）",
        index: 6,
        nav: "../Sponsors/sponsor3.5/sponsor3.5",
        address: "Downtown Los Angeles, CA",
        name: "STEEZY Studio",
        url: "https://s3.ax1x.com/2021/01/19/sgDgWd.png", //demo url
        text: "美国知名舞室，提供在线舞蹈课程，由世界上最好的舞者授课。舞蹈类型 - 覆盖多舞种并不断更新：目前有韩舞，嘻哈（hiphop），流行编舞（popular choreography），地板舞/霹雳舞（breaking），健身舞，舞厅/雷鬼（dancehall），高跟鞋舞（heels），狂派舞（krump），lite feet，甩手舞（whacking），震撼舞（popping），以及舞蹈技巧课tips&lectures。提供网站和平板、手机APP等多种使用端口，上课方式为录播，镜面正面背面可选，速度可调，可全方位360º看instructor的动作、使用先进的分屏功能（一半屏幕可以看到自己，一半屏幕看到instructor），方便对比动作。课程类型包括基础动作breakdown讲解、完展编舞分解讲解，以及名师课堂，由国际知名舞者教授，还可以为你推送的每日的私人订制系列课程。STEEZY还提供舞者讨论的平台，包括Instagram、Facebook group等等，还有有趣的开party功能，让你可以与你的小伙伴们一起上课。\n\n50% off a yearly subscription plan for the first year\n地址：Downtown Los Angeles, CA"
      },
      {
        type: "线下自习室",
        index: 7,
        nav: "../Sponsors/sponsor4/sponsor4",
        address: "北京 上海 深圳 杭州",
        name: "Easiversity 得易青年",
        url: "https://s3.ax1x.com/2021/01/19/sgrv3d.png", //demo url
        text: "为滞留在中国的留学生 建立线下全方位发展自习室\n\n优惠：上海 1799/月/人\n北京 1599/月/人\n深圳 1899/月/人\n 杭州 1600/月/人\n地址：上海：淮海中路627号4层\n北京：王府井大街219号淘汇新天7层\n深圳：科发路19号华润置地大厦D座5层\n益田路6003号荣超商务中心B座4层\n杭州：上城区延安路292号7层\n\n电话：18939907089"},
      {
        type: "",
        index: 8,
        nav: "",
        address: "",
        name: "Coming soon",
        url: "", //demo url
        text: ""
      }
    ],
    isMember: false
  },

  touchStart(e) {
    this.startPageX = e.changedTouches[0].pageX;
  },

  touchEnd(e) {
    const moveX = e.changedTouches[0].pageX - this.startPageX;
    const maxPage = this.data.list.length - 1;
    if (Math.abs(moveX) >= 35) {
      if (moveX > 0) {
        this.currentView = this.currentView !== 0 ? this.currentView - 1 : 0;
      } else {
        this.currentView = this.currentView !== maxPage ? this.currentView + 1 : maxPage;
      }
    }
    if (Math.abs(moveX) >= 90) {
      if (moveX > 0) {
        this.currentView = this.currentView !== 0 ? this.currentView - 1 : 0;
      } else {
        this.currentView = this.currentView !== maxPage ? this.currentView + 1 : maxPage;
      }
    }
    if (Math.abs(moveX) >= 140) {
      if (moveX > 0) {
        this.currentView = this.currentView !== 0 ? this.currentView - 1 : 0;
      } else {
        this.currentView = this.currentView !== maxPage ? this.currentView + 1 : maxPage;
      }
    }
    if (Math.abs(moveX) >= 190) {
      if (moveX > 0) {
        this.currentView = this.currentView !== 0 ? this.currentView - 1 : 0;
      } else {
        this.currentView = this.currentView !== maxPage ? this.currentView + 1 : maxPage;
      }
    }
    this.setData({
      toView: `card_${this.currentView}`
    });
  }
})