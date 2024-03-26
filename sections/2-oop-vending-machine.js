class VendingMachine {
  constructor(){
    this.credit = 0;
    this.stock = {A: {}, B: {}, C: {}};
  }

  addCredit(amount){
    this.credit += amount;
  }

  creditChecker(price){
    return this.credit >= price ? true : false
  }

  addStock(stock, position, cost, amount) {
    this.stock[position] = {name: stock, price : cost, quantity: amount}
    return this.stock
  }

  purchaseItem(position) {
    const stock = this.stock[position]
    
    if (!this.creditChecker(stock.price)) {
      return 'Insufficient credit!'
  }

    stock.quantity--
    this.credit -= stock.price

    return stock.name
  }
}



module.exports = VendingMachine;
