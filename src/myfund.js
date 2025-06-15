document.querySelector('.beLoading').innerHTML = fullLoad(false, 'mini');


async function eachFundRow(filt) {
document.getElementById("list-funds").innerHTML = fullLoad(false, 'mini');


    // Handle active class on buttons
    const allBtns = document.querySelectorAll(".sort button");
    allBtns.forEach(btn => btn.classList.remove("active"));
    document.getElementById("sortBtn" + filt).classList.add("active");

    try {
        
   
    var toReturn = "";
    const queryData = getQueryValue();
    const mainDataRaw = await getAllData();
    const userInfo = await signIn();
    const currentUser = userInfo.uid;
    const mainData = mainDataRaw.filter(item => item.organizer[0] == currentUser); 

    
    // const mainData = mainDataRaw.filter(i => i.)
    let dataToUse = null;

    console.log(mainData.length >= 0)
    if(mainData.length >= 0){
        startNewFunds.style.display = 'none';
    }

   
    // Filter logic
    if (filt == "all") {
        dataToUse = mainData;
    } else {
        dataToUse = mainData.filter(i => i.status == filt);
        console.log("first");
    }

    for (let i = 0; i < dataToUse.length; i++) {
        const dataPro = dataToUse[i];
        toReturn += `
           <div class="fund-row">
                <span class="inner-fund-bar" style="width: ${getPercent(dataPro.goalAmount, dataPro.amountRaised)}%;"></span>
                <div class="fund-inner">
                    <img src="${dataPro.images[0]}" alt="">
                    <span class="flex-col start">
                        <span class="fund-list-title">
                            ${dataPro.title}
                        </span>
                        <span class="fund-status ${dataPro.status}">${dataPro.status}</span>
                    </span>
                </div>
                <small class="fund-price"><span id="loadPie"></span>${getPercent(dataPro.goalAmount, dataPro.amountRaised)}% raised</small>
                <a href="/mysinglefund.html?q=${dataPro._id}"> <i class="fa fa-info"></i></a>
            </div>
        `;
    }

    if (dataToUse.length <= 0) {
        toReturn = `<div class='no-funds'><img src="./assets/images/empty.png" alt="">No funds available</div>`;
    }

    document.getElementById("list-funds").innerHTML = toReturn;

} catch (error) {
    document.getElementById("list-funds").innerHTML = 
    `
    <div class="flex-col">
        <img style="width:95%;" src="./assets/images/oops.png"/>
        <small class="red"> Something went wrong...</small>
    </div>
    `;
        
}
};
eachFundRow("all");
