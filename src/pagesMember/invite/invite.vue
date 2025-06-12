<template>
  <view class="container">
    <!-- 导航栏 -->
    <view class="nav-bar">
      <view class="nav-left" @click="goBack">
        <uni-icons type="back" size="23" color="#fff" />
        <text>返回</text>
      </view>
      <view class="nav-title">抢票</view>
      <view class="nav-right">
        <uni-icons type="more-filled" size="28" color="#fff" />
      </view>
    </view>

    <!-- 页面内容区域 -->
    <view class="content">
      <!-- 顶部通知 -->
      <!-- <view class="notification">
        <image src="/static/strategy_icon.png" class="strategy-icon"></image>
        <text class="notification-text">抢票成功后以电话或短信通知，收到后请及时支付！</text>
        <text class="icon-arrow-right">></text>
      </view> -->

      <!-- 票务列表 -->
      <view class="ticket-list">
        <!-- 票务项示例 -->
        <view class="ticket-item">
          <view class="ticket-info">
            <text class="route">哈尔滨→北京</text>
            <text class="date">02月03日</text>
            <text class="status cancelled">已取消</text>
          </view>
          <view class="ticket-action view-btn">查看</view>
        </view>
        <view class="ticket-item">
          <view class="ticket-info">
            <text class="route">北京→佳木斯</text>
            <text class="date">02月07日</text>
            <text class="status cancelled">已取消</text>
          </view>
          <view class="ticket-action view-btn">查看</view>
        </view>
        <view class="ticket-item">
          <view class="ticket-info">
            <text class="route">北京→南京</text>
            <text class="date">02月06日</text>
            <text class="status">已取消</text>
          </view>
          <view class="ticket-action start-btn">开始</view>
        </view>
        <view class="ticket-item">
          <view class="ticket-info">
            <text class="route">合肥→北京</text>
            <text class="date">02月07日</text>
            <text class="status terminated">抢票终止</text>
          </view>
          <view class="ticket-action start-btn">开始</view>
        </view>
      </view>
    </view>

    <!-- 底部加速区域 -->
    <view class="footer-accelerate">
      <image src="/static/logo.png" class="accelerate-icon"></image>
      <view class="accelerate-content">
        <text class="accelerate-title">分享赢加速包</text>
        <view class="accelerate-description">分享给好友，可随机赢取最多10个加速包</view>
      </view>
      <uni-icons type="right" size="28" color="#999" class="icon-arrow-right" />
    </view>
  </view>
</template>

<script lang="ts" setup>
const goBack = () => {
  uni.navigateBack();
};
</script>

<style lang="scss">
@use './invite'
</style>