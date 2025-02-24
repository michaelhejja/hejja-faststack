import http from "./http-common"

class YardSaleService {
  getAppState() {
    return http.get('/state')
  }

  getAllOrders() {
    return http.get('/orders')
  }

  updateAppState(isActive, canPurchase, showComingSoon, currentProductIndex, currentDiscount) {
    return http.post(`/updateAppState`, {
      isActive: isActive,
      canPurchase: canPurchase,
      showComingSoon: showComingSoon,
      currentProductIndex: currentProductIndex,
      currentDiscount: currentDiscount
    })
  }

  sendMessage(message) {
    return http.post(`/customMessage`, {
      message: message
    })
  }
}

export default new YardSaleService()
