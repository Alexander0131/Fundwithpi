var selectedCart = [];

function callDonationList(cat, itsClass) {
    const element = document.querySelector(`.${itsClass.replace(/\s+/g, ".")}`);
    if (!element) return console.error(`Element with class '${itsClass}' not found.`);

    // Check if the item already exists using itsClass instead of cat
    const existingIndex = selectedCart.findIndex(item => item.itsClass === itsClass);

    if (existingIndex === -1) {
        selectedCart.push({ cat, itsClass });
        element.style.background = 'var(--firstGreen)';
        element.style.color = 'var(--riskText)';
    } else {
        selectedCart.splice(existingIndex, 1);
        element.style.background = 'inherit';
        element.style.color = 'var(--text)';
    }
    if (selectedCart.length > 0) {
        document.querySelector('.go-cart').innerText = 'Explore (' + selectedCart.length + ')';
    }
    else {
        document.querySelector('.go-cart').innerText = 'Explore (All)';
    }
}

function  goCartFunction() { 
   donationCart.style.display = "none";
   donationListClass.style.display = "block";
   donationListClass.style.height = "93vh";
   window.location.href = "#header";
    if (selectedCart.length > 0) {
      var setData = [];
       for (i = 0; i < selectedCart.length; i++) {
           setData.push(selectedCart[i].cat);
       }
       console.log({selectedCart})
       
        loadMoreData(setData)
        donationList.onscroll = handleScroll;
    }
    else{
        loadMoreData('all')
        donationList.onscroll = handleScroll;
    }
}




function allCartList() {
    return allCat.map(allCartPro => `
        <button onclick="callDonationList('${allCartPro.name}', '${allCartPro.faClass}')">
            <i class="${allCartPro.faClass}"></i> <span>${allCartPro.name}</span>
        </button>
    `).join('');
}

function donationCartFunc() {
    return `
        <div>
            <h5>Select one or more categories where you would like to help people by raising funds.</h5>
            <div class="main-donation">${allCartList()}</div>
            <button onclick="goCartFunction()" class="go-cart">Explore (All)</button>
            <br>
            <br>
        </div>
    `;
}

if (donationCart) {
    const autoCat = getQueryValue();
    
    if(autoCat == 'all'){
        console.log("Listing all")
       goCartFunction()
    }else{
        donationCart.innerHTML = donationCartFunc();
    }
} else {
    console.error("donationCart element not found.");
}