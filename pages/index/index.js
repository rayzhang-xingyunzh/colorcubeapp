// pages/index/index.js
import Game from '../../services/game'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: ["https://mmbiz.qpic.cn/mmbiz_jpg/L9XEEMNjUUUuSJc74bKuiaq31VV4tKmrhd4oN1cib2k1HJtHeCoWKxKWyOA228ib0jwBkgn31e59tueKFg8Mngp9A/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1", "https://mmbiz.qpic.cn/mmbiz_jpg/L9XEEMNjUUUuSJc74bKuiaq31VV4tKmrh6Nma9Jd8M81o9vmljLjz19lUruuZKWibLPPU3ItJMeuwiaUqknuj3n9Q/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1","https://mmbiz.qpic.cn/mmbiz_jpg/L9XEEMNjUUUuSJc74bKuiaq31VV4tKmrhck6hMXJJvNFUrLRCjcmvbH9h1uib67wgF4WO1lOUchZwUB2PL8siaFpQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1"]
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

  bannerClicked:function(event){
    wx.previewImage({
      current:event.currentTarget.dataset.url,
      urls: this.data.banners,
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

  wechatClicked:function(){
    wx.previewImage({
      urls: ["https://mmbiz.qpic.cn/mmbiz_jpg/L9XEEMNjUUUuSJc74bKuiaq31VV4tKmrhOFEDCFuJ6oY9CTKFiazy5ne8ouM9wFYAcu1AC89gI0389TPbT26nnUQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1"],
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