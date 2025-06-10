<template>
  <view class="hall">
    <!-- 顶部导航栏 -->
    <view class="header">
      <view class="header-left" @tap="handleBack">
        <uni-icons type="arrow-left" size="22" color="#fff" />
      </view>
      <text class="title">哈尔滨→北京</text>
      <text class="more">···</text>
    </view>

    <!-- 日期选择导航 -->
    <view class="date-nav">
      <text class="prev-day">前一天</text>
      <text class="current-date">02月02日周四</text>
      <text class="next-day">后一天</text>
    </view>

    <!-- 车次列表 -->
    <view class="train-list">
      <!-- 单个车次项示例 -->
      <view class="train-item" v-for="(train, index) in trainList" :key="index">
        <view class="item-header">
          <view class="station-time">
            <text class="station">{{ train.departureStation }}</text>
            <text class="time">{{ train.departureTime }}</text>
          </view>
          <view class="train-info">
            <text class="train-number">{{ train.trainNumber }}</text>
            <text class="duration">{{ train.duration }}</text>
          </view>
          <view class="station-time">
            <text class="station">{{ train.arrivalStation }}</text>
            <text class="time">{{ train.arrivalTime }}</text>
          </view>
          <view class="price-info">
            <text class="price">¥ {{ train.price }}起</text>
            <text class="buy-button">{{ train.ticketStatus }}</text>
          </view>
        </view>
        <view class="seat-info">
          <view class="seat-item" v-for="(seat, sIndex) in train.seatAvailability" :key="sIndex">{{ seat }}</view>
        </view>
      </view>
    </view>

    <!-- 底部筛选条 -->
    <view class="filter-bar">
      <text class="filter-item">筛选</text>
      <text class="filter-item">出发时间</text>
      <text class="filter-item">旅行时间</text>
      <text class="filter-item">显示价格</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// 模拟车次数据
const trainList = ref([
  {
    departureStation: '哈尔滨西',
    departureTime: '06:57',
    trainNumber: 'D28',
    duration: '7小时54分',
    arrivalStation: '北京',
    arrivalTime: '14:51',
    price: '306.5',
    ticketStatus: '可抢票',
    seatAvailability: ['二等座:100张(抢)', '二等座:0张(抢)', '二等座:0张(抢)']
  }
])

const handleBack = ()=>{
  // 返回上一页
  uni.navigateBack()
}
</script>

<style lang="scss">
/* 整个页面容器 */
.hall {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* 确保页面高度至少为视口高度 */
  background-color: #f5f5f5;
  /* 浅灰色背景 */
}

/* 顶部导航栏样式 */
.header {
  position: fixed;
  /* 固定在顶部 */
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  /* 确保在最上层 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30rpx;
  /* 渐变蓝色背景 */
  background-image: linear-gradient(to right, #409eff, #67b0ff);
  color: white;
  font-size: 32rpx;

  .header-left {
    width: 150rpx;
    /* 调整宽度以容纳图标和文本 */
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .back {
    font-size: 28rpx;
    margin-left: 10rpx;
  }

  .title {
    flex: 1;
    text-align: center;
    font-weight: bold;
  }

  .more {
    width: 150rpx;
    /* 调整宽度与header-left对应 */
    text-align: right;
    font-weight: bold;
  }
}

/* 日期导航栏样式 */
.date-nav {
  position: fixed;
  /* 固定在顶部，在header下方 */
  top: 92rpx;
  /* 约等于header的高度 (15px padding * 2 + 16px font-size * 2 = 30 + 32 = 62px, 实际需要根据header实际高度调整) */
  left: 0;
  right: 0;
  z-index: 99;
  /* 略低于header */
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20rpx;
  /* 转换为rpx */
  /* 渐变蓝色背景 */
  background-image: linear-gradient(to right, #409eff, #67b0ff);
  color: white;
  font-size: 28rpx;
  /* 转换为rpx */
}

/* 车次列表容器 */
.train-list {
  flex: 1;
  /* 占据剩余空间 */
  overflow-y: auto;
  padding: 20rpx;
  /* 转换为rpx */
  margin-top: 160rpx;
  /* 留出顶部固定区域的高度 (header 92rpx + date-nav 60rpx (20padding*2+20font=60)) */
  margin-bottom: 88rpx;
  /* 留出底部筛选条的高度 (15px padding * 2 + 14px font-size * 2 = 30 + 28 = 58px, 实际需要根据footer实际高度调整) */
}

/* 单个车次项样式 */
.train-item {
  background-color: white;
  margin-bottom: 20rpx;
  /* 转换为rpx */
  padding: 30rpx;
  /* 转换为rpx */
  border-radius: 16rpx;
  /* 转换为rpx */
  box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);
  /* 转换为rpx */

  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rpx;

    .station-time {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      /* 左对齐 */
      width: 25%;

      /* 分配宽度 */
      .station {
        font-size: 32rpx;
        color: #333;
      }

      .time {
        font-size: 48rpx;
        font-weight: bold;
        color: #333;
      }
    }

    .train-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #666;
      font-size: 28rpx;
      width: 35%;

      /* 调整宽度 */
      .train-number {
        font-weight: bold;
      }

      .duration {
        font-size: 24rpx;
      }
    }

    .price-info {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 40%;

      /* 调整宽度 */
      .price {
        font-size: 40rpx;
        color: #ff5722;
        /* 价格橙色 */
        font-weight: bold;
      }

      .buy-button {
        background-color: #ff5722;
        color: white;
        padding: 10rpx 20rpx;
        border-radius: 8rpx;
        font-size: 24rpx;
        margin-top: 10rpx;
      }
    }
  }

  .seat-info {
    display: flex;
    justify-content: flex-start;
    /* 左对齐 */
    flex-wrap: wrap;
    /* 允许换行 */
    font-size: 24rpx;
    color: #666;

    .seat-item {
      padding: 5rpx 10rpx;
      margin-right: 20rpx;
      /* 增加间距 */
    }
  }
}

/* 底部筛选条样式 */
.filter-bar {
  position: fixed;
  /* 固定在底部 */
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  /* 确保在最上层 */
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30rpx 0;
  /* 转换为rpx */
  background-color: white;
  border-top: 2rpx solid #eee;

  /* 转换为rpx */
  .filter-item {
    font-size: 28rpx;
    /* 转换为rpx */
    color: #333;
    position: relative;
    /* Add this for pseudo-element positioning */
  }

  /* 在项目之间添加竖线分隔符 */
  .filter-item:not(:first-child) {
    padding-left: 40rpx;
    /* 转换为rpx */
  }

  .filter-item:not(:first-child)::before {
    /* ADD THIS BLOCK */
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 2rpx;
    height: 50rpx;
    /* Adjust height as needed */
    background-color: #ccc;
  }
}
</style>