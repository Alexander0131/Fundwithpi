var actualAmt = 0;
function setDonateVal(val) {
    const amtToSend = document.getElementById('amtToSend');
    const donatePrice = document.getElementById('donatePrice');
    const donateState = document.getElementById("donateState");
    const donateText = document.getElementById("wordOfSup");

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

async function makePaymentRaw(objId, externals, memo, purpose, title) {
    // prepare the fundupdate

    
        // post the deposited amount




       const trans = await makePayment(objId, actualAmt, memo, purpose);

       if(trans){
        console.log("Payment made successfully");
        const thisData = await getOneFund(objId);
        const formData = new FormData();
        formData.append('amountRaised', Number(thisData.amountRaised) + Number(actualAmt));
        formData.append('donorsCount', thisData.donorsCount + 1);

        // set the word of support

        const getUpdate = await fetchDonorData(externals);
        var prevUpdateData = getUpdate.data;
        const dataLen = prevUpdateData.length;
        prevUpdateData.push({
          id: dataLen + 1,
          comments: document.getElementById("wordOfSup").value, 
          amt: document.getElementById("amtToSend").value,
          userId: currentUser.uid,
          date: getCurrentDateString()
});
        const postNew = await pushDonorData(getUpdate.objId, prevUpdateData);


    





        editToDb(formData, objId, title);
        if(postNew){
            notifier("Donation made succesfully");  
            createNoti(`Donation made by <a href="user.html?q=${currentUser.uid}"><u>${currentUser.username}</u></a> to <a href="f.html?q=${objId}"><u>${title}</u></a> was succesful`);  
            setTimeout(() => {
                window.location.href = "transaction.html";
            }, 5000)
            }
            

       }
       else{
        notifier("Donation failed, try again after few minutes");
        createNoti(`Donation made by <a href="user.html?q=${currentUser.uid}"><u>${currentUser.username}</u></a> to <a href="f.html?q=${objId}"><u>${title}</u></a> was unsuccesful`);  
        console.log("Payment failed");
       }
    
}

async function donateBtnRaw(itemId, title, externals) {
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
            <div class="wrap-textarea">
                <label>Enter a word of encouragement(optional).</label>
                <div id="randomSupport"></div>
                <textarea placeholder="Kindly enter a word of encouragement." id="wordOfSup"></textarea>
            </div>
            <div class="pay-btn">
                <button class="default-btn" id="donateState" disabled onclick="makePaymentRaw('${actualObjId}', '${externals}', 'Test payment', '${actualPurpose}', '${title}')"> Donate <span id="donatePrice"> </span></button>
            </div>
        </div>
    `;
}

async function donateBtn(itemId, externals, title) {
    dialogFunc(await donateBtnRaw(itemId, title, externals), 'Donate', true);

    
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