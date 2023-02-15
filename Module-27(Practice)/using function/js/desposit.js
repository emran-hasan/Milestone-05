document.getElementById('btn-deposit').addEventListener('click', function(){

  const newInputValueAmount = getInputValueById('deposit-field');
  const newDepositTotalAmount = getElementValueById('total-deposit');

  const currentDepositTotal = newDepositTotalAmount + newInputValueAmount;
  setElementValueById('total-deposit', currentDepositTotal);

  const newBalanceValue = getElementValueById('total-balance');
  newBalanceTotalAmount = newInputValueAmount + newBalanceValue;
  setElementValueById('total-balance', newBalanceTotalAmount);

})