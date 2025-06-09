<script setup lang="ts">
import type { Banner } from '@/types/data'

// 定义 props 接收
defineProps<{
  list: Banner[]
}>()
</script>

<template>
  <view class="carousel">
    <swiper :circular="true" :autoplay="true" :interval="3000">
      <swiper-item v-for="item in list" :key="item.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="scaleToFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
  </view>
</template>

<style lang="scss">
@import './styles/AJSwiper.scss';
</style>
