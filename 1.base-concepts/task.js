"use strict";
function solveEquation(a, b, c) {
  let arr;
  let D = b * b - 4 * a * c;
  if(D < 0){
    arr = [];
  }
    else if(D == 0){
      arr = [] 
       arr.push(-b/(2*a));
    } else if (D > 0){
      arr = []
        arr.push((-b + Math.sqrt(D)) / (2 * a));
        arr.push((-b - Math.sqrt(D)) / (2 * a));
    }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let precentInAge


    if(isNaN(percent)){
        return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
      } else (precentInAge = percent / 100 / 12);
    
    if (isNaN(contribution)) {
        return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
      };
  
    if (isNaN(amount)) {
        return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
      };


  // Расчет тела кредита

  let loanBody = amount - contribution ;

  // Расчет срока кредита

  let endDate = new Date(date);
  let today = new Date();

  let monthEndDate = endDate.getMonth() - today.getMonth() + (12 * (endDate.getFullYear() - today.getFullYear()))
  
  console.log(monthEndDate);

  // Ежемесячный платеж

let monthlyPayment = loanBody * (precentInAge + (precentInAge / (((1 + precentInAge)**monthEndDate) - 1)));

// Общая сумма выплат

let totalPayment = monthEndDate * monthlyPayment;
totalAmount = totalPayment.toFixed(2);

  return parseFloat(totalAmount);
}

calculateTotalMortgage();