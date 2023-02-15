document.getElementById('btn-deposit').addEventListener('click', function (){
  const depositField = document.getElementById('deposit-field');
  const previousDepositValueString = depositField.value;
  const previousDepositValue = parseFloat(previousDepositValueString);
  depositField.value = previousDepositValue;
  

  const previousDepositTotal = document.getElementById('total-deposit');
  const previousDepositTotalString = previousDepositTotal.innerText;
  const totalDeposit = parseFloat(previousDepositTotalString);
  previousDepositTotal.innerText = totalDeposit;

  const currentTotalDepositValue = previousDepositValue + totalDeposit;
  previousDepositTotal.innerText = currentTotalDepositValue
  

  const totalBalanceAmount = document.getElementById('total-balance');
  const totalBalanceAmountString = totalBalanceAmount.innerText;
  const totalBalance = parseFloat(totalBalanceAmountString);
  totalBalanceAmount.innerText = totalBalance;

  const currentBalance = totalBalance + previousDepositValue;
  totalBalanceAmount.innerText = currentBalance;

})