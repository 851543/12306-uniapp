<template>
  <view class="date-picker" v-if="visible">
    <view class="mask" @tap="handleClose"></view>
    <view class="content">
      <view class="header">
        <text class="title">选择日期</text>
        <text class="close" @tap="handleClose">关闭</text>
      </view>
      
      <scroll-view scroll-y class="date-list" :show-scrollbar="false">
        <view 
          class="date-item" 
          v-for="item in dateList" 
          :key="item.date.getTime()"
          :class="{ active: isSelected(item.date) }"
          @tap="selectDate(item)"
        >
          <text class="month-day">{{ item.month }}月{{ item.day }}日</text>
          <text class="weekday">{{ item.weekday }}</text>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getFutureDates } from '@/utils/date'

const props = defineProps<{
  visible: boolean
  selectedDate: Date
}>()

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void
  (e: 'select', date: Date): void
}>()

const dateList = ref(getFutureDates())

// 判断日期是否被选中
const isSelected = (date: Date) => {
  return date.toDateString() === props.selectedDate.toDateString()
}

// 选择日期
const selectDate = (item: { date: Date }) => {
  emit('select', item.date)
  handleClose()
}

// 关闭弹窗
const handleClose = () => {
  emit('update:visible', false)
}
</script>

<style lang="scss">
.date-picker {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .content {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60vh;
    background-color: #fff;
    border-radius: 20rpx 20rpx 0 0;
    overflow: hidden;
  }
  
  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20rpx 30rpx;
    border-bottom: 1rpx solid #eee;
    
    .title {
      font-size: 32rpx;
      font-weight: bold;
    }
    
    .close {
      font-size: 28rpx;
      color: #666;
      margin-left: auto;
      margin-right: 50rpx;
    }
  }
}

.date-list {
  height: calc(60vh - 100rpx);
  
  .date-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30rpx;
    border-bottom: 1rpx solid #eee;
    
    &.active {
      background-color: #f0f9ff;
      color: #1890ff;
    }
    
    .month-day {
      font-size: 32rpx;
    }
    
    .weekday {
      font-size: 28rpx;
      color: #666;
    }
  }
}
</style> 