// pages/kuaidi/kuaidi.js
Page({

  
  data: {
    expressNo:null,
    expressInfo:null,
    selectArray:null,
    selectedComNo:null,
    
    // selectArray:[{
    //   "com":"yd",
    //   "text":"韵达"
    // },{"com":"yt",
    // "text":"圆通速递"}]
  },
  btnClick: function (no,com) {
    var thisPage = this,
    no = this.data.expressNo,
    com = this.data.selectedComNo
    // if (com == null || null ==''){
    //   wx.showModal({
    //     title: '提示',
    //     content: '请选择承运的快递公司',
    //   })
    //   return
    // }
    wx.request({
      url: 'http://www.kuaidi100.com/query?type=yuantong&postid=600149927534022752',
      // url: 'http://v.juhe.cn/exp/index?com='  + com + '&no=' + no + '&senderPhone=&receiverPhone=&dtype=&key=b48356a466860acfbb83ccd1131280a7',
      success(res) {
        console.log(res.data)
        thisPage.setData({ expressInfo: res.data })
      }
    })
    if(no != null && no!=""){
      wx.request({
        url: 'http://www.kuaidi100.com/query?type=yuantong&postid=600149927534022752',
        // url: 'http://v.juhe.cn/exp/index?com='  + com + '&no=' + no + '&senderPhone=&receiverPhone=&dtype=&key=b48356a466860acfbb83ccd1131280a7',
        success(res) {
          console.log(res.data)
          thisPage.setData({ expressInfo: res.data })
        }
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '请输入快递单号',
      })
      return
    }
    },

  select_click: function(){
    var thisPage = this
    wx.request({
      url: 'http://v.juhe.cn/exp/com?key=b48356a466860acfbb83ccd1131280a7',
      success(res) {
        console.log(res.data)
        thisPage.setData({ selectArray: res.data,
        })
      }
    })
  },
  getData: function(e){
   this.setData({
     selectedComNo:e.detail.no
   })
  },
  input:function(e){
    this.setData({
      expressNo:e.detail.value
    })
  }
})