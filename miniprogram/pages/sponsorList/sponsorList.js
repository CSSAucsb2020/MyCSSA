const DEFAULT_PAGE = 0;

Page({
  startPageX: 0,
  currentView: DEFAULT_PAGE,
  data: {
    toView: `card_${DEFAULT_PAGE}`,
    list:[
      { type:"中国超市",
        index:1,
        nav:"../Sponsors/sponsor1/sponsor1",
        address:"5863 Hollister Ave, Goleta, CA 93117",
        name:"Oriental Market",
        url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
        text:"UCSB附近性价比最高种类齐全的中国超市，有许多在其他地方买不到的中国商品，比如维他柠檬茶，螺狮粉，火鸡面，海底捞火锅底料以及各种调料，生鲜都应有尽有，来了就会忍不住买不停的中超！\n\n优惠：10% off original price\n地址：5863 Hollister Ave Goleta, CA 93117 United States\n电话：805-683-4417"
        
      },
      {
        type:"自行车&修理",
        index:2,
        nav:"../Sponsors/sponsor2/sponsor2",
        address:"6547 Pardall Rd, Isla Vista, CA 93117",
        name:"Varsity Bike Shop",
        url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
        text:"Varsity Bike Shop这家老牌自行车店1964年就成立啦！它一直给UCSB的学生提供着非常优质的自行车、滑板车以及其他修车服务。这家店不仅有着良好的口碑，更有着实惠的价格。老板Steven非常的热情好客，哪怕你不买自行车，也欢迎你来店里坐坐呀！在UCSB这个大校园中，如果你也需要一个代步工具，就快来Varsity Bike Shop选购吧！\n\n优惠：10% off 自行车，15% off 其他商品（包括滑板和零件等）\n地址：6547 Pardall Rd, Isla Vista, CA 93117\n电话：805-968-4914\n营业时间：Mon-Thurs 9AM to 6PM; Fri-Sat 9AM to 5PM"
      },
      {
        type:"奶茶/小吃",
        index:3,
        nav:"../Sponsors/sponsor3/sponsor3",
        address:"901 Embarcadero del Mar, Isla Vista,CA 93117",
        name:"Tea Tea",
        url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
        text:"Tea Tea 是UCSB IV地区首家奶茶店，从开业起我们一直为UCSB的学生提供美味的小吃如盐酥鸡以及品种丰富的奶茶。除了经典原味奶茶，脏脏茶也是我们的招牌奶茶之一，喜欢喝奶茶的同学不容错过～ 除此以外，我们还提供免费WiFi以及免费充电服务，同学们在品尝奶茶小吃的同时也可以享受休闲娱乐的时光。欢迎大家进店坐坐～\n\n优惠：10% off original price\n地址：901 Embarcadero del Mar, Isla Vista,CA 93117\n营业时间: Mon to Sun 11:00 a.m. to 22:00 p.m."
      },
      {
        type:"正宗中餐",
        index:4,
        nav:"../Sponsors/sponsor4/sponsor4",
        address:"3955 State St, Santa Barbara, CA 93105",
        name:"Mandarine Palace",
        url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
        text:"圣巴巴拉地区非常有名的中餐厅。对于留学生群体，菜品价格适中，口味正宗，妥妥的中国胃福音。川园菜品十分多样，宫保鸡丁，酸汤肥牛，麻婆豆腐，北京鸭， 芙蓉海鲜汤....川园是开了很多年的口碑老店， 老板十分热情好客。欢迎同学们进店品尝～\n\n优惠：10% off original price\n地址：3955 State St, Santa Barbara, CA 93105\n营业时间：Mon to Sun 11:00a.m.-21:30p.m.\n联系方式：（805）683-2158"
      },
      {
        type:"中餐美食",
        index:5,
        nav:"../Sponsors/sponsor5/sponsor5",
        address:"511 State St, Santa Barbara CA 93101",
        name:"Asie",
        url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
        text:"圣巴巴拉知名的中餐厅。对于留学生群体，菜品价格有折扣优惠且口味鲜美。瑞轩餐厅菜品丰富多样:重庆火锅，广东点心，水煮鱼，麻婆豆腐，北京烤鸭等等，期待大家的惠顾:)\n\n优惠：Hotpot 30% off original price every Thursday, 12% off every day except Thursday.\n地址：511 state st Santa Barbara CA 93101\n联系方式：805-869-6407"
      }
    ],
    isMember:false
  },

  touchStart(e) {
    this.startPageX = e.changedTouches[0].pageX;
  },

  touchEnd(e) {
    const moveX = e.changedTouches[0].pageX - this.startPageX;
    const maxPage = this.data.list.length - 1;
    if (Math.abs(moveX) >= 35){
      if (moveX > 0) {
        this.currentView = this.currentView !== 0 ? this.currentView - 1 : 0;
      } else {
        this.currentView = this.currentView !== maxPage ? this.currentView + 1 : maxPage;
      }
    }
    if (Math.abs(moveX) >= 90){
      if (moveX > 0) {
        this.currentView = this.currentView !== 0 ? this.currentView - 1 : 0;
      } else {
        this.currentView = this.currentView !== maxPage ? this.currentView + 1 : maxPage;
      }
    }
    if (Math.abs(moveX) >= 140){
      if (moveX > 0) {
        this.currentView = this.currentView !== 0 ? this.currentView - 1 : 0;
      } else {
        this.currentView = this.currentView !== maxPage ? this.currentView + 1 : maxPage;
      }
    }
    if (Math.abs(moveX) >= 190){
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
