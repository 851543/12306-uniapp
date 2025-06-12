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
@use './my'
</style>