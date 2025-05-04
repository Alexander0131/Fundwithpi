function openFundSub(toReturn) {
    var passData = "";
    
    for (let i = 0; i < fundWithPiTips.tips.length; i++) {
        const arr = fundWithPiTips.tips[i];
        
        passData += `
            <div class="inner-fund-wrap">
                <a href='fundraiser.html?q=${arr.id}' class="inner-fund">${arr.title}</a> <i class="fa fa-chevron-right"></i>
            </div>
        `;
    }
    
    
    const wrapData = `
        <div class="flex" id="wrap-data-funds">
            <button class="default-btn">Start fundWithPi</button>
        </div>
        ${passData}
    `

  if (toReturn) {
      return wrapData;
  }
    else{
        dialogFunc(`${wrapData}`, "Fundraiser", true);
    }
}


function fundRaisersTips(toReturn){
    openMenu(false)
    if(fundraiserAcc){
        return;
    }
    else{
        
    if (toReturn) {
        return openFundSub(toReturn)
    }
    else {
        openFundSub(toReturn);
    }
    }
}
