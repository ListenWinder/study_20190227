// pages/study1/study1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:"要显示的内容",
    textVisible:true,
    news:["news1","news2","news3"]
  },

  changeText :function(e){
  //  this.setData({
  //    textVisible:!this.data.textVisible,

  //  })
  if(this.data.textVisible){
    var showText = this.data.textVisible;
    this.setData({
      text:"隐藏内容",
      textVisible:!showText});
    // this.setData({ textVisible: false})
  }else{
    this.setData({ 
      text:"显示内容",
      textVisible: !showText });
    // this.setData({ textVisible: true })
  }
  },

  navigation:function(){
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})