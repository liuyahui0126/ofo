// projects/warn/warn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picUrls: [],
    actionText:"拍摄/照片",
    checkedValue:"",
    bikeInfo:{
      num:0,
      desc:null
    },
    checkboxValue:[{
      title:"私锁私用",
      checked : false
    }, {
      title: "车牌缺损",
      checked: false
      }, {
        title: "轮胎坏了",
        checked: false
    }, {
      title: "车锁坏了",
      checked: false
      }, {
        title: "违规乱停",
        checked: false
    }, {
      title: "密码不对",
      checked: false
      },{
        title: "刹车坏了",
        checked: false
    },{
      title: "其他故障",
      checked: false
    }]
  },
  bindchange:function(e){
    this.data.checkedValue = e.detail.value;
    console.log(this.checkedValue);
  },
  takePhoto:function(){
    wx.chooseImage({
      success: (res) =>{
        var pic = this.data.picUrls;
        var arr = pic.concat(res.tempFilePaths);
        this.setData({
          picUrls: arr,
          actionText:"+"
        })
      },
    })
  },
  delPic:function(e){
    var index = e.target.dataset.index;
    this.data.picUrls.splice(index,1);
    if (this.data.picUrls.length){
      this.setData({
        picUrls: this.data.picUrls
      })
    }else{
      this.setData({
        picUrls: this.data.picUrls,
        actionText:"拍摄/照片"
      })
    }
  }, 
  changeNum:function(e){
    this.setData({
      bikeInfo: {
        num:e.detail.value,
        desc: this.data.bikeInfo.desc
      }      
    })
  },
  changeDesc: function (e) {
    this.setData({
      bikeInfo: {
        num: this.data.bikeInfo.num,
        desc: e.detail.value
      }
    })
  },
  submit:function(){
    if (this.data.checkedValue.length && this.data.picUrls.length && this.data.bikeInfo.num != 0 && this.data.bikeInfo.desc!= null){
    wx.showToast({
      title: '提交成功',
    })
    }else{
      wx.showModal({
        title: '警告',
        content: '请填写全部信息',
        confirmText: "继续填写",
        cancelText:"放弃报障",
        success:(res)=>{
          if(res.confirm){

          }else{
            wx.redirectTo({
              url: '../index/index',
            })
          }
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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