


async function mySingleFundFunc() {
    singleFundHtml.innerHTML = fullLoad(true, 'mini');

   const queryData = getQueryValue();
   const data = await getAllData();
   const foundData = data.find(i => i._id == queryData);
   console.log(foundData.organizer[0] != thisPiUser)
   if(!foundData || foundData.organizer[0] != thisPiUser){
    singleFundHtml.innerHTML = `
           <div class="errorLand">
               <img src="./assets/images/error.gif" alt=""/>
               <a href="/myfunds.html">Go back</a>
           </div>
       `;
   }
   if(foundData.organizer[0] == thisPiUser){


        if(foundData){

        
        
        singleFundHtml.innerHTML = `
         <div class="wrapsinglefund">
                <div class="single-header">
                    <img src="${foundData.images[0]}" alt="Fund Image">
                    <h3>${foundData.title}</h3>
                </div>
                
                <div class="single-det">
                    <span><strong>Goal Amount:</strong> <span>${currency}${foundData.goalAmount}</span></span>
                    <span><strong>Amount Raised:</strong> <span>${currency}${foundData.amountRaised}</span></span>
                    <span><strong>Date Created:</strong> <span>${foundData.createdAt}</span></span>
                    <span><strong>Status:</strong> <span class="status ${foundData.status}">${foundData.status}</span></span>
                </div>
                    
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-bar-fill" style="width: ${getPercent(foundData.goalAmount, foundData.amountRaised)}%;"></div>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="wrapsinglefund">
                    <div class="imgrow">
                     ${loadThisImg(foundData.images)}
                    </div>
                </div>
                <br/>
                <div class="wrapsinglefund">
                   <div class="donation-users">

                    <div>
        <h4>Donations 2.1k</h4>
        <div class="donor-space">
            ${donorMini(donorsData.filter(i => i.objId == foundData.donors).reverse().slice(0, 3), foundData.externals, "amt")}
        </div>
    </div>
</div><!-- words of support --><div class="donation-users">
    <div>
        <h4>Words of support</h4>
        <div class="donor-space">
           ${donorMini(donorsData.filter(i => i.objId == foundData.donors).reverse().slice(0, 3), foundData.externals, "text")}
        </div>
                </div>
                </div>
                </div>
                <br>
                <div class="wrapsinglefund">
                    <div class="wrap-fund">

                        <span class="title">
                            <span>Withdrawable Amount:</span>
                            <span><b>${currency}${foundData.withdrawable}</b></span>
                        </span>
                        <span class="flex-wrapfund">
                            <button class="default-btn">Withdraw now</button>
                            <button class="default-btn">Move to wallet.</button>
                        </span>
                        
                    </div>
                </div>

                <br/>
                <div class="wrapsinglefund">
                    ${foundData.status != 'ended' ?

                        `<div class="actions">
                        <a href="/update.html?q=${foundData.externals}"><button class="edit-btn">Add an Update</button></a>
                        <a href="/editmyfund.html?q=${foundData._id}"><button class="edit-btn">Edit Details</button></a>
                        <button onclick="endDonFunc()" class="delete-btn">End Donation</button>
                    </div>`
                    : 
                    ""
                    }

                </div>
                
        </div>
    `;
    }
}

};
mySingleFundFunc()
