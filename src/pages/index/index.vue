<template>
  <view class="container">
    <!-- Header模块：轮播图 -->
    <view class="header">
      <AJSwiper :list="bannerList" />
    </view>

    <!-- Content模块：火车票/飞机票切换内容 -->
    <view class="content">
      <!-- Tab切换 -->
      <view class="tab-container">
        <view class="tab-item" :class="{ active: activeTab === 'train' }" @tap="activeTab = 'train'">
          <text>火车票</text>
        </view>
        <view class="tab-item" :class="{ active: activeTab === 'flight' }" @tap="activeTab = 'flight'">
          <text>飞机票</text>
        </view>
      </view>

      <!-- 火车票内容 -->
      <view v-if="activeTab === 'train'" class="train-content">
        <!-- 城市选择 -->
        <view class="city-select-box">
          <view class="city-item">
            <text class="label">出发城市</text>
            <text class="city-name">哈尔滨</text>
          </view>
          <view class="exchange-btn">
            <image src="/static/images/icon/hcp/xz.jpg" mode="scaleToFill" />
          </view>
          <view class="city-item">
            <text class="label">到达城市</text>
            <text class="city-name">北京</text>
          </view>
        </view>

        <!-- 日期选择 -->
        <view class="date-select-box">
          <text class="label">出发日期</text>
          <text class="date-text">2月2日</text>
          <text class="weekday-text">周四</text>
          <uni-icons size="16" color="#8f8f94"></uni-icons>
        </view>

        <!-- 高铁/动车 & 学生票 -->
        <view class="options-box">
          <view class="option-item">
            <text class="option-label">高铁动车</text>
            <switch checked color="#1890ff" style="transform:scale(0.7)" />
          </view>
          <view class="option-item">
            <text class="option-label">学生票</text>
            <switch checked color="#1890ff" style="transform:scale(0.7)" />
          </view>
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

      <!-- 飞机票内容 -->
      <view v-else class="flight-content">
        <!-- 城市选择 -->
        <view class="city-select-box">
          <view class="city-item">
            <text class="label">出发城市</text>
            <text class="city-name">哈尔滨</text>
          </view>
          <view class="exchange-btn">
            <image src="/static/images/icon/hcp/xz.jpg" mode="scaleToFill" />
          </view>
          <view class="city-item">
            <text class="label">到达城市</text>
            <text class="city-name">北京</text>
          </view>
        </view>

        <!-- 日期选择 -->
        <view class="date-select-box">
          <text class="label">出发日期</text>
          <text class="date-text">2月2日</text>
          <text class="weekday-text">周四</text>
          <uni-icons size="16" color="#8f8f94"></uni-icons>
        </view>

        <!-- 高铁/动车 & 学生票 -->
        <view class="options-box">
          <view class="option-item">
            <text class="option-label">高铁动车</text>
            <switch checked color="#1890ff" style="transform:scale(0.7)" />
          </view>
          <view class="option-item">
            <text class="option-label">学生票</text>
            <switch checked color="#1890ff" style="transform:scale(0.7)" />
          </view>
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

    <view class="footer-menu">
      <view class="menu-item" v-for="footer in trainFooterList" :key="footer.id">
        <view v-if="footer.topImgUrl" class="bubble-img">
          <image :src="footer.topImgUrl" mode="scaleToFill" />
        </view>
        <image class="menu-icon" :src="footer.imgUrl" />
        <text class="menu-text">{{ footer.title }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AJSwiper from '@/components/AJSwiper.vue'
import { bannerList, trainFooterList } from '@/data/index'
const activeTab = ref('train')
</script>

<style lang="scss">
@use './index'
</style>
