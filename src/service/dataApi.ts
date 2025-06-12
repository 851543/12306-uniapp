import { http } from '@/utils/http'
import type { searchType, TrainTicket } from '@/types/data'

/**
 * 汽车票查询
 */
class DataService {
  // 汽车票查询
  static getCarTicketList(data: searchType) {
    return http<Array<TrainTicket>>({
      url: '',
      method: 'POST',
      data
    })
  }
}

export default DataService
