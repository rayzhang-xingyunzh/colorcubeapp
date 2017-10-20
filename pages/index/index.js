// pages/index/index.js
import Game from '../../services/game'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotGames:[],
    banners:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const game = new Game
    this.setData({
      hotGames: game.getHotGames()
    })
  },

  gameClicked:function(e){
    console.log(e.target)
    wx.navigateTo({
      url: '/pages/game/index?id=' + e.currentTarget.dataset.id,
    })
  },

  locationClicked:function(){
    wx.openLocation({
      name: "快乐方专业桌游吧",
      address: "湖北省武汉市武昌区中南路2号中建广场C座6-G室", 
      latitude: 30.53516, 
      longitude: 114.33261
    })
  },

  phoneClicked:function(){
    wx.showModal({
      title: '拨打此号码？',
      content: '18502794699',
      confirmText:"拨打",
      success:(res) => {
        if(res.confirm){
          wx.makePhoneCall({
            phoneNumber: '18502794699'
          })
        }
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})