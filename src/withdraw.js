let withdrawAmt = "";
const queryValue = getQueryValue();


function changeToWithVal(value, withVal) {
    const amtToWithdrawBtn = document.getElementById("amtToWithdrawBtn");
    const amtWithdrawMainBtn = document.getElementById("amtWithdrawMainBtn");
    const sanitized = value.value
        .replace(/[^0-9.]/g, '')        
        .replace(/(\..*)\./g, '$1'); 

     if(Number(sanitized) <= 0 || sanitized > withVal){
            amtWithdrawMainBtn.disabled = true;
        }
        else{
            amtWithdrawMainBtn.disabled = false;
        }

       

    value.value = sanitized; 
    amtToWithdrawBtn.textContent = sanitized;
    withdrawAmt = sanitized;
}

function htmlToReturn(state){
     const withdrawDialog = document.getElementById("withdraw-dialog");
    if (state){
    withdrawDialog.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <i class="fas fa-check-circle" style="color: green; font-size: 48px; margin-bottom: 10px;"></i>
            <h3 style="color: green; margin: 10px 0;">Withdrawal Request Submitted Successfully!</h3>
            <p style="font-size: 16px;">
            You’ve requested to withdraw <strong>${withdrawAmt}</strong>. Please allow up to 12 hours for the transaction to be processed.
            </p>
        </div>
        `;
            
            setTimeout(() => {
                window.location.href = `mysinglefund.html?q=${queryValue}`;
            }, 2000)
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


}


 function mainWithdrawFunc(username, userId, walPend, itemId, itemTitle, withdrawable, walBal){
    const withdrawDialog = document.getElementById("withdraw-dialog");
    withdrawDialog.innerHTML = fullLoad(true, 'mini');
    console.log({username, userId, walPend, itemId, itemTitle, withdrawAmt, withdrawable, walBal});
       

       withdrawAPI(username, userId, walPend, itemId, itemTitle, withdrawAmt, withdrawable, walBal, "withdraw");
        


}

async function withDrawFunc(itemId, itemTitle, withdrawable, currentUser, wallet, walletPend, username){
    toReturn = fullLoad(true, 'mini');
        toReturn = `
            <div class="withdraw-dialog" id="withdraw-dialog">
                <h2>About to withdraw your raised funds</h2>
                <h4>Maximum amount to withdraw is ${currency}${withdrawable}</h4>
                <div class="flex-col">
                    <label>Enter amount to be withdrawn</label>
                    <input class="withdraw-amt" oninput="changeToWithVal(this, '${withdrawable}')" placeholder="Amount" value=""/>
                </div>
                <i><small class="red">You can't withdraw more than ${currency}${withdrawable}.</small></i>
                <button class="default-btn" id="amtWithdrawMainBtn" onclick="mainWithdrawFunc('${username}','${currentUser}', '${walletPend}',  '${itemId}', '${itemTitle}', '${withdrawable}', '${wallet}')" disabled> Withdraw  ${currency}<span id="amtToWithdrawBtn">-</span></button>
            </div>
        `
    
    dialogFunc(toReturn, 'Withdrawal');
}