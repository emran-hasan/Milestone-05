document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositValueString = depositField.value;
    const newDepositValue = parseFloat(newDepositValueString);
    
    const previousDepositValue = document.getElementById('total-deposit');
    const previousDepositString = previousDepositValue.innerText;
    const previousDeposit = parseFloat(previousDepositString);
    
    const totalDeposit = newDepositValue + previousDeposit;
    previousDepositValue.innerText = totalDeposit;

   const totalBalance = document.getElementById('total-balance');
   const previousTotalBalanceString = totalBalance.innerText;
   const previousTotalBalance = parseFloat(previousTotalBalanceString);

   const presentTotalBalance = totalDeposit + previousTotalBalance;
     totalBalance.innerText = presentTotalBalance;



    depositField.value = '';

})