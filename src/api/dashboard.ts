import request from '@/utils/request'

// Types
export interface DashboardStats {
  totalUsers: number
  totalOrders: number
  totalRevenue: number
  conversionRate: number
}

export interface SalesTrendItem {
  month: string
  sales: number
  orders: number
}

export interface UserDistributionItem {
  city: string
  value: number
}

export interface ActivityItem {
  id: string
  user: string
  avatar: string
  action: string
  timestamp: string
  type: 'success' | 'info' | 'warning' | 'error'
}

export interface ChartData {
  lineChart: {
    xAxis: string[]
    series: Array<{
      name: string
      data: number[]
    }>
  }
  barChart: {
    xAxis: string[]
    series: Array<{
      name: string
      data: number[]
    }>
  }
  pieChart: {
    data: Array<{
      name: string
      value: number
    }>
  }
  areaChart: {
    xAxis: string[]
    series: Array<{
      name: string
      data: number[]
    }>
  }
}

// API functions
export function getDashboardStats() {
  return request.get<DashboardStats>('/dashboard/stats')
}

export function getSalesTrend() {
  return request.get<SalesTrendItem[]>('/dashboard/sales-trend')
}

export function getUserDistribution() {
  return request.get<UserDistributionItem[]>('/dashboard/user-distribution')
}

export function getRecentActivities() {
  return request.get<ActivityItem[]>('/dashboard/activities')
}

export function getChartData() {
  return request.get<ChartData>('/dashboard/chart-data')
}
