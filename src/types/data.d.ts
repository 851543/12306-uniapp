/** 首页-广告区域数据类型 */
export type Banner = {
  /** 跳转链接 */
  hrefUrl?: string
  /** id */
  id: string
  /** 图片链接 */
  imgUrl: string
  /** 跳转类型 */
  type?: number
}

/** 火车票Footer区域数据类型 */
export type Menu = {
  /** 跳转链接 */
  hrefUrl?: string
  /** id */
  id: string
  /** 图片链接 */
  imgUrl: string
  /** 跳转类型 */
  type?: number
  /** 标题 */
  title: string
  /** 副标题 */
  subTitle?: string
  /** 顶部提示图片链接 */
  topImgUrl?: string
}

/** 查询火车票参数 */
export type searchType = {
  searchDataType: number
  searchType: number
  searchTrainConditions: Array[searchObject]
}

/** 查询火车票实体参数 */
export type searchObject = {
  departStation: string
  arriveStation: string
  departDate: string
}

/** 学生和儿童票价信息 */
export type StudentOrChildPriceInfo = {
  /** 儿童票价 */
  priceForChild: number
  /** 学生票价 */
  priceForStudent: number
}

/** 座位信息 */
export type SeatInfo = {
  /** 预订费用 */
  bookingFee: number
  /** 折扣率 */
  discountRate: number
  /** 是否可候补 */
  houBuAble: boolean
  /** 是否可静音 */
  isCanSilent: boolean
  /** 其他座位信息列表 */
  otherSeatInfoList: any[]
  /** 预填充预订标志 */
  preFillReserveFlag: number
  /** 票价 */
  price: number
  /** 是否可预订 */
  seatBookable: boolean
  /** 座位代码 */
  seatCode: string
  /** 座位名称 */
  seatName: string
  /** 预订座位名称 */
  seatNameForBooking: string
  /** 学生预订标志 */
  stuReserveFlag: number
  /** 学生和儿童票价信息 */
  studentOrChildPriceInfo: StudentOrChildPriceInfo
  /** 剩余票数 */
  ticketLeft: number
  /** 剩余票数描述 */
  ticketLeftDesc: string
  /** 工作预订标志 */
  workReserveFlag: number
}

/** 火车票实体对象 */
export type TrainTicket = {
  /** 到达时间 */
  arriveTime: string
  /** 到达时间 */
  beiJingArriveTime: string
  /** 出发时间 */
  beiJingStartTime: string
  /** 是否可网上购买 */
  canWebBuy: boolean
  /** 控制天数 */
  controlDay: number
  /** 国家标识 */
  countryFlag: string
  /** 天数差 */
  dayDiff: number
  /** 行程时长描述 */
  durationDesc: string
  /** 行程时长(分钟) */
  durationMinutes: number
  /** 出发站名称 */
  fromStationName: string
  /** 出发站类型 */
  fromStationType: number
  /** 出发站电话区号 */
  fromTelCode: string
  /** 信息 */
  info: string
  /** 是否调整路线 */
  isAdjustRoute: boolean
  /** 是否可预订 */
  isBookable: boolean
  /** 是否可选择卧铺 */
  isChooseBed: boolean
  /** 是否跨境列车 */
  isCrossBorderTrain: boolean
  /** 是否换乘列车 */
  isExchangeTrain: boolean
  /** 是否复兴号 */
  isFuXingTrain: boolean
  /** 是否候补列车 */
  isHouBuTrain: boolean
  /** 是否智能列车 */
  isIntelligent: boolean
  /** 是否预约列车 */
  isReservationTrain: boolean
  /** 是否停售 */
  isSaleStop: boolean
  /** 是否静音 */
  isSilent: boolean
  /** 是否支持卡 */
  isSupportCard: boolean
  /** 是否双座 */
  isTwoSeat: boolean
  /** 本地到达时间 */
  localArriveTime: string
  /** 本地出发时间 */
  localStartTime: string
  /** 开售时间 */
  saleTime: string
  /** 座位信息 */
  seats: SeatInfo[]
  /** 出发时间 */
  startTime: string
  /** 到达站名称 */
  toStationName: string
  /** 到达站类型 */
  toStationType: number
  /** 到达站电话区号 */
  toTelCode: string
  /** 12306列车编号 */
  train12306No: string
  /** 列车编号 */
  trainNo: string
}
