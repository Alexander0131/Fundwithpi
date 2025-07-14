function singleRowFunc(useThisDataRaw) {
   var returnDataHtml = "";
   const useThisData = useThisDataRaw;

     if(!useThisData) {
         returnDataHtml = fullLoad(false);

     }else{

    
     

    for (var i = 0; i < useThisData.length; i++) {
        var usePro = useThisData[i];

        
        returnDataHtml += `
        <a href="/f.html?q=${usePro._id}" class="single-row" key="${usePro._id}">
            <div class="flex">
                <img class="single-row-img" 
                     src="${usePro.images[0]}"
                     alt="">  
                <div class="single-row-desc">
                    <h4>${usePro.title}.</h4>
                    <hr>
                    <h6>${formatNumber(usePro.donorsCount)} Donations</h6>
                </div>
            </div>
            ${circleProgress(usePro.goalAmount, usePro.amountRaised)}
        </a>
        `;
        }
    }

    return returnDataHtml;
}

