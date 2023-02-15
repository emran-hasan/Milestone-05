function updatePhonePrice(isDecrease){

    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const phoneNumber = parseInt(phoneNumberString);

    let newPhonePrice;
    if(isDecrease){
        newPhonePrice = phoneNumber + 1;
    }else{
        newPhonePrice = phoneNumber - 1;
    }
    phoneNumberField.value =newPhonePrice;
    return newPhonePrice;
}

function updateTotalPrice(newPhonePrice){

    const phoneTotalPrice = newPhonePrice * 2031;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function (){
    const newPhonePrice =  updatePhonePrice(true);
    updateTotalPrice(newPhonePrice);
    calculateSubTotal();  
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
  const newPhonePrice = updatePhonePrice(false);
  updateTotalPrice(newPhonePrice);
  calculateSubTotal();
  
})