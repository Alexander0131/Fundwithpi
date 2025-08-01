 async function endDonationFunc() {
    const queryValue = getQueryValue();
    const formData = new FormData();
    formData.append('status', 'aborted');
    const theState = await editToDb(formData, queryValue);
    if (theState){
       notifier("Donation ended successfully");
        createNoti(`A donation have ended`, `f.html?q=${queryValue}`);
        openPop("");
    }
}

function endDonFunc() {
   const  toReturn = `
        <div class="wrap-end-donor">
            <b>Are you sure that you want to end this donation?
            </b>
            <small><sup class="red">* Note that action can't be reversed </sup></small>
              <div>
                 <button class="edit-btn" onclick="openPop(null)">No, Cancel</button>
                 <button class="delete-btn" onclick="endDonationFunc()">Yes, Abort Donation</button>
      </div>
        </div>
    `;
    openPop(toReturn);
}

