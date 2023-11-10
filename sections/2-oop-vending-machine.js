class VendingMachine {
  constructor(){
    this.credit = 0;
    this.stock = {A: {}, B: {}, C: {}};
  }

  addCredit(amount){
    this.credit += amount;
  }
}

module.exports = VendingMachine;
