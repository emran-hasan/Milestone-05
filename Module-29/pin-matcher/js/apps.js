// Step 1 
function GeneratePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}
// Step-2 
function getPin(){
    const pin = GeneratePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }else{
        return getPin();
    }
}
// step-3 
document.getElementById('generate-pin').addEventListener('click', function(){
    const pinNew =getPin();

    const displayPinField =  document.getElementById('display-pin');
    displayPinField.value = pinNew;  

})

// calculate pin 
document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedField = document.getElementById('typed-field');
    const typedFieldString = typedField.value;
    
    if(isNaN(number)){
        
        if(number === 'C'){
            typedField.value = '';
        }else if(number === '<'){
            const digit = typedFieldString.split('');
            digit.pop();
            const remaining = digit.join('');
            typedField.value =remaining;
        }
        
    }else{
        const newTypedNumber = typedFieldString + number;
        typedField.value = newTypedNumber;
    }
})

// submit button 
document.getElementById('btn-notify').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedField = document.getElementById('typed-field');
    const typed = typedField.value;

    // if(typed === currentPin){
        
    //     const successPin = document.getElementById('pin-success')
    //     successPin.style.display = 'block';

    // }else{
    //     const unsuccessPin = document.getElementById('pin-unsuccess');
    //     unsuccessPin.style.display = 'block'

    // }
    const successPin = document.getElementById('pin-success')
    const unsuccessPin = document.getElementById('pin-unsuccess');
    if(typed === currentPin){
        successPin.style.display = 'block';
        unsuccessPin.style.display = 'none';

    }else{
        unsuccessPin.style.display = 'block';
        successPin.style.display = 'none';

    }
})
