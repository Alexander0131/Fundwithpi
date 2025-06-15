var actualAmt = 0;
function setDonateVal(val) {
    const amtToSend = document.getElementById('amtToSend');
    const donatePrice = document.getElementById('donatePrice');
    const donateState = document.getElementById("donateState");

    if (val != 'clear') {
        const conVal = Number(val);
        const currentVal = parseFloat(amtToSend.value) || 0;
        const newVal = currentVal + conVal;
        amtToSend.value = newVal;
        actualAmt = newVal;
        donatePrice.textContent = newVal + "π";
        donateState.disabled = newVal <= 0;
    } else {
        amtToSend.value = "";
        actualAmt = "";
        donatePrice.textContent = "";
        donateState.disabled = true;
    }
};

function getActualAmt(val) {
    actualAmt = val.value;
    console.log({actualAmt});
}

async function makePaymentRaw(objId, memo, purpose) {
    // prepare the fundupdate
   

       const trans = makePayment(objId, actualAmt, memo, purpose);

       if(trans){
        console.log("Payment made successfully");
        const thisData = await getOneFund(objId);
        const formData = new FormData();
        formData.append('amountRaised', Number(thisData.amountRaised) + Number(actualAmt));
        formData.append('donorsCount', thisData.donorsCount + 1);
        editToDb(formData, objId);


       }
        // window.location.href = "transaction.html";
    
}

async function donateBtnRaw(itemId, title) {
    return `
        <div class="wrap-payment-page">
            <div>
                <p class="text-center">Choose your desired amount for <br/><b>${title}</b></p>
            </div>
            <div class="opt-sugs">
                <button onclick="setDonateVal('0.5')">+0.5π</button>
                <button onclick="setDonateVal('1')">+1π</button>
                <button onclick="setDonateVal('1.5')">+1.5π</button>
                <button onclick="setDonateVal('2')">+2π</button>
                <button onclick="setDonateVal('5')">+5π</button>
                <button onclick="setDonateVal('10')">+10π</button>
                <button onclick="setDonateVal('50')">+50π</button>
            </div>
            <small>We rise by lifting others.</small>
            <div class="wrap-amt-to-send">
                <input type="number" id="amtToSend" placeholder="Enter your desired amount." oninput="getActualAmt(this)"/>
                <small onclick="setDonateVal('clear')">Clear</small>
            </div>
            <div class="pay-btn">
                <button class="default-btn" id="donateState" disabled onclick="makePaymentRaw('${actualObjId}', 'Test payment', '${actualPurpose}')"> Donate <span id="donatePrice"> </span></button>
            </div>
        </div>
    `;
}

async function donateBtn(itemId) {
    dialogFunc(await donateBtnRaw(itemId, ""), 'Donate', true);

    
    setTimeout(() => {
        const amtToSend = document.getElementById('amtToSend');
        const donatePrice = document.getElementById('donatePrice');
        const donateState = document.getElementById('donateState');

        amtToSend.addEventListener('input', () => {
            const value = parseFloat(amtToSend.value);
            donatePrice.textContent = value > 0 ? value + "π" : "";
            donateState.disabled = isNaN(value) || value <= 0;
        });
    }, 100);
}