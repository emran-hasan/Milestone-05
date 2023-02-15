document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawTotalString = withdrawField.value;
    const newWithdrawTotal = parseFloat(newWithdrawTotalString);

    withdrawField.value ='';

    if(isNaN(newWithdrawTotal) && newWithdrawTotal !== 'string'){
        alert('Input valid amount!')
        return;
    }

    const totalWithdrawValue = document.getElementById('total-withdraw');
    const previousWithdrawElementString = totalWithdrawValue.innerText;
    const previousWithdrawElement = parseFloat(previousWithdrawElementString);

    

    const previousBalanceTotal = document.getElementById('total-balance');
    const previousTotalBalanceString = previousBalanceTotal.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    if( newWithdrawTotal >previousTotalBalance){
        alert('Tmr baper account e eto tk nai!!!!');
        return;
    }

    const newWithdrawValue = newWithdrawTotal + previousWithdrawElement;
    totalWithdrawValue.innerText = newWithdrawValue;

    const currentBalanceTotal = previousTotalBalance - newWithdrawTotal;
    previousBalanceTotal.innerText = currentBalanceTotal;

    
})