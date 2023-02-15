document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    const withdrawFieldAmount = getInputValueById('withdraw-field');
    const newWithdrawValue = getElementValueById('total-withdraw');
    const newBalanceAfterWithdraw = getElementValueById('total-balance');
    
    if(newBalanceAfterWithdraw >= withdrawFieldAmount){
        const balanceTotal = newBalanceAfterWithdraw - withdrawFieldAmount;
        const currentWithdraw = withdrawFieldAmount + newWithdrawValue;
        setElementValueById('total-balance', balanceTotal);
        setElementValueById('total-withdraw', currentWithdraw);
        
    }else{
        alert('Your account has not sufficient balance!!');
    }
    
})