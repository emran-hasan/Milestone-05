function getElementByIdValue(elementId){
    const newPhoneTotalElement = document.getElementById(elementId);
    const newPhoneTotalElementString = newPhoneTotalElement.innerText;
    const currentTotalPrice = parseInt(newPhoneTotalElementString);
    return currentTotalPrice;
}
function setSubTotalAmountValueById(elementId,value){
    
     const currentSubTotal = document.getElementById(elementId);
     currentSubTotal.innerText = value;
}

function calculateSubTotal(){
     // calculate total 
     const currentPhoneTotal = getElementByIdValue('phone-total');
     const currentCaseTotal = getElementByIdValue('case-total');
 

     const currentSubTotalAmount = currentPhoneTotal + currentCaseTotal;
     setSubTotalAmountValueById('sub-total', currentSubTotalAmount)

    //  calculate tax 
    const taxAmountString = (currentSubTotalAmount * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setSubTotalAmountValueById('tax-total',taxAmount )

    // final total 
    const finalAmount = currentSubTotalAmount + taxAmount;
    setSubTotalAmountValueById('Total-amount', finalAmount);
    
}