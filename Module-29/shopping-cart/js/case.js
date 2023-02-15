
// Step 1 ways 
// document.getElementById('btn-case-plus').addEventListener('click', function(){
//     const inputField = document.getElementById('input-filed');
//     const caseNumberInputString = inputField.value;
//     const caseNumberInput = parseInt(caseNumberInputString);
    
//     const newCaseNumberInput = caseNumberInput + 1;
//     inputField.value = newCaseNumberInput;

    

// })
// document.getElementById('btn-case-minus').addEventListener('click', function(){
//     const caseNumberField = document.getElementById('input-filed');
//     const caseNumberInputString = caseNumberField.value;
//     const caseNumberInput = parseInt(caseNumberInputString);

//     const newCaseNumberInput = caseNumberInput - 1;
//     caseNumberField.value = newCaseNumberInput;
// })

// Step 1 another (function) ways
function updateCaseNumber(isIncrease){
    const inputField = document.getElementById('input-filed');
    const caseNumberInputString = inputField.value;
    const caseNumberInput = parseInt(caseNumberInputString);

    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = caseNumberInput + 1;
    }else{
        newCaseNumber = caseNumberInput - 1;
    }
    inputField.value = newCaseNumber;
    return newCaseNumber;  
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const totalCase = document.getElementById('case-total');
    totalCase.innerText = caseTotalPrice;
}
 
document.getElementById('btn-case-plus').addEventListener('click', function(){  
   const newCaseNumber = updateCaseNumber(true);

   updateCaseTotalPrice(newCaseNumber);


})
document.getElementById('btn-case-minus').addEventListener('click', function(){ 
    const newCaseNumber = updateCaseNumber(false)

    updateCaseTotalPrice(newCaseNumber);

})
