Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数组
    swiperlist:[]
  },
onLoad:function(options){
 wx.request({
   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
   method:'GET',
   success: (result) => {
     console.log(result)
     this.setData({swiperlist:result.data.message})
   }
  //  fail: (res) => {},请求成功时触发
  //  complete: (res) => {},无论请求失败还是成都会触发 }
 })
},
  /**
   * 生命周期函数--监听页面加载
   */
  
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
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})