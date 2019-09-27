function run_future() {
var investment = document.getElementById("start").value; investment = parseFloat(investment);
var monthlyAmount = document.getElementById("monthly").value; monthlyAmount = parseFloat(monthlyAmount);
var annualRate = document.getElementById("yearly").value; annualRate = parseFloat(annualRate);
annualRate = annualRate / 100;
var annualAmount = monthlyAmount * 12;
 
var monthlyRate = annualRate / 12;
var years = document.getElementById("term").value; years = parseFloat(years);
var months = years * 12;
months = parseFloat(months);
var future = investment;
var future2 = investment;
for (year = 1; year <= years; year++ ){
future = (annualAmount + future) * (1 + annualRate);
}
for (month = 1; month <= months; month++){
future2 = (monthlyAmount + future2) * (1 + monthlyRate);
}
document.getElementById("futurevalue").value = future; document.getElementById("futuremonthlyvalue").value = future2;
}