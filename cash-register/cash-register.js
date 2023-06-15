function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  change += .005
  const ogChange = change;
  let retVal = {
    status: '',
    change: []
  }
  const cashVal = [
    ["ONE HUNDRED", 100], 
    ["TWENTY", 20], 
    ["TEN", 10], 
    ["FIVE", 5], 
    ["ONE", 1], 
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
    ];
    let total = 0;
    for(let j = 0; j < cid.length; j++) {
      total += cid[j][1];
    }
    total += .005;
    total *= 100;
    total = Math.floor(total);
    for (let i = 0; i < cashVal.length; i++){
      let addNum = 0;
      if(cashVal[i][1] < change) {
        while(cid[cid.length - i - 1][1] > 0 && change >= cashVal[i][1]) {
          //console.log(cid[cid.length - i - 1])
          cid[cid.length - i - 1][1] -= cashVal[i][1];
          //console.log(cid[cid.length - i][1])
          change -= cashVal[i][1];
          addNum++;
        }
      }
      if(addNum > 0) {
        let tempy = cashVal[i][1] * addNum
        let temp = [cashVal[i][0], tempy]
        retVal.change.push(temp);
      }
    }

//console.log(total)
//console.log(ogChange * 100)
  if(Math.floor(change * 100) == 0 && total == Math.floor(ogChange * 100)) {
    retVal.status = "CLOSED";
    for(let k = 1; k < cid.length; k++)
    {
      retVal.change.push(cid[k]);
    }
  }
  else if(Math.floor(change * 100) == 0) {
    retVal.status = "OPEN"
  }
  else {
    retVal.status = "INSUFFICIENT_FUNDS"
    retVal.change = [];
  }
  console.log(retVal)
  return retVal;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])