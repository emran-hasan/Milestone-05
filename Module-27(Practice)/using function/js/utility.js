
function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value ='';
    return inputFieldValue;
}
function getElementValueById(inputValueId){
    const depositTotal = document.getElementById(inputValueId);
    const depositTotalValueString = depositTotal.innerText;
    const depositTotalValue = parseFloat(depositTotalValueString);
    return depositTotalValue; 
}
function setElementValueById(elementId, newInputValue){
    const getNewElement = document.getElementById(elementId);
    getNewElement.innerText = newInputValue;
    
}