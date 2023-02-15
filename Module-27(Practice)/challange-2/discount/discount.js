document.getElementById('btn-discount').addEventListener('click', function(){
    const discountAmount = document.getElementById('total-amount');
    const payAmount = document.getElementById('pay-amount');

    const discountAmountString = discountAmount.innerText;
    const discount = parseFloat(discountAmountString);

    if(discount == "DISC30"){

        const discountedPrice = discount * 0.7;
        payAmount.innerText= discountedPrice;
    }


    if (discountCode === "DISC30") {
        const discountedPrice = price - price * 0.3;
        document.getElementById("result").innerHTML = "Discounted Price: " + discountedPrice;
      } else {
        document.getElementById("result").innerHTML = "Invalid discount code";
      }


})


