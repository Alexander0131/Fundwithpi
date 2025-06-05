let page = 0;
const itemsPerPage = 5;
let isLoading = false;
let filteredData = [];

async function loadMoreData(cat) {
    if (isLoading) return;

    if (page === 0) {
        filteredData = []; 
        console.log({ cat });
    
        const getTheData = await getAllData();
    
        if (cat.includes('all')) {
            filteredData = getTheData;
        } else {
            filteredData = getTheData.filter(item => cat.includes(item.category.toLowerCase()));
        }
    
        console.log({ filteredData });
    }
    

    const start = page * itemsPerPage;
    if (start >= filteredData.length) return;

    isLoading = true;
    showLoading(true);

    setTimeout(() => {
        const end = start + itemsPerPage;
        const newData = filteredData.slice(start, end);

        if (newData.length === 0) {
            showLoading(false);
            return;
        }

        newData.forEach(element => {
            donationList.innerHTML += `
            <a href="/f.html?q=${element._id}" class="single-row" key="${element._id}">
                <div class="flex">
                    <img class="single-row-img" 
                    src="${element.images[0]}"
                    alt="">
                    <div class="single-row-desc">
                        <h4>${element.title}.</h4>
                        <hr>
                        <h6>${formatNumber(element.donorsCount)} Donations</h6>
                    </div>
                </div> 
                <div class="ctrl-progress-bar-wrap">
                    <div class="ctrl-progress-bar">
                        <div role="progressbar" aria-valuenow="${getPercent(element.goalAmount, element.amountRaised)}" aria-valuemin="0" aria-valuemax="100" style="--value: ${getPercent(element.goalAmount, element.amountRaised)}"></div>
                    </div>
                    <small>£${formatNumber(element.amountRaised)}</small>
                </div>
            </a>`;
        });

        page++;
        isLoading = false;
        showLoading(false);
        
        donationList.scrollTo({
            top: donationList.scrollTop + 70, 
            behavior: "smooth"
        });

    }, 1000);
}

function showLoading(show) {
    donationListLoader.innerHTML = show ? fullLoad(true, 'mini') : "";
}

function handleScroll() {
    if (donationList.scrollTop + donationList.clientHeight >= donationList.scrollHeight - 2) {
        loadMoreData(); // Uses the last selected categories
    }
}

// Initial load with multiple categories
// loadMoreData(['education', 'health', 'food']);
donationList.onscroll = handleScroll;