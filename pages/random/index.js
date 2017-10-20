// pages/random/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flippedCardId:-1,
    shouldShowResult:false,
    clause:"我是惩罚",
    publishments:["我是惩罚，讲讲你的初恋","右上角转发此小程序到你消息列表的第3个人/群！"]
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      flippedCardId: -1
    })
  },

  chosenCardClicked:function(){
    this.setData({
      flippedCardId: -1,
      shouldShowResult:false
    })
  },

  cardClicked:function(e) {
    const no = Math.floor(Math.random() * 2)
    if(this.data.flippedCardId == -1){
      this.setData({
        clause:this.data.publishments[no],
        flippedCardId: e.currentTarget.dataset.id
      })
    }

    setTimeout(()=>{
      this.setData({
        shouldShowResult:true
      })
    },500)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})