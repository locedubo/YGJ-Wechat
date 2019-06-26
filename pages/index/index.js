//index.js
//获取应用实例
const WXAPI = require('../../wxapi/main')

const app = getApp()

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: false, // loading
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    banners: [{ 'businessId': '0', 'picUrl': '/images/banner/3.jpg' }, { 'businessId': '0', 'picUrl': '/images/banner/4.jpg' }],
    goodsRecommend: [{ 'id': '0', 'pic': '/images/goods/2.jpg', 'name': '家电维修' }, { 'id': '0', 'pic': '/images/goods/3.jpg', 'name': '家电维修' }],
    goods: [{ 'id': '0', 'pic': '/images/goods/4.jpg', 'name': '格力空调', 'minPrice': '2499', 'originalPrice': '2699' }, { 'id': '0', 'pic': '/images/goods/5.jpg', 'name': '家电维修', 'minPrice': '2499', 'originalPrice': '2699' }, { 'id': '0', 'pic': '/images/goods/6.jpg', 'name': '家电维修', 'minPrice': '2499', 'originalPrice': '2699' }, { 'id': '0', 'pic': '/images/goods/7.jpg', 'name': '家电维修', 'minPrice': '2499', 'originalPrice': '2699' }],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }


  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
