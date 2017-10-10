// pages/suggestion/index.js
import Game from '../../services/game.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    suggestion:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.getStorage({
      key: 'suggestOptions',
      success: (res) => {
        console.log(res)
        const gameService = new Game()
        const result = gameService.getSuggestion(res)
        console.log(result)
        this.setData({
          suggestion:result
        })
      },
    })

    
  },

  handleCardClick:(e) => {
    console.log(e)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})