document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldString = withdrawField.value;
    const newWithdrawField = parseFloat(newWithdrawFieldString);
    withdrawField.value = newWithdrawField;

   withdrawField.value = '';
    
    const previousBalanceTotal = document.getElementById('total-balance');
    const previousBalanceTotalString = previousBalanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceTotalString);
    previousBalanceTotal.innerText = newBalanceTotal;
    
    if (newWithdrawField > newBalanceTotal){
        alert('Tmr Baper Account e Taka Nai!!!');
        return;
    }
    const previousWithdrawTotal = document.getElementById('total-withdraw');
    const previousWithdrawTotalString = previousWithdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(previousWithdrawTotalString);
    previousWithdrawTotal.innerText = newWithdrawTotal;
    
    const currentBalanceAmount = newBalanceTotal - newWithdrawField;
    previousBalanceTotal.innerText = currentBalanceAmount;
    
    
    const newWithdrawAmount = newWithdrawField + newWithdrawTotal;
    previousWithdrawTotal.innerText = newWithdrawAmount;
})