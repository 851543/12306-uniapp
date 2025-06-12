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
      <view class="train-content">
        <!-- 城市选择 -->
        <view class="city-select-box">
          <view class="city-item" @tap="showCityPicker('from')">
            <text class="label">出发城市</text>
            <text class="city-name">{{ fromCity }}</text>
          </view>
          <view class="exchange-btn" @tap="exchangeCity">
            <image src="/static/images/icon/hcp/xz.jpg" mode="scaleToFill" />
          </view>
          <view class="city-item" @tap="showCityPicker('to')">
            <text class="label">到达城市</text>
            <text class="city-name">{{ toCity }}</text>
          </view>
        </view>

        <!-- 日期选择 -->
        <view class="date-select-box" @tap="showDatePicker">
          <text class="label">出发日期</text>
          <text class="date-text">{{ selectedDate.month }}月{{ selectedDate.day }}日</text>
          <text class="weekday-text">{{ selectedDate.weekday }}</text>
          <uni-icons type="calendar" size="16" color="#8f8f94"></uni-icons>
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
          <button class="query-btn" @tap="handleQuery">查询</button>
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

    <!-- 城市选择器 -->
    <AJCityPicker v-model:visible="cityPickerVisible" :type="currentCityType" @select="handleCitySelect" />

    <!-- 日期选择器 -->
    <AJDatePicker v-model:visible="datePickerVisible" :selected-date="selectedDate.date" @select="handleDateSelect" />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AJSwiper from '@/components/AJSwiper.vue'
import { bannerList, trainFooterList, weekDays } from '@/data/index'
import { getCurrentDate } from '@/utils/date'
import { formatDate } from '@/utils/index'

const activeTab = ref('train')

// 城市选择相关数据
const fromCity = ref('哈尔滨')
const toCity = ref('北京')
const cityPickerVisible = ref(false)
const currentCityType = ref<'from' | 'to'>('from')

// 日期选择相关数据
const selectedDate = ref(getCurrentDate())
const datePickerVisible = ref(false)

// 显示城市选择器
const showCityPicker = (type: 'from' | 'to') => {
  currentCityType.value = type
  cityPickerVisible.value = true
}

// 处理城市选择
const handleCitySelect = (city: { code: string; name: string }) => {
  if (currentCityType.value === 'from') {
    fromCity.value = city.name
  } else {
    toCity.value = city.name
  }
}

// 交换城市
const exchangeCity = () => {
  const temp = fromCity.value
  fromCity.value = toCity.value
  toCity.value = temp
}

// 显示日期选择器
const showDatePicker = () => {
  datePickerVisible.value = true
}

// 处理日期选择
const handleDateSelect = (date: Date) => {
  selectedDate.value = {
    date,
    month: date.getMonth() + 1,
    day: date.getDate(),
    weekday: weekDays[date.getDay()]
  }

}

const handleQuery = () => {
  uni.navigateTo({
    url: `/pages/hall/hall?fromCity=${fromCity.value}&toCity=${toCity.value}&date=${formatDate(selectedDate.value.date, 'YYYY-MM-DD')}`
  })
}
</script>

<style lang="scss">
@use './index'
</style>
