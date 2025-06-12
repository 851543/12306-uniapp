import { weekDays } from '@/data/index'

// 获取当前日期
export const getCurrentDate = () => {
  const date = new Date()
  return {
    date,
    month: date.getMonth() + 1,
    day: date.getDate(),
    weekday: weekDays[date.getDay()]
  }
}

// 获取未来30天的日期列表
export const getFutureDates = () => {
  const dates = []
  const today = new Date()
  
  for (let i = 0; i < 30; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    dates.push({
      date,
      month: date.getMonth() + 1,
      day: date.getDate(),
      weekday: weekDays[date.getDay()]
    })
  }
  
  return dates
} 