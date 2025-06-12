<template>
  <view class="city-picker" v-if="visible">
    <view class="mask" @tap="handleClose"></view>
    <view class="content">
      <!-- 搜索框 -->
      <view class="search-box">
        <input 
          type="text" 
          v-model="searchKey" 
          placeholder="请输入城市名称" 
          @input="handleSearch"
        />
      </view>

      <!-- 城市列表 -->
      <scroll-view scroll-y class="city-list">
        <view 
          class="city-item" 
          v-for="city in filteredCityList" 
          :key="city.code"
          @tap="selectCity(city)"
        >
          <text>{{ city.name }}</text>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { cityList } from '@/data/index'

const props = defineProps<{
  visible: boolean
  type: 'from' | 'to'
}>()

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void
  (e: 'select', city: { code: string; name: string }): void
}>()

const searchKey = ref('')

// 过滤城市列表
const filteredCityList = computed(() => {
  if (!searchKey.value) return cityList
  return cityList.filter(city => 
    city.name.includes(searchKey.value)
  )
})

// 选择城市
const selectCity = (city: { code: string; name: string }) => {
  emit('select', city)
  handleClose()
}

// 关闭弹窗
const handleClose = () => {
  emit('update:visible', false)
}

// 搜索处理
const handleSearch = () => {
  // 实时搜索，不需要额外处理
}
</script>

<style lang="scss">
.city-picker {
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
    height: 80vh;
    background-color: #fff;
    border-radius: 20rpx 20rpx 0 0;
    overflow: hidden;
  }
}

.search-box {
  padding: 20rpx;
  background-color: #fff;
  
  input {
    background-color: #f5f5f5;
    height: 72rpx;
    border-radius: 36rpx;
    padding: 0 30rpx;
    font-size: 28rpx;
  }
}

.city-list {
  height: calc(80vh - 112rpx);
  
  .city-item {
    height: 100rpx;
    line-height: 100rpx;
    padding: 0 30rpx;
    background-color: #fff;
    border-bottom: 1rpx solid #eee;
    font-size: 28rpx;
    
    &:active {
      background-color: #f5f5f5;
    }
  }
}
</style> 