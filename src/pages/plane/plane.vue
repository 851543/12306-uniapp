<template>
  <view class="container">
    <!-- 顶部横幅广告 -->
    <view class="header">
      <image mode="scaleToFill" class="image" src="/static/images/haibao/2.jpg" />
    </view>

    <!-- Content模块：单程/往返切换内容 -->
    <view class="content">
      <!-- 单程/往返 Tab切换 -->
      <view class="tab-container">
        <view class="tab-item" :class="{ active: tripType === 'single' }" @tap="tripType = 'single'">
          <text>单程</text>
        </view>
        <view class="tab-item" :class="{ active: tripType === 'round' }" @tap="tripType = 'round'">
          <text>往返</text>
        </view>
      </view>

      <!-- 查询内容 -->
      <view class="content-box">
        <!-- 城市选择 -->
        <view class="city-select-box">
          <view class="city-item">
            <text class="city-name">佳木斯</text>
          </view>
          <view class="exchange-btn">
            <image src="/static/images/icon/hcp/xz.jpg" mode="scaleToFill" />
          </view>
          <view class="city-item">
            <text class="city-name">北京</text>
          </view>
        </view>

        <!-- 日期选择 -->
        <view class="date-select-box">
          <text class="label">出发日期</text>
          <text class="date-text">1月24日</text>
          <text class="weekday-text">星期二</text>
        </view>

        <!-- 查询按钮 -->
        <view class="query-btn-box">
          <button class="query-btn">查询</button>
        </view>

        <!-- 历史记录 -->
        <view class="history-box">
          <text class="history-item">佳木斯 → 北京</text>
          <text class="history-item">北京 → 佳木斯</text>
          <text class="clear-history">清除历史</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const tripType = ref('single')
</script>

<style lang="scss">
@use './plane'
</style>
