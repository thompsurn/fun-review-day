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
}

module.exports = VendingMachine;
