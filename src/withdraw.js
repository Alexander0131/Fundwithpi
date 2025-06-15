let withdrawAmt = "";

function changeToWithVal(value) {
    const amtToWithdrawBtn = document.getElementById("amtToWithdrawBtn");
    const amtWithdrawMainBtn = document.getElementById("amtWithdrawMainBtn");

     if(value.value <= 0){
            amtWithdrawMainBtn.disabled = true;
        }
        else{
            amtWithdrawMainBtn.disabled = false;
        }

    const sanitized = value.value
        .replace(/[^0-9.]/g, '')        
        .replace(/(\..*)\./g, '$1');   

    value.value = sanitized; 
    amtToWithdrawBtn.textContent = sanitized;
    withdrawAmt = sanitized;
}


async function mainWithdrawFunc(userId, itemId){
    const withdrawDialog = document.getElementById("withdraw-dialog");
    withdrawDialog.innerHTML = fullLoad(true, 'mini');
    console.log({withdrawAmt})
    try {
        const toUpload = {
            userId: userId,
            itemId: itemId,
            withdrawamt: withdrawAmt
        }

        const uploadWithdraw = await withdrawAPI(toUpload);
        console.log({uploadWithdraw});
        if(uploadWithdraw){

       withdrawDialog.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <i class="fas fa-check-circle" style="color: green; font-size: 48px; margin-bottom: 10px;"></i>
            <h3 style="color: green; margin: 10px 0;">Withdrawal Request Submitted Successfully!</h3>
            <p style="font-size: 16px; color: #444;">
            You’ve requested to withdraw <strong>${withdrawAmt}</strong>. Please allow up to 12 hours for the transaction to be processed.
            </p>
        </div>
        `;

        }
        else{
             withdrawDialog.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <i class="fas fa-times-circle" style="color: red; font-size: 48px; margin-bottom: 10px;"></i>
                    <h3 style="color: red; margin: 10px 0;">Withdrawal Request Failed</h3>
                    <p style="font-size: 16px; color: #444;">
                    Something went wrong while processing your withdrawal of <strong>${withdrawAmt}</strong>.
                    Please try again later or contact support if the issue persists.
                    </p>
                </div>
                `;
        }


    } catch (error) {
       

    }

}

async function withDrawFunc(itemId, currentUser){
    toReturn = fullLoad(true, 'mini');
   const foundData = await getOneFund(itemId);
   withdrawAmt = foundData.withdrawable;
   console.log({currentUser})
    if(foundData.organizer[0] == currentUser){
        toReturn = `
            <div class="withdraw-dialog" id="withdraw-dialog">
                <h2>About to withdraw your raised funds</h2>
                <h4>Maximum amount to withdraw is ${currency}${foundData.withdrawable}</h4>
                <div class="flex-col">
                    <label>Enter amount to be withdrawn</label>
                    <input class="withdraw-amt" oninput="changeToWithVal(this)" placeholder="Amount" value="${foundData.withdrawable}"/>
                </div>
                <button class="default-btn" id="amtWithdrawMainBtn" onclick="mainWithdrawFunc('${currency}', '${itemId}')"> Withdraw ${currency}<span id="amtToWithdrawBtn">${foundData.withdrawable}</span></button>
            </div>
        `
    };
    dialogFunc(toReturn, 'Withdrawal');
}