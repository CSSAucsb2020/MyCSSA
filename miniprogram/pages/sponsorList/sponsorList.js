const DEFAULT_PAGE = 0;

Page({
  startPageX: 0,
  currentView: DEFAULT_PAGE,
  data: {
    toView: `card_${DEFAULT_PAGE}`,
    list:[
      { type:"中国超市",
        index:1,
        nav:"../sponsor1/sponsor1",
        address:"5863 Hollister Ave, Goleta, CA 93117",
        name:"Oriental Market",
        url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
        text:"UCSB附近性价比最高种类齐全的中国超市，有许多在其他地方买不到的中国商品，比如维他柠檬茶，螺狮粉，火鸡面，海底捞火锅底料以及各种调料，生鲜都应有尽有，来了就会忍不住买不停的中超！\n\n优惠：10% off original price\n地址：5863 Hollister Ave Goleta, CA 93117 United States\n电话：805-683-4417"
        
      },
      {
        type:"自行车&修理",
        index:2,
        nav:"../sponsor2/sponsor2",
        address:"6547 Pardall Rd, Isla Vista, CA 93117",
        name:"Varsity Bike Shop",
        url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
        text:"Varsity Bike Shop这家老牌自行车店1964年就成立啦！它一直给UCSB的学生提供着非常优质的自行车、滑板车以及其他修车服务。这家店不仅有着良好的口碑，更有着实惠的价格。老板Steven非常的热情好客，哪怕你不买自行车，也欢迎你来店里坐坐呀！在UCSB这个大校园中，如果你也需要一个代步工具，就快来Varsity Bike Shop选购吧！\n\n优惠：10% off 自行车，15% off 其他商品（包括滑板和零件等）\n地址：6547 Pardall Rd, Isla Vista, CA 93117\n电话：805-968-4914\n营业时间：Mon-Thurs 9AM to 6PM; Fri-Sat 9AM to 5PM"
      },
      {
        type:"奶茶/小吃",
        index:3,
        nav:"../sponsor3/sponsor3",
        address:"901 Embarcadero del Mar, Isla Vista,CA 93117",
        name:"Tea Tea",
        url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
        text:"Tea Tea 是UCSB IV地区首家奶茶店，从开业起我们一直为UCSB的学生提供美味的小吃如盐酥鸡以及品种丰富的奶茶。除了经典原味奶茶，脏脏茶也是我们的招牌奶茶之一，喜欢喝奶茶的同学不容错过～ 除此以外，我们还提供免费WiFi以及免费充电服务，同学们在品尝奶茶小吃的同时也可以享受休闲娱乐的时光。欢迎大家进店坐坐～\n\n优惠：10% off original price\n地址：901 Embarcadero del Mar, Isla Vista,CA 93117\n营业时间: Mon to Sun 11:00 a.m. to 22:00 p.m."
      },
      {
        type:"正宗中餐",
        index:4,
        nav:"../sponsor4/sponsor4",
        address:"3955 State St, Santa Barbara, CA 93105",
        name:"Mandarine Palace",
        url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
        text:"圣巴巴拉地区非常有名的中餐厅。对于留学生群体，菜品价格适中，口味正宗，妥妥的中国胃福音。川园菜品十分多样，宫保鸡丁，酸汤肥牛，麻婆豆腐，北京鸭， 芙蓉海鲜汤....川园是开了很多年的口碑老店， 老板十分热情好客。欢迎同学们进店品尝～\n\n优惠：10% off original price\n地址：3955 State St, Santa Barbara, CA 93105\n营业时间：Mon to Sun 11:00a.m.-21:30p.m.\n联系方式：（805）683-2158"
      },
      {
        type:"中餐美食",
        index:5,
        nav:"../sponsor5/sponsor5",
        address:"511 State St, Santa Barbara CA 93101",
        name:"Asie",
        url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
        text:"圣巴巴拉知名的中餐厅。对于留学生群体，菜品价格有折扣优惠且口味鲜美。瑞轩餐厅菜品丰富多样:重庆火锅，广东点心，水煮鱼，麻婆豆腐，北京烤鸭等等，期待大家的惠顾:)\n\n优惠：Hotpot 30% off original price every Thursday, 12% off every day except Thursday.\n地址：511 state st Santa Barbara CA 93101\n联系方式：805-869-6407"
      },
      {
        type:"中餐/音乐/唱K",
        index:6,
        nav:"../sponsor6/sponsor6",
        address:"2251 Las Positas Rd, Santa Barbara, CA 93105",
        name:"Meet Up Chinese Cuisine",
        url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
        text:"Meet Up Chinese Cuisine 遇见 是圣巴巴拉地区唯一一家音乐主题的休闲餐厅， 每周末都会有乐队为客人带来独特的就餐体验， 还可以预定唱K包间呢～遇见根据当地饮食习惯，地域风情为当地消费者群体专属定制中式餐饮系列。以各种食材的完美搭配， 烹饪出各种创意中餐， 非常符合留学生口味...在享受美食和音乐的同时，遇见也提供各种卡牌游戏，还会赠送饮品哦。欢迎大家进店坐坐～\n\n优惠：唱K九折，赠送饮品\n地址：2251 Las Positas Rd, Santa Barbara, CA 93105\n营业时间：Mon to Sun 11:00a.m.-23:00p.m.\n联系方式：（805）507-7777"
      },
      {
        type:"奶茶/小吃",
        index:7,
        nav:"../sponsor7/sponsor7",
        address:"6530 Seville Rd, Ste 103, Isla Vista, CA 93117",
        name:"Mojo Asian Fusion Cafe",
        url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
        text:"Mojo是ucsb非常有名的一家奶茶店。本店不仅提供各种奶茶，还有主食rice bowel和各种小吃，如盐酥鸡，炸豆腐，章鱼小丸子等等～ Mojo位于iv，距离iv theater只有几分钟的路程，是大家上课下课休闲小坐的不二选择！本店有免费wifi和充电服务，店内干净整洁，很多同学也选择在这里学习看书呢。欢迎大家多多光临哦！！\n\n优惠：10%off original price\n地址：6530 Seville Rd，Ste 103，Isla Vista, CA 93117\n营业时间：Mon to Sun 11:00am-10:00pm\n联系方式：(805)-324-4350"
      },
      {
        type:"正宗中餐",
        index:8,
        nav:"../sponsor8/sponsor8",
        address:"2840-C De La Vina St, Santa Barbara, CA 93105",
        name:"New Sichuan Garden",
        url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
        text:"川香园是一家正宗的川菜餐厅，位于SB downtown西北端，距离UCSB校园比downtown要更近。菜品特色多样，价格合理，并且份量也很适合学生群体。可以电话预定烤鸭、火锅等需要较长等待时间的菜式，也可以预定外带。欢迎大家前来品尝！\n\n优惠：10% off original price\n地址:  2840-C De La Vina St, Santa Barbara, CA 93105\n电话:  805-682-7191"
      },
      {
        type:"日韩料理",
        index:9,
        nav:"../sponsor9/sponsor9",
        address:"955 Embarcadero del mar, Goleta CA 93117",
        name:"Sushiya Express",
        url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
        text:"We use fresh ingredients, we cook with mom and dad's recipes. My parents have 20 years of experience in this field. We want to make friendly, family-like atmosphere and always thankful and grateful to our valued customers/ friends:) come try our food!\n\n优惠：We give 10% discount except Kalbi, macaron ice cream, and beverages.\n地址：955 Embarcadero del mar, Goleta CA 93117\n联系方式：805-961-8272"
      },
      {
        type:"正宗中餐",
        index:10,
        nav:"../sponsor10/sponsor10",
        address:"5599 Hollister Ave. Unit B-C 217 高速 Hollister Ave",
        name:"Uniboil",
        url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
        text:"煮道除了最最出名的猪手锅，现在还推出了各式铁板烧! 不要说我没告诉你， 铁板牛真的是嫩到没朋友!!!更激动人心的是，除了煮道我们还带来了煮道的附属品牌  PHRESH TEAS还会愁在SB喝不到好喝的奶茶吗?\n\n优惠：10% off original price\n地址:  5599 Hollister Ave. Unit B-C 217 高速 hollister Ave. 入口旁，近 Toyota dealership\n电话:  805-770-3875"
      },
      {
        type:"越南料理",
        index:11,
        nav:"../sponsor11/sponsor11",
        address:"903 Embarcadero del Norte, Isla Vista, CA 93117",
        name:"Pho Bistro",
        url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg", //demo url
        text:"Pho Bistro 是一家越南料理店，位于Isla Vista，距离学校步行可到达，菜色多样，除了越南河粉外还提供各色饮料，盖饭，炒饭，馄饨等中国菜色。色香味俱全的亚洲美食等待大家来品尝！\n\n优惠: 10% off \n地址：903 Embarcadero del Norte, Isla Vista, CA 93117\n电话：806-685-3601"
      },
      {
        type:"正宗中餐",
        index:12,
        nav:"../sponsor12/sponsor12",
        address:"6831 Hollister Ave, Goleta, CA 93117",
        name:"Lucky Dragon",
        url:"https://s3.ax1x.com/2020/11/24/DNG5FO.jpg" , //demo url
        text:"Lucky Dragon 是位于UCSB附近地理位置绝佳的川菜馆。Market Place是新生们在还没有车的情况下最理想的就餐地点，更别说Lucky Dragon是一家本就在 Isla Vista/Goleta少有的中餐馆。沸腾鱼，酸菜鱼，夫妻肺片等等川菜让人直流口水。当然，他们家最特别的还是这两个必点菜：火爆腰花和酒酿丸子。在Santa Barbara很难吃到这么地道的火爆腰花，饭后再来一个老板自酿的酒酿丸子，简直不能太幸福。\n\n优惠：10% off\n地址：6831 Hollister Ave, Goleta, CA 93117\n电话：(805)770-5651"
      },
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
