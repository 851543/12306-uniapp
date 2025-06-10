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
export type Footer = {
  /** 跳转链接 */
  hrefUrl?: string
  /** id */
  id: string
  /** 图片链接 */
  imgUrl: string
  /** 跳转类型 */
  type?: number
  /** 标题 */
  name: string
  /** 顶部提示是否 */
  topBoolean: boolean
  /** 顶部提示图片链接 */
  topImgUrl?: string
}
