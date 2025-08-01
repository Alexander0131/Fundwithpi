async function confirmIt(id, withdrawamt) {
    try {
        const params = {status: "successful"};
        userInfo = await signIn();
        const toEdit = {
        walletPend: `${Number(userInfo.walletPend)  - Number(withdrawamt)}`
        };
    
        const updateUser = await updateUserInfo(toEdit)

        console.log({toEdit})
        
        const res = await confirmWithdrawals(id, params);
        if(res){
            notifier("Withdrawal confirmed");
            dashWithdrawFunc('params');
        }
    } catch (error) {
        
    }
}

async function declineIt(id) {
    try {
        const params = {status: "declined"};
        
        const res = await confirmWithdrawals(id, params);
        if(res){
            notifier("Withdrawal declined");
            dashWithdrawFunc('params');
        }
    } catch (error) {
        
    }
}


async function mainWithdrawList(params) {
    var toReturn = "";

    try {
        
  
    const getWithdrawsRaw = await getAllWithdraws();
    const getWithdraws = getWithdrawsRaw.filter(i => i.status == params).reverse();
    console.log({getWithdraws});

    if(getWithdraws.length <= 0) {
        toReturn = `No ${params} withdrawals found`;
    }
    for (let i = 0; i < getWithdraws.length; i++) {
        const element = getWithdraws[i];
        
        
    toReturn += `
        <div class="approve-user">
             <span class="span">
                ${element.user[1]} ${element.type == "withdraw" ? "withdraws" : "moves to wallet "} ${currency}${element.withdrawamt} for <a href="/f.html?q=${element.item[0]}"><u>${element.item[1]}</u></a>.
            </span> 

            ${params == "pending" ? 
                    `<div class="flex"> <button class="delete-btn" onclick="declineIt('${element._id}')">Decline</button> <button class="see-more" onclick="confirmIt('${element._id}', '${element.withdrawamt}')">confirm</button></div>`
                    :
                    `<button>Approved</button>`
            }
        </div>
    `;
    }
    } catch (error) {
      toReturn = `No ${params} withdrawals found`;

    }
return toReturn;
}

async function dashWithdrawFunc(params) {
    const dashbody = document.getElementById('dashbody');
    dashbody.innerHTML = fullLoad(true, 'mini');

    dashbody.innerHTML = `
        <div class="approve-body">
            ${await mainWithdrawList("pending")}
            <small> <u>Approved transaction</u></small>
            ${await mainWithdrawList("successful")}
        </div>
    `;

    
}

