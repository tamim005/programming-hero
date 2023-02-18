let myDays = 15;

let first1To10Days = 500;
let second11To20Days = 300;
let third21ToAnyDays = 100;

if (myDays <= 10) {
  let totalCost = myDays * 500;
  console.log(totalCost);
} else if (myDays <= 20 && myDays > 10) {
  let frist10daysCost = 10 * 500;
  let remainingDys = myDays - 10;
  let totalDaysCost = remainingDys * 300;
  let total11To20DAyscost = frist10daysCost + totalDaysCost;
  console.log(total11To20DAyscost);
} else {
  let first1To10Days = 500 * 10;
  let second11To20Days = 300 * 10;
  let remainingDys = myDays - 20;
  let thirdinifinityDays = remainingDys * 100;
  let totoalAbove20DaysCost =
    first1To10Days + second11To20Days + thirdinifinityDays;
  console.log(totoalAbove20DaysCost);
}