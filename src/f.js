let actualObjId, memo, actualPurpose, actualExternal;

//see more function 
let textSeeState = false;
function textSeeMore() {
    if(!textSeeState) {
        donationBodyText.style.maxHeight = "fit-content";
        textFader.style.display = "none";
        seeMoreText.innerText = "See Less";
        textSeeState = true;
    }else{
        textSeeState = false;
        donationBodyText.style.maxHeight = "202px";
        seeMoreText.innerText = "See More";
        textFader.style.display = "inline-block";
    }
}








async function listAllUpdatesHere(id){
    let toReturn = fullLoad(true, 'mini');
    try {
        const getUpdate = await getThisUpdate(id);
        console.log({getUpdate})
        if(getUpdate.data.length > 0){
            var toReturnPlus = "";
            // console.log("first");
            for (let i = 0; i < getUpdate.data.length; i++) {
                const ele = getUpdate.data[i];
                toReturnPlus += `
                    
                    <p> 
                        <sub><small>${formatMongoDateString(ele.date)}</small></sub> 
                        <br/>
                        ${ele.content} 
                    </p>
                `
            } 
            toReturn = `<h2>Update</h2> ${toReturnPlus}`
        }
        else{
            toReturn = ""
        }
    } catch (error) {
        console.log(error)
    }
    
    return toReturn;
}







async function singleFundFunc(allObj) {
    // console.log(allObj._id)
    singleFundWrap.innerHTML = fullLoad(true, 'mini 60');
    actualObjId = allObj._id;
    actualPurpose = allObj.title;
    actualExternal = allObj.externals;
    singleFundWrap.innerHTML = `
        <div class="single-fund-head">
    <img class="full-img" src="${allObj.images[0]}" alt="">
    <div class="sub">
        <h2>${allObj.title}</h2>

        <span class="flex-funds-user">
        <span>${await displayAcc(allObj.organizer[0])}</span>
        <br/>
        
        <span class="donation-verified">
        <i class="fa-solid fa-check-circle"></i> Donation Verified
        </span>
        </span>
        <div class="wrap-btn">
            <div class="default-btn" onclick="donateBtn('${allObj._id}', '${allObj.externals}', '${allObj.title}')">Donate Now!</div>
        </div>
    </div>
</div><div class="flex-detail">
    <div class="row-detail">
        <div>
            <b> ${formatNumber(allObj.amountRaised)} ${currency} raised </b>
            <div class="flex">
                <small> ${formatNumber(allObj.goalAmount)} ${currency} Target</small> •
                <small>${formatNumber(allObj.donorsCount)} Donations</small>
            </div>
        </div>
    </div>
    <div class="ctrl-progress-bar-wrap">
        <div class="ctrl-progress-bar">
            <div role="progressbar" aria-valuenow="${getPercent(allObj.goalAmount, allObj.amountRaised)}" aria-valuemin="0" aria-valuemax="100" style="--value:${getPercent(allObj.goalAmount, allObj.amountRaised)}"></div>
        </div>
    </div>
</div><div class="donation-body-text">
    <br><br>
    ${allObj.content} 
    <span class="text-fader"></span>
</div><div class="wrap-see-more">
    <button id="see-more" class="see-more" onclick="textSeeMore()">See more</button>
</div><!-- images zone --><div class="all-images"> 
    ${loadThisImg(allObj.images)}
</div><!-- update zone --><div class="update-zone">
    <span class="listUpdate">
        ${await listAllUpdatesHere(allObj.externals)}
    </span>
</div>
<!-- donations list -->
<div class="donation-users">
    <div>
        <div class="donor-space">
            ${await displayDonorAmt(allObj.externals)}
             
        </div>
    </div>

</div><!-- words of support --><div class="donation-users">
    <div>
        <div class="donor-space">
             ${await displayDonorAmt(allObj.externals, 'text')}
        </div>
    </div>
        <br/>
    <br/>
</div><!-- report fundraiser --><div>
    <button class="report-fundsraiser">
        <i class="fa fa-flag-checkered"></i>
        <span onclick="dialogFunc(reportUserFuncUi(), 'Report', true)"> Report fundraiser </span>
    </button>
</div>
    
    `
    
   donationBodyText = document.querySelector('.donation-body-text');
    textFader = document.querySelector('.text-fader');
  seeMoreText = document.getElementById('see-more');
    
};

async function setTheActualVal(){
    const getTheId = getQueryValue();
    const getTheData = await getOneFund(getTheId); 
    singleFundFunc(getTheData);
}

setTheActualVal();




