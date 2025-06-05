var toUpText = "";
const queryValue = getQueryValue();


async function getFund(params) {
    const myData = await getFundByCat("externals", queryValue);
    const data = myData[0][params]; 
    return data;
}



// const getFundred = JSON.parse(getFund());

function ctrlTextarea(val) {
    const value = val.value;
    toUpText = value;
    const btnId = document.getElementById("shareBtnId");
    btnId.disabled = value.length <= 20;
    console.log(value.length <= 20);

};

async function pushNewUpdate(){
    var toUpData = [];
    // get other data...
    const otherData = await getThisUpdate(queryValue);
    if(otherData){
        toUpData = otherData.data;
        toUpData.push(
            {
                id: otherData.data.length +1,
                content: toUpText,
                date: getCurrentDateString()
            }
        )
    }
   pushUpdateToAPI(queryValue, toUpData);
};

let toUpData = [];

async function deleteUpdate(deleteId) {
    const otherData = await getThisUpdate(queryValue);
    var toEditData = "";
    if (otherData && Array.isArray(otherData.data)) {
        toEditData = otherData.data.filter(item => item.id !== deleteId);
        pushUpdateToAPI(queryValue, toEditData);
    }
}


async function callDisUpdate() {
    const disUpdateId = document.getElementById("disUpdateList");
    disUpdateId.innerHTML = "";
    const dataRaw = await getThisUpdate(queryValue);
    if(dataRaw.data.length <= 0){
        disUpdateId.innerHTML += `
        <p>No update yet</p>
    `
    }
    for (let i = 0; i < dataRaw.data.length; i++) {
        const element = dataRaw.data[i];
        
        disUpdateId.innerHTML += `
            <p class="updateDateAndContent"> 
                <sub><small>${formatMongoDateString(element.date)}</small></sub>
                <span>${element.content}</span>
                <button onclick="deleteUpdate(${element.id})"><i class="fa fa-trash"></i></button>
                <br/>
                <br/>
            </p>
        `
    };

}

async function callUpdateDesc() {
    const updateDesc = document.getElementById("updateDesc");
    const updateTextDesc = await getFundByCat('externals',`${queryValue}`);


    updateDesc.innerHTML = `
        <div>
            <h2>Preview</h2>
            <div>
                ${updateTextDesc[0].content}
                <br/>
                <br/>
                <h3>Updates</h3>
                <div id="disUpdateList">
                </div>
            </div>
        </div>
    `; 
    callDisUpdate();
}

async function updateFunc() {
    updateHtml.innerHTML = fullLoad(true, 'mini', true);
    timeOutLoad(updateHtml, true, 20000);
    const amountRaised = await getFund('amountRaised');
    const donorsCount = await getFund('donorsCount');
    const title = await getFund('title');
    const goalAmount = await getFund('goalAmount');
    const externalsId = await getFund('externals');
    const donorData = await fetchDonorData(externalsId);
    const donorsHtml =  donorMini(donorData.data, externalsId, "text");
    const donorsAmtHtml =  donorMini(donorData.data, externalsId, "amt");
    const percent = getPercent(goalAmount, amountRaised);
    if(donorData){
        timeOutLoad(updateHtml, false, 0);
    }

    updateHtml.innerHTML = `
        <div class="update-wrap">
            <div class="update-span">
                <div class="update-header">
                    <h2 class="update-title">Latest Fundraising Update</h2>
                    <p class="update-description">
                        We've made some exciting progress! Here's what's new in our ongoing campaign:
                    </p>
                    
                    <ul class="update-list">
                        <li><strong>${currency}${amountRaised}</strong> raised</li>
                        <li><strong></strong>About ${formatNumber(donorsCount)} donors supported</li>
                        <li>${title}</li>
                    </ul>
                    
                    <div class="progress-container">
                        <div class="progress-bar" style="width: ${percent}%"></div>
                        <span class="progress-text">${percent}% of $10,000 goal</span>
                    </div>
                    <br>

                    <div class="shareUpdate">
                        <textarea class="shareUpdateText" placeholder="What's the change, or something that you want to share?" oninput="ctrlTextarea(this)" id="textareaUpdate"></textarea><br/>
                        <small><sup class="red">*Text should be atleast 20 characters long</sup></small>
                    </div>


                    <span class="flex-col">
                        <button class="default-btn" onclick="pushNewUpdate()" id="shareBtnId" disabled>Share an Update with donors</button>
                    </span>
                </div>
            </div>

            <div class="update-span">
                <div id="updateDesc"></div>
            </div>

            <div class="update-span">
                ${donorsHtml.length > 0 ? `
                    <div class="update-extra">
                        <section class="testimonials">
                            <h3>What are donors response</h3>
                            <br>
                                ${donorsHtml}
                        </section>
                    </div>
                ` : `<p>No donor comments yet.</p>`}
            </div>

            <div class="update-span">
                ${donorsHtml.length > 0 ? `
                    <div class="update-extra">
                        <section class="testimonials">
                            <h3>Amount Donors Are Donating</h3>
                            <br>
                                ${donorsAmtHtml}
                        </section>
                    </div>
                ` : `<p>No donor comments yet.</p>`}
            </div>
        </div>
    `;

    callUpdateDesc();
}


updateFunc();