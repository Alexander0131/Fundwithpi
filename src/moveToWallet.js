let moveToWalletAmt = "";


function changeToMoveVal(value, moveVal) {
    const amtToMoveBtn = document.getElementById("amtToMovedBtn"); 
    const amtToMoveMainBtn = document.getElementById("amtToMoveMainBtn");

    const sanitized = value.value
        .replace(/[^0-9.]/g, '')        
        .replace(/(\..*)\./g, '$1');  
        
        if(Number(sanitized) <= 0 || sanitized > moveVal){
            amtToMoveMainBtn.disabled = true;
        }
        else{
            amtToMoveMainBtn.disabled = false;
        }

    value.value = sanitized; 
    amtToMoveBtn.textContent = sanitized;
    moveToWalletAmt = sanitized;
}


function htmlToReturnWall(state){
     const moveToWallDialog = document.getElementById("moveToWallet-dialog");
    if (state){
    moveToWallDialog.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <i class="fas fa-check-circle" style="color: green; font-size: 48px; margin-bottom: 10px;"></i>
            <h3 style="color: green; margin: 10px 0;">Withdrawal Request Submitted Successfully!</h3>
            <p style="font-size: 16px; color: #444;">
            You’ve moved <strong>${moveToWalletAmt}</strong> into your wallet.}.
            </p>
        </div>
        `;
            
            setTimeout(() => {
                window.location.href = `mysinglefund.html?q=${queryValue}`;
            }, 2000)
        }
else{
             moveToWallDialog.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <i class="fas fa-times-circle" style="color: red; font-size: 48px; margin-bottom: 10px;"></i>
                    <h3 style="color: red; margin: 10px 0;">Withdrawal Request Failed</h3>
                    <p style="font-size: 16px; color: #444;">
                    Something went wrong while processing your request of <strong>${moveToWalletAmt}</strong>.
                    Please try again later or contact support if the issue persists.
                    </p>
                </div>
                `;
        }


}



 function mainMoveFunc(username, userId, walPend, itemId, itemTitle, withdrawable, walBal){
    const moveToWallDialog = document.getElementById("moveToWallet-dialog");
    moveToWallDialog.innerHTML = fullLoad(true, 'mini');
    console.log({username, userId, walPend, itemId, itemTitle, withdrawAmt, withdrawable, walBal});
       

       withdrawAPI(username, userId, walPend, itemId, itemTitle, moveToWalletAmt, withdrawable, walBal, "toWallet");
        


}

async function moveToWallet(itemId, itemTitle, withdrawable, currentUser, wallet, walletPend, username){
     toReturn = fullLoad(true, 'mini');

        toReturn = `
            <div class="withdraw-dialog" id="moveToWallet-dialog">
                <h2>About to move your raised funds to your wallet</h2>
                <h4>Maximum amount to move is ${currency}${withdrawable}</h4>
                <div class="flex-col">
                    <label>Enter amount to be moved</label>
                    <input class="withdraw-amt" oninput="changeToMoveVal(this)" placeholder="Amount" value=""/>
                    <i><small class="red">You can't withdraw more than ${currency}${withdrawable}.</small></i>
                </div>
                <button class="default-btn" id="amtToMoveMainBtn" disabled="true" onclick="mainMoveFunc('${username}','${currentUser}', '${walletPend}',  '${itemId}', '${itemTitle}', '${withdrawable}', '${wallet}')"> Move (${currency}<span id="amtToMovedBtn"> - </span>) to wallet. </button>
            </div>
        `
    dialogFunc(toReturn, 'Withdrawal');
}