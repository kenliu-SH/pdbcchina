export interface ResponseBody<T> {
  data: T
  code: number
  errorCode: number
  message: string
  requestId: string
  timestamp: number
}

export interface Pagination {
  page: number
  pageSize: number
  order: string
  pageCount?: number
  count?: number
}

export interface HttpStatusConstantInfo {
  zh: string
  en: string
  code: number
  errorCode: number
}

export interface HttpStatusConstant {
  language?: 'zh' | 'en'
  status?: Map<number, HttpStatusConstantInfo>
}

export interface JwtPayload {
  userID: number
  platform: string
}
