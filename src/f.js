
//see more function 
let textSeeState = false;
function textSeeMore() {
    if(!textSeeState) {
        donationBodyText.style.height = "fit-content";
        textFader.style.display = "none";
        seeMoreText.innerText = "See Less";
        textSeeState = true;
    }else{
        textSeeState = false;
        donationBodyText.style.height = "202px";
        seeMoreText.innerText = "See More";
        textFader.style.display = "inline-block";
    }
}















function singleFundFunc(allObj) {
    singleFundWrap.innerHTML = `
        <div class="single-fund-head">
    <img class="full-img" src="${allObj.images[0]}" alt="">
    <div class="sub">
        <h2>${allObj.title}</h2>
        <span>Account and name</span>
        <span class="donation-verified">
            <i class="fa-solid fa-check-circle"></i> Donation Verified
        </span>
        <div class="wrap-btn">
            <div class="default-btn" onclick="donateBtn('${allObj._id}')">Donate Now!</div>
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
    <h2>Update</h2>
    <sup>01 of March 2025</sup>
    <br><br>
    <p>The message of the update will stay here....</p>
</div>
<!-- donations list -->
<div class="donation-users">
    <div>
        <h4>Donations 2.1k</h4>
        <div class="donor-space">
            ${getDonorsData(donorsData.filter(i => i.objId == allObj.donors).reverse().slice(0, 3))}
            <div>
                <button class="see-more" onclick="seeMoreDonorList('${allObj.donors}')">See more</button>
            </div>
        </div>
    </div>
</div><!-- words of support --><div class="donation-users">
    <div>
        <h4>Words of support</h4>
        <div class="donor-space">
            
            ${getDonorsText(donorsData.filter(i => i.objId == allObj.donors && i.comments != "").reverse().slice(0, 3))}
            
            <div>
                <button class="see-more" onclick="seeMoreMsgList('${allObj.donors}')">See more</button>
            </div>
        </div>
    </div>
</div><!-- report fundraiser --><div>
    <span class="report-fundsraiser">
        <i class="fa fa-flag-checkered"></i>
        <span onclick="dialogFunc(reportUserFuncUi(), 'Report', true)"> Report fundraiser </span>
    </span>
</div>
    
    `
    
   donationBodyText = document.querySelector('.donation-body-text');
    textFader = document.querySelector('.text-fader');
  seeMoreText = document.getElementById('see-more');
    
};

 singleFundFunc(rowData.find(i => i._id == "1000001"));






