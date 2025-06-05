async function getDataArray(){
    const transDataRaw = await getAllTrans();
    const transData = transDataRaw.reverse();
    let toReturn = fullLoad(true, 'mini');

    try {
        
    
    if(transData){
        toReturn = "";
        for (i = 0; i < transData.length; i++) {
            const ele = transData[i];
            
            toReturn += `
                 <div class="trans-card">
                    <div class="trans-left">
                        <span class="trans-amount">+ ${ele.amount} π</span>
                        <p class="trans-purpose">Donation to: ${ele.purpose}</p>
                    </div>
                    <div class="trans-right">
                        <p class="trans-date">${formatMongoDateString(ele.created_at)}</p>
                        <p class="trans-status success">${ele.paid ? 'Completed' : '<span class="red">Failed</span>'}</p>
                    </div>
                </div>
            `
        }
    }
    console.log("Good to go")
} catch (error) {
    console.error(error)
} 

return toReturn;

}



async function transFunc() {
    transHtml.innerHTML = fullLoad(true, 'mini');

    transHtml.innerHTML = `
         <div id="transWrap">
                <h2 class="trans-title">Transaction History</h2>
                ${await getDataArray()}
        </div>
           
    `;
};


transFunc();
