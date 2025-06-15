function listFundsHref() {
    var listHref = ""
     
     for (i = 0; i < fundWithPiTips.tips.length; i++) {
         const current = fundWithPiTips.tips[i];
         
         listHref += `
             <a href="fundraiser.html?q=${current.id}">${i +1}. ${current.title} <i class="fa fa-chevron-right"></i></a>
         `
     };
     
     return listHref;
}

function listTheTips() {
    let returnData = "";
    const getIdQuery = getQueryValue();
    const getId = getIdQuery ? getIdQuery : 1;
    
    const reData = fundWithPiTips.tips.find(i => i.id == getId).items;
    console.log({reData})
    
    for (i = 0; i < reData.length; i++) {
        const current = reData[i];
        returnData += `
            <div class="each-row" id="${current.link}">
                    <div class="full">
                        <span class="float">Step ${i+1}</span>
                    </div>
                    
                    <img src="${current.img}" alt="">
                    
                    <p>
                        ${current.text}
                    </p>
                </div>
        `;
        
    }
    return returnData;
}





function fundnoaccfunc() {
    return `
        <div class="no-acc">
                <div class="sub-wrap-fund">
                  <img src="./assets/images/img1.jpeg" alt="">  
                <div class="create-fund-acc">
                   <h2> Start fundraising today  </h2>         
                   <p>
                       Hit your goals by creating an account in the #1 fundraising platform with Pi.
                   </p>
                   <a class="default-btn" href="createfundraiseraccount.html">Start FundWithPi</a>   </div>
            </div>
            
            <div class="mini-fund-nav">
                ${listFundsHref()}
            </div>
            
            <div class="main-content">
                ${listTheTips()}
            </div>
            
            <div class="create-btn-space">
                <a class="default-btn" href="createfundraiseraccount.html">Start fundWithPi</a>
            </div>
            
            <!-- end of no acc -->
            </div>
    `
    
    
    
    
}
