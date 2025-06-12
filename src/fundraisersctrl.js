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
            <a href="createfundraiser.html" class="default-btn">Start fundraising</a>
            <a href="myfunds.html" class="default-btn">My funds</a>
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


async function fundRaisersTips(toReturn){
    try {
        const userInfo = await signIn();
        const fundraiserAcc = userInfo.fundraiser;
        console.log({fundraiserAcc})
  
        openMenu(false)
        if(!fundraiserAcc){
            window.location.href = "createfundraiseraccount.html";
            return '';
        }
        else{
            
        if (toReturn) {
            return openFundSub(toReturn)
        }
        else {
            openFundSub(toReturn);
        }
        }
      } catch (error) {
        console.log(error)
    }
}
