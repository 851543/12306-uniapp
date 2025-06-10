<template>
  <view class="my-center">
    <!-- 顶部背景和用户信息 -->
    <view class="header-bg">
      <view class="header">
        <view class="user-info">
          <image class="avatar" src="/static/images/icon/grzx/tx.jpg" mode="aspectFill" />
          <view class="user-detail">
            <text class="username">朱bb</text>
            <text class="account">账号管理</text>
          </view>
        </view>
        <uni-icons type="gear" size="28" color="#fff" class="setting-icon" />
      </view>
    </view>
    <!-- 订单类型导航 -->
    <view class="order-nav card">
      <view class="order-item" v-for="myTop in myTopList" :key="myTop.id">
        <image :src="myTop.imgUrl" class="icon" />
        <text>{{ myTop.title }}订单</text>
      </view>
    </view>
    <!-- 财富/加速包 -->
    <view class="wealth card">
      <view class="menu-left">
        <image class="menu-logo" src="/static/images/icon/grzx/cxfw.jpg" mode="aspectFill" />
        <text class="wealth-title">我的财富</text>
      </view>
      <text class="count">0 个加速包</text>
      <text class="get">领取加速包</text>
    </view>
    <!-- 菜单列表 -->
    <view class="menu-list card">
      <view v-for="myMenu in myMenuList">
        <navigator :url="getMenuUrl(myMenu.id)" class="menu-item" :key="myMenu.id">
          <view class=" menu-left">
            <image class="menu-logo" :src="myMenu.imgUrl" mode="aspectFill" />
            <text>{{ myMenu.title }}</text>
          </view>
          <view class="menu-right">
            <text class="right">{{ myMenu.subTitle }}</text>
            <uni-icons type="arrowright" size="22" color="#bbb" class="menu-arrow" />
          </view>
        </navigator>
        <view class="divider"></view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { myTopList, myMenuList } from '@/data/index'
import uniIcons from '@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue'

const getMenuUrl = (id: string) => {
  const routeMap: Record<string, string> = {
    '1': '/pagesMember/travel/travel', // 出行服务
    '2': '/pagesMember/invite/invite', // 邀请好友
    '3': '/pagesMember/message/message', // 消息中心
    '4': '/pagesMember/feedback/feedback', // 产品意见
    '5': '/pagesMember/more/more' // 更多
  }
  return routeMap[id] || ''
}
</script>

<style lang="scss">
.my-center {
  background: #f5f6fa;
  min-height: 100vh;
  padding-bottom: 0;

  .header-bg {
    background: linear-gradient(180deg, #4fc3f7 0%, #81d4fa 100%);
    border-bottom-left-radius: 40rpx;
    border-bottom-right-radius: 40rpx;
    padding-bottom: 30rpx;

    .header {
      padding: 60rpx 0 30rpx 0;
      position: relative;

      .user-info {
        display: flex;
        align-items: center;
        padding-left: 40rpx;

        .avatar {
          width: 110rpx;
          height: 110rpx;
          border-radius: 50%;
          background: #fff;
          margin-right: 24rpx;
          border: 4rpx solid #fff;
          box-shadow: 0 4rpx 16rpx #b3e5fc;
        }

        .user-detail {
          display: flex;
          flex-direction: column;

          .username {
            font-size: 36rpx;
            color: #fff;
            font-weight: bold;
            margin-bottom: 6rpx;
          }

          .account {
            font-size: 24rpx;
            color: #e0f7fa;
          }
        }
      }

      .setting-icon {
        position: absolute;
        top: 80rpx;
        right: 40rpx;
        z-index: 2;
      }
    }
  }

  .card {
    background: #fff;
    border-radius: 24rpx;
    box-shadow: 0 4rpx 24rpx #e0e0e0;
    margin: 0 24rpx 24rpx 24rpx;
  }

  .order-nav {
    display: flex;
    justify-content: space-around;
    margin-top: -40rpx;
    padding: 18rpx 0 8rpx 0;

    .order-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 18rpx 0;

      .icon {
        width: 48rpx;
        height: 48rpx;
        margin-bottom: 8rpx;
      }

      text {
        font-size: 24rpx;
        color: #333;
        font-weight: 500;
      }
    }
  }

  .wealth {
    display: flex;
    align-items: center;
    padding: 24rpx 30rpx;
    font-size: 28rpx;

    .menu-left {
      display: flex;
      align-items: center;
    }

    .menu-logo {
      width: 40rpx;
      height: 40rpx;
      margin-right: 18rpx;
    }

    .wealth-title {
      font-weight: bold;
      color: #333;
    }

    .count {
      color: #f44336;
      margin: 0 18rpx;
      font-weight: 500;
    }

    .get {
      color: #2196f3;
      margin-left: auto;
      font-size: 26rpx;
      font-weight: 500;
      background: #e3f2fd;
      padding: 8rpx 20rpx;
      border-radius: 20rpx;
    }
  }

  .menu-list {
    padding: 0 0;

    .menu-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 32rpx 30rpx;
      font-size: 30rpx;
      color: #333;
      font-weight: 500;
      background: transparent;

      .menu-left {
        display: flex;
        align-items: center;
      }

      .menu-logo {
        width: 40rpx;
        height: 40rpx;
        margin-right: 18rpx;
      }

      .menu-right {
        display: flex;
        align-items: center;
      }

      .right {
        color: #2196f3;
        font-size: 26rpx;
        font-weight: 400;
        margin-right: 8rpx;
      }

      .menu-arrow {
        margin-left: 16rpx;
        cursor: pointer;
      }
    }

    .divider {
      height: 1rpx;
      background: #f0f0f0;
      margin: 0 30rpx;
    }
  }
}
</style>