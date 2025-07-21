async function confirmIt(id) {
    const params = {status: "successful"};

    const res = await confirmWithdrawals(id, params);
    if(res){
        notifier("Withdrawal confirmed");
        dashWithdrawFunc('params');
    }
}

async function mainWithdrawList(params) {
    var toReturn = "";

    try {
        
  
    const getWithdrawsRaw = await getAllWithdraws();
    const getWithdraws = getWithdrawsRaw.filter(i => i.status == params);
    console.log({getWithdraws});

    if(getWithdraws.length <= 0) {
        toReturn = `No ${params} withdrawals found`;
    }
    for (let i = 0; i < getWithdraws.length; i++) {
        const element = getWithdraws[i];
        const getTheUser = await getRandomUser(element.userId);
        const getTheItem = await getOneFund(element.itemId);

        
    toReturn += `
        <div class="approve-user">
             <span>
                ${getTheUser.name} withdraws ${currency}${element.withdrawamt} for <a href="/f.html?q=${getTheItem._id}"><u>${getTheItem.title}</u></a>.
            </span> 

            ${params == "pending" ? 
                    `<button class="see-more" onclick="confirmIt('${element._id}')">confirm</button>`
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

