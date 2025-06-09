<template>
  <view class="container">
    <!-- Header模块：轮播图 -->
    <view class="header">
      <AJSwiper :list="bannerList"/>
    </view>

    <!-- Content模块：火车票/飞机票切换内容 -->
    <view class="content">
      <!-- Tab切换 -->
      <view class="tab-container">
        <view class="tab-item" :class="{ active: activeTab === 'train' }" @tap="switchTab('train')">
          <text>火车票</text>
        </view>
        <view class="tab-item" :class="{ active: activeTab === 'flight' }" @tap="switchTab('flight')">
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
            <image
              src="/static/images/icon/hcp/xz.jpg"
              mode="scaleToFill"
            />
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
          <uni-icons type="arrowright" size="16" color="#8f8f94"></uni-icons>
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
        <!-- 这里可以添加飞机票相关的内容 -->
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AJSwiper from '@/components/AJSwiper.vue'
import { bannerList } from '@/data/index'

const activeTab = ref('train')

const switchTab = (tab: string) => {
  activeTab.value = tab
}


</script>

<style lang="scss">
.container {
  padding: 0;
  background-color: #f0f0f0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

// Header样式
.header {
  position: relative;
  width: 100%;
  height: 300rpx;

  .banner-swiper {
    width: 100%;
    height: 100%;
  }

  .banner-image {
    width: 100%;
    height: 100%;
  }

  .notification-icon {
    position: absolute;
    top: 60rpx;
    right: 30rpx;
    padding: 10rpx;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    z-index: 10;
  }
}

// Content样式
.content {
  flex: 1;
  padding: 20rpx;
  background-color: #fff;
  margin-top: -60rpx;
  position: relative;
  z-index: 2;

  .tab-container {
    display: flex;
    justify-content: center;
    margin-bottom: 30rpx;

    .tab-item {
      padding: 20rpx 40rpx;
      font-size: 32rpx;
      position: relative;

      &.active {
        color: #1890ff;
        font-weight: bold;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 40rpx;
          height: 4rpx;
          background-color: #1890ff;
          border-radius: 2rpx;
        }
      }
    }
  }
}

.city-select-box,
.date-select-box,
.options-box,
.query-btn-box,
.history-box {
  background-color: #fff;
  border-radius: 10rpx;
  margin: 0 20rpx 20rpx 20rpx;
  /* 调整外边距 */
  padding: 20rpx;
  box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.05);
}

.city-select-box {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 40rpx 20rpx;

  .city-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    .label {
      font-size: 28rpx;
      /* 增大字体 */
      color: #999;
      margin-bottom: 10rpx;
    }

    .city-name {
      font-size: 60rpx;
      /* 增大字体 */
      font-weight: bold;
      color: #333;
    }
  }

  .exchange-btn {
    margin: 0 30rpx;
    /* 调整间距 */

    image{
      height: 100rpx;
      width: 100rpx;
    }
  }
}

.date-select-box {
  display: flex;
  align-items: center;
  padding: 30rpx 20rpx;

  .label {
    font-size: 28rpx;
    color: #93a0a3;
    /* 调整颜色 */
    margin-right: 20rpx;
  }

  .date-text {
    font-size: 36rpx;
    font-weight: bold;
    color: #333;
    flex-grow: 1;
  }

  .weekday-text {
    font-size: 28rpx;
    color: #1890ff;
    margin-right: 10rpx;
  }
}

.options-box {
  display: flex;
  justify-content: flex-start;
  /* 左对齐 */
  padding: 20rpx;
  gap: 60rpx;
  /* 增加间距 */

  .option-item {
    display: flex;
    align-items: center;

    .option-label {
      font-size: 28rpx;
      color: #333;
      margin-right: 20rpx;
      /* 调整间距 */
    }
  }
}

.query-btn-box {
  padding: 20rpx 20rpx;

  .query-btn {
    background-color: #1890ff;
    color: #fff;
    font-size: 36rpx;
    height: 90rpx;
    line-height: 90rpx;
    border-radius: 45rpx;
  }
}

.history-box {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20rpx;
  padding: 20rpx;

  .history-item {
    background-color: #f0f0f0;
    padding: 10rpx 20rpx;
    border-radius: 30rpx;
    font-size: 24rpx;
    color: #666;
  }

  .clear-history {
    color: #1890ff;
    font-size: 24rpx;
    margin-left: auto;
    padding: 10rpx 20rpx;
  }
}
</style>
