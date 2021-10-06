const notEnoughAsset = () => {
    return {
      success: false,
      msg: "자산이 충분하지 않음을 알려주는 메세지."
    }
  }
  
  const notEnoughCoin = () => {
    return {
      success: false,
      msg: "코인이 충분하지 않음을 알려주는 메세지."
    }
  }
  const addOrder = () => {
    return {
      success: true,
      msg: "주문이 완료되었음을 알리는 메세지."
    }
  }
  const transaction = () => {
    return {
      success: true,
      msg: "일부 혹은 전체 주문이 체결 됨을 알려주는 메세지."
    }
  }
  
  const errorMessage = (error) => {
    return {
      success: false,
      msg: "관리자에게 문의해주세요\n" + error.sqlMessage
    }
  }
  
  module.exports = {
    notEnoughAsset,
    notEnoughCoin,
    addOrder,
    transaction,
    errorMessage,
  }