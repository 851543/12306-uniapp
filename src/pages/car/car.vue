<template>
  <view class="container">
    <!-- 顶部横幅广告 -->
    <view class="header">
      <image mode="scaleToFill" class="image" src="/static/images/haibao/1.jpg" />
    </view>

    <!-- Content模块：单程/往返切换内容 -->
    <view class="content">
      <!-- 单程/往返 Tab切换 -->
      <view class="tab-container">
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

    <view class="footer-menu">
      <view class="menu-item" v-for="footer in carFooterList" :key="footer.id">
        <image class="menu-icon" :src="footer.imgUrl" />
        <text class="menu-text">{{ footer.name }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { carFooterList } from '@/data/index'
</script>

<style lang="scss">
.container {
  background: #f7f7f7;
  min-height: 100vh;
}

.header {
  width: 100vw;
  height: 150px;

  .image {
    width: 100vw;
    height: 150px;
    display: block;
  }
}

.content {
  .tab-container {
    display: flex;
    background: #fff;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    margin: 0 16px;
    margin-top: -20px;
    box-shadow: 0 2px 8px #eee;

    .tab-item {
      flex: 1;
      text-align: center;
      padding: 14px 0;
      font-size: 16px;
      color: #888;
      background: #f5f5f5;

      &.active {
        color: #1890ff;
        background: #fff;
        font-weight: bold;
      }
    }
  }

  .content-box {
    background: #fff;
    margin: 0 16px;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 2px 8px #eee;
    padding: 20px 0 10px 0;

    .city-select-box {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 18px;

      .city-item {
        flex: 1;
        text-align: center;

        .city-name {
          font-size: 20px;
          font-weight: bold;
          color: #222;
        }
      }

      .exchange-btn {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        image {
          width: 50px;
          height: 50px;
        }
      }
    }

    .date-select-box {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 18px;

      .label {
        font-size: 15px;
        color: #888;
        margin-right: 8px;
      }

      .date-text {
        font-size: 18px;
        color: #222;
        margin-right: 8px;
      }

      .weekday-text {
        font-size: 15px;
        color: #1890ff;
      }
    }

    .query-btn-box {
      display: flex;
      justify-content: center;
      margin-bottom: 18px;

      .query-btn {
        width: 90vw;
        max-width: 340px;
        background: #1890ff;
        color: #fff;
        font-size: 18px;
        border-radius: 8px;
        padding: 12px 0;
        font-weight: bold;
      }
    }

    .history-box {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 18px;

      .history-item {
        color: #888;
        font-size: 14px;
        background: #f5f5f5;
        border-radius: 4px;
        padding: 4px 10px;
      }

      .clear-history {
        color: #1890ff;
        font-size: 14px;
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
}

.footer-menu {
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30rpx 20rpx;
  padding: 10px;

  .menu-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    .bubble-img {
      position: absolute;
      top: -28rpx;
      left: 80%;
      transform: translateX(-50%);
      z-index: 3;
      width: 60rpx;
      height: 32rpx;
      display: flex;
      align-items: center;
      justify-content: center;

      image {
        width: 100%;
        height: 100%;
        display: block;
      }
    }

    .menu-icon {
      width: 80rpx;
      height: 80rpx;
      border-radius: 50%;
      background: #f5f5f5;
      margin-bottom: 10rpx;
      margin-top: 10rpx;
    }

    .menu-text {
      font-size: 26rpx;
      color: #666;
      margin-top: 6rpx;
    }
  }
}
</style>
