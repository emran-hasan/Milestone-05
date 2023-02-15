
function updatePhonePrice(inputValue){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const phoneNumber = parseInt(phoneNumberString);

    let newPhonePrice;
    if(inputValue === true){
         newPhonePrice = phoneNumber + 1;
    }else{
         newPhonePrice = phoneNumber - 1;
    }
    phoneNumberField.value = newPhonePrice
    return newPhonePrice;

}
function newUpdatePhonePrice(newPhonePrice){
    const phoneTotalPrice = newPhonePrice * 2031;
    const totalPhone = document.getElementById('phone-total');
    totalPhone.innerText = phoneTotalPrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    
    const newPhonePrice = updatePhonePrice(true);
    newUpdatePhonePrice(newPhonePrice);

})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    
    const newPhonePrice = updatePhonePrice(false);
    newUpdatePhonePrice(newPhonePrice);

})



// document.getElementById('btn-phone-plus').addEventListener('click', function(){
//     const phoneNumberField = document.getElementById('phone-number-field');
//     const phoneNumberString = phoneNumberField.value;
//     const phoneNumber = parseInt(phoneNumberString);

//     const newPhonePrice = phoneNumber + 1;
//     phoneNumberField.value = newPhonePrice;
// })
// document.getElementById('btn-phone-minus').addEventListener('click', function(){
//     const phoneNumberField = document.getElementById('phone-number-field');
//     const phoneNumberString = phoneNumberField.value;
//     const phoneNumber = parseInt(phoneNumberString);

//     const newPhonePrice = phoneNumber - 1;
//     phoneNumberField.value = newPhonePrice;
// })

