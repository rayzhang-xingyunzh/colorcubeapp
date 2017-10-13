// pages/suggestion/index.js
import Game from '../../services/game.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    suggestion:[],
    bgColor: ["#fdbe6e","#fe91a4","#89d0fa"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.getStorage({
      key: 'suggestOptions',
      success: (res) => {
        console.log("res",res)
        const gameService = new Game()
        const result = gameService.getSuggestion(res.data)
        console.log(result)
        this.setData({
          suggestion:result
        })
      },
    })
  },

  handleCardClick:(e) => {
    console.log(e)
    wx.navigateTo({
      url: '/pages/game/index?gameId=' + e.target.dataset.id,
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})