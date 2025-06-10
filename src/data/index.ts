import type { Banner, Footer } from '@/types/data'
export const bannerList: Banner[] = [
  {
    id: '1',
    imgUrl: '/static/images/haibao/1.jpg'
  },
  {
    id: '2',
    imgUrl: '/static/images/haibao/2.jpg'
  },
  {
    id: '3',
    imgUrl: '/static/images/haibao/3.jpg'
  }
]

export const trainFooterList: Footer[] = [
  {
    id: '1',
    imgUrl: '/static/images/icon/hcp/jsqp.jpg',
    name: '极速抢票',
    topBoolean: true,
    topImgUrl: '/static/images/icon/hcp/cy.jpg'
  },
  {
    id: '2',
    imgUrl: '/static/images/icon/hcp/zxxz.jpg',
    name: '在线选座',
    topBoolean: false
  },
  {
    id: '3',
    imgUrl: '/static/images/icon/hcp/qshh.jpg',
    name: '抢手好货',
    topBoolean: false
  },
  {
    id: '4',
    imgUrl: '/static/images/icon/hcp/czjd.jpg',
    name: '超值酒店',
    topBoolean: false
  }
]

export const carFooterList: Footer[] = [
  {
    id: '1',
    imgUrl: '/static/images/icon/car/1.jpg',
    name: '火车票',
    topBoolean: true
  },
  {
    id: '2',
    imgUrl: '/static/images/icon/car/2.jpg',
    name: '机场巴士',
    topBoolean: false
  },
  {
    id: '3',
    imgUrl: '/static/images/icon/car/3.jpg',
    name: '景区直达',
    topBoolean: false
  },
  {
    id: '4',
    imgUrl: '/static/images/icon/car/4.jpg',
    name: '船票',
    topBoolean: false
  }
]

export const myTopList: Footer[] = [
  {
    id: '1',
    imgUrl: '/static/images/icon/grzx/hcpdd.jpg',
    name: '火车票',
    topBoolean: true
  },
  {
    id: '2',
    imgUrl: '/static/images/icon/grzx/qpdd.jpg',
    name: '抢票',
    topBoolean: false
  },
  {
    id: '3',
    imgUrl: '/static/images/icon/grzx/jpdd.jpg',
    name: '机票',
    topBoolean: false
  },
  {
    id: '4',
    imgUrl: '/static/images/icon/grzx/qbdd.jpg',
    name: '全部',
    topBoolean: false
  }
]
