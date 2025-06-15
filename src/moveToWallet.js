let moveToWalletAmt = "";


function changeToMoveVal(value) {
    const amtToMoveBtn = document.getElementById("amtToMovedBtn"); 
    const amtToMoveMainBtn = document.getElementById("amtToMoveMainBtn");

    const sanitized = value.value
        .replace(/[^0-9.]/g, '')        
        .replace(/(\..*)\./g, '$1');  
        
        if(value.value <= 0){
            amtToMoveMainBtn.disabled = true;
        }
        else{
            amtToMoveMainBtn.disabled = false;
        }

    value.value = sanitized; 
    amtToMoveBtn.textContent = sanitized;
    moveToWalletAmt = sanitized;
}

function mainMoveFunc(itemId, currentUser, curWallet, withdrawableMain){
    const moveToWalletDialog = document.getElementById("moveToWallet-dialog");
    moveToWalletDialog.innerHTML = fullLoad(true, 'mini');
    console.log(curWallet)
    if(itemId, moveToWalletAmt, currentUser){
            const newWallet = Number(curWallet) + Number(moveToWalletAmt);
            const newBalance = Number(withdrawableMain) - Number(moveToWalletAmt);
            console.log({newBalance})
            const post = moveToWalletAPI(currentUser, newWallet, newBalance, itemId); 
        if (post){
            moveToWalletDialog.innerHTML =  `<div style="text-align: center; padding: 20px;">
            <i class="fas fa-check-circle" style="color: green; font-size: 48px; margin-bottom: 10px;"></i>
            <h3 style="color: green; margin: 10px 0;">Withdrawal Request Submitted Successfully!</h3>
            <p style="font-size: 16px; color: #444;">
            You’ve moved <strong>${moveToWalletAmt}</strong> into your wallet, your balance is ${newWallet}.
            </p>
        </div>`;
        }
        else{
            moveToWalletDialog.innerHTML =  `
                <div style="text-align: center; padding: 20px;">
                    <i class="fas fa-times-circle" style="color: red; font-size: 48px; margin-bottom: 10px;"></i>
                    <h3 style="color: red; margin: 10px 0;">Withdrawal Request Failed</h3>
                    <p style="font-size: 16px; color: #444;">
                    Something went wrong while processing your request of <strong>${withdrawAmt}</strong>.
                    Please try again later or contact support if the issue persists.
                    </p>
                </div>
            `
        }
    }
}

async function moveToWallet(itemId, currentUser, wallet){
     toReturn = fullLoad(true, 'mini');
   const foundData = await getOneFund(itemId);
   moveToWalletAmt = foundData.withdrawable;

   console.log({wallet})
    if(foundData.organizer[0] == currentUser){
        toReturn = `
            <div class="withdraw-dialog" id="moveToWallet-dialog">
                <h2>About to move your raised funds to your wallet</h2>
                <h4>Maximum amount to move is ${currency}${foundData.withdrawable}</h4>
                <div class="flex-col">
                    <label>Enter amount to be moved</label>
                    <input class="withdraw-amt" oninput="changeToMoveVal(this)" placeholder="Amount" value="${foundData.withdrawable}"/>
                </div>
                <button class="default-btn" id="amtToMoveMainBtn" onclick="mainMoveFunc('${itemId}', '${currentUser}', '${Number(wallet)}', '${Number(foundData.withdrawable)}')"> Move (${currency}<span id="amtToMovedBtn">${foundData.withdrawable} </span>) to wallet. </button>
            </div>
        `
    };
    dialogFunc(toReturn, 'Withdrawal');
}