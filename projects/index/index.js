Page({
  data: {
  },
  add: function () {
    console.log("add");
  },
  control: function (e) {
    switch (e.controlId) {
      case 1:
        this.map.moveToLocation();
        break;
      case 2:
        if (this.flag) {
          wx.navigateBack({
            delta:1
          })
        } else {
          wx.scanCode({
            success: (res) => {
              wx.showLoading({
                title: '正在加载',
              })
              wx.request({
                url: "https://www.easy-mock.com/mock/5a6d785464bcc735e02b2416/ofo/password",
                success: (res) => {
                  wx.redirectTo({
                    url: `../scanCode/scanCode?pass=${res.data.data.password}&num=${res.data.data.number}`,
                  })
                }
              })
            }
          })
        }
      break;
      case 3:
      wx.redirectTo({
        url: '../warn/warn',
      })
      break;
      case 4:
      wx.redirectTo({
        url: '../my/my',
      })
      break;
    }
  },
  onLoad: function (p) {
    this.flag = p.flag;
    wx.getLocation({
      success: (res) => {
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      },
    })
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          controls: [{
            id: 1,
            iconPath: "/images/location.png",
            clickable: true,
            position: {
              width: 50,
              height: 50,
              top: res.windowHeight - 100,
              left: 20
            }
          }, {
            id: 2,
            iconPath: "/images/use.png",
            position: {
              width: 90,
              height: 90,
              top: res.windowHeight - 120,
              left: res.windowWidth / 2 - 45
            },
            clickable: true
          }, {
            id: 3,
            iconPath: "/images/warn.png",
            position: {
              width: 50,
              height: 50,
              top: res.windowHeight - 100,
              left: res.windowWidth - 70
            },
            clickable: true
          }, {
            id: 4,
            iconPath: "/images/avatar.png",
            position: {
              width: 50,
              height: 50,
              top: res.windowHeight - 180,
              left: res.windowWidth - 70
            },
            clickable: true
          }, {
            id: 5,
            iconPath: "/images/marker.png",
            position: {
              width: 35,
              height: 50,
              top: res.windowHeight / 2 - 50,
              left: res.windowWidth / 2 - 18
            }
          }]
        })
      },
    })
  },
  onShow: function () {
    this.map = wx.createMapContext("mapId", this)
  },
  onReady: function () {
  }
})