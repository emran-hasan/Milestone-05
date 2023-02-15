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
// Step 1 
function GeneratePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}
// step-3 
document.getElementById('generate-pin').addEventListener('click', function(){
    const pinNew =getPin();

    const displayPinField =  document.getElementById('display-pin');
    displayPinField.value = pinNew;
    

})