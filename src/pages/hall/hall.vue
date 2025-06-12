<template>
  <view class="hall">
    <!-- 顶部导航栏 -->
    <view class="header">
      <view class="header-left" @tap="handleBack">
        <uni-icons type="arrow-left" size="22" color="#fff" />
      </view>
      <text class="title">{{fromCity}}→{{toCity}}</text>
      <text class="more">···</text>
    </view>

    <!-- 日期选择导航 -->
    <view class="date-nav">
      <text class="prev-day" @tap="handlePrevDay">前一天</text>
      <text class="current-date">{{ displayDate() }}</text>
      <text class="next-day" @tap="handleNextDay">后一天</text>
    </view>

    <!-- 车次列表 -->
    <view class="train-list">
      <!-- 单个车次项示例 -->
      <view class="train-item" v-for="(train, index) in trainList" :key="index">
        <view class="item-header">
          <view class="station-time">
            <text class="station">{{ train.fromStationName }}</text>
            <text class="time">{{ train.startTime }}</text>
          </view>
          <view class="train-info">
            <text class="train-number">{{ train.trainNo }}</text>
            <text class="duration">{{ train.durationDesc }}</text>
          </view>
          <view class="station-time">
            <text class="station">{{ train.toStationName }}</text>
            <text class="time">{{ train.arriveTime }}</text>
          </view>
          <view class="price-info">
            <text class="price">¥ {{ train.seats[0]?.price || '--' }}起</text>
            <text class="buy-button" :class="{'sold-out': !train.canWebBuy}">{{ train.canWebBuy ? '可预订' : '已售罄' }}</text>
          </view>
        </view>
        <view class="seat-info">
          <view class="seat-item" v-for="(seat, sIndex) in train.seats" :key="sIndex">
            <view class="seat-type">{{ seat.seatName }}</view>
            <view class="seat-detail">
              <text class="seat-price">¥{{ seat.price }}</text>
              <text class="seat-count" :class="{'sold-out': seat.ticketLeft === 0}">
                {{ seat.ticketLeft > 0 ? seat.ticketLeft + '张' : '无票' }}
              </text>
              <view class="seat-discount" v-if="seat.discountRate < 1">
                {{ (seat.discountRate * 10).toFixed(1) }}折
              </view>
            </view>
          </view>
        </view>
        <view class="train-tags" v-if="train.isFuXingTrain || train.isHouBuTrain">
          <text class="tag" v-if="train.isFuXingTrain">复兴号</text>
          <text class="tag" v-if="train.isHouBuTrain">候补</text>
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
import { ref, watch } from 'vue';
import DataService from '@/service/dataApi';
import { onLoad } from '@dcloudio/uni-app';
import type { TrainTicket } from '@/types/data'
import { formatDate } from '@/utils/index'

// 页面参数
const query = defineProps<{
  fromCity?: string
  toCity?: string
  date?: string
}>()

// 当前日期
const currentDate = ref(query.date ? new Date(query.date) : new Date())

// 模拟车次数据
const trainList = ref<TrainTicket[]>([])

const getCarTicketList = async () => {
  const res = await DataService.getCarTicketList({
    "searchDataType": 1,
    "searchType": 0,
    "searchTrainConditions": [
      {
        "departStation": query.fromCity,
        "arriveStation": query.toCity,
        "departDate": formatDate(currentDate.value, 'YYYY-MM-DD')
      }
    ]
  })
  if (res.resultCode === 1) {
    trainList.value = res.trainStationInfoList
  }
}

const handleBack = () => {
  // 返回上一页
  uni.navigateBack()
}

// 切换日期
const handlePrevDay = () => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const prevDate = new Date(currentDate.value.getTime() - 24 * 60 * 60 * 1000)
  prevDate.setHours(0, 0, 0, 0)
  
  if (prevDate < today) {
    uni.showToast({
      title: '不能选择今天之前的日期',
      icon: 'none'
    })
    return
  }
  currentDate.value = prevDate
}
const handleNextDay = () => {
  currentDate.value = new Date(currentDate.value.getTime() + 24 * 60 * 60 * 1000)
}

// 监听日期变化，刷新车次
watch(currentDate, () => {
  getCarTicketList()
})

onLoad(() => {
  getCarTicketList()
})

// 格式化日期显示
const weekDays = ['周日','周一','周二','周三','周四','周五','周六']
const displayDate = () => {
  const m = currentDate.value.getMonth() + 1
  const d = currentDate.value.getDate()
  const w = weekDays[currentDate.value.getDay()]
  return `${m.toString().padStart(2, '0')}月${d.toString().padStart(2, '0')}日${w}`
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

        &.sold-out {
          background-color: #999;
        }
      }
    }
  }

  .seat-info {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 24rpx;
    color: #666;
    margin-top: 20rpx;
    border-top: 1rpx solid #eee;
    padding-top: 20rpx;

    .seat-item {
      width: 33.33%;
      padding: 10rpx;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;

      .seat-type {
        font-size: 26rpx;
        color: #333;
        margin-bottom: 8rpx;
      }

      .seat-detail {
        display: flex;
        flex-direction: column;
        align-items: center;

        .seat-price {
          color: #ff5722;
          font-weight: bold;
          font-size: 28rpx;
          margin-bottom: 10rpx;
        }

        .seat-count {
          font-size: 24rpx;
          color: #4CAF50;
          margin-bottom: 8rpx;
          &.sold-out {
            color: #999;
          }
        }

        .seat-discount {
          font-size: 22rpx;
          color: #ff5722;
          background: #fff3e0;
          padding: 2rpx 8rpx;
          border-radius: 4rpx;
          margin-top: 6rpx;
        }
      }
    }
  }

  .train-tags {
    display: flex;
    gap: 10rpx;
    margin-top: 20rpx;
    padding-top: 20rpx;
    border-top: 1rpx solid #eee;

    .tag {
      font-size: 22rpx;
      padding: 4rpx 12rpx;
      border-radius: 4rpx;
      background-color: #e8f5e9;
      color: #4CAF50;
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