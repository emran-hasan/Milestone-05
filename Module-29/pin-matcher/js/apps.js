
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

document.getElementById('generate-pin').addEventListener('click', function(){
    const pinNew =getPin();
    console.log(pinNew);
})