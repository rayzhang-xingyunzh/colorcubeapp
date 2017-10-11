// pages/suggest/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    players:2,
    duration:20,
    tags:[{
      name:'学生',checked:false
    }, {
      name: '白领', checked: false
      }, {
        name: '烧脑', checked: false
    }, {
      name: '策略', checked: false
      }, {
        name: '欢乐', checked: false
      },{
      name: '', checked: false
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(Game)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  //玩家人数改变
  playersChange(e){
    console.log("players changed to " + e.detail.value)
    this.setData({
      players:e.detail.value
    })
  },

  //游戏时长改变
  durationChange(e){
    console.log("duration changed to " + e.detail.value)
    this.setData({
      duration: e.detail.value
    })
  },

  tagChange(e){
    console.log(e.detail.value)
    var tags = this.data.tags
    for(var i=0;i<tags.length;i++){
      tags[i].checked = e.detail.value.indexOf(tags[i].name) > -1;
    } 

    this.setData({
      tags:tags
    })
  },

  suggest(){
    const checkedTags = this.data.tags.filter((tag) => {
      return tag.checked
    }).map((tag) => {
      return tag.name
    })
    console.log("players:" + this.data.players)
    console.log("duration:" + this.data.duration)
    console.log(checkedTags)

    wx.setStorage({
      key: 'suggestOptions',
      data: {
        players:this.data.players,
        duration:this.data.duration,
        tags:checkedTags
      },
      success(){
        wx.navigateTo({
          url: '/pages/suggestion/index',
        })
      }
    })
  }
})