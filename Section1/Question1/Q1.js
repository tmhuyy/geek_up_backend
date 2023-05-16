const caclBalance = function (money, year) {
  let balance = 0;
  for (let i = 1; i <= year; i++) {
    if (i % 2 !== 0) {
      balance += (i === 1 ? money : balance) * 1.2;
    } else if (i % 2 === 0) {
      balance += balance * 1.1;
    } 
  }
  return balance;
};

console.log(caclBalance(100, 2));
console.log(caclBalance(250, 10));
