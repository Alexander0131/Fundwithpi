async function reactivateFunc(){
    const getDate = await getThisUser();
    theDate = getDate.accountState.split("$$")[1];
    document.getElementById("accInfoText").innerText = `Make sure your device's time and date is correct. \n  Your account can only be reactivated after ${getTimeDifference(getCurrentDateString(), theDate)}. \n So please wait...`;
}

reactivateFunc();