import AJSwiper from '@/components/AJSwiper.vue'
import AJCityPicker from '@/components/AJCityPicker.vue'
import AJDatePicker from '@/components/AJDatePicker.vue'

declare module 'vue' {
  export interface GlobalComponents {
    AJSwiper: typeof AJSwiper
    AJCityPicker: typeof AJCityPicker
    AJDatePicker: typeof AJDatePicker
  }
}

// 组件实例类型
export type AJSwiperInstance = InstanceType<typeof AJSwiper>
export type AJCityPickerInstance = InstanceType<typeof AJCityPicker>
export type AJDatePickerInstance = InstanceType<typeof AJDatePicker>
