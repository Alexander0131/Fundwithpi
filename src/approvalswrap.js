
async function approveUser(id) {
        const toChange = {fundraiserState: "approved"}
        const state = await updateUsersInfo(toChange, id);
        if (state) {
           approvalswrapFunc('users', 'userAppBtn');
        }
};


async function approveFunds(id) {
        const toChange = {status: "active"};
        const formData = new FormData();
        formData.append("verifiedState", "active");
        const state = await editToDb(formData, id);
        if (state) {
        dialogFunc(false);
        }
};

function approveModal(img, username, email, phone, country, desc, id) {
    var content = 
        `<div class="flex-col" id="approve-modal">
            <div class="approve-inner">
            <div>
                <img class="approveImg" src="./assets/images/sample.jpeg"
            </div><br/><br/>
            <div class="flex-col" id="approve-detail">
                <span>User fullname: <b>${username}</b></span>
                <span>User email: <b>${email}</b></span>
                <span>User Phone No: <b>${phone}</b></span>
                <span>User country: <b>${country}</b></span>
                <span>User Description: <b>${desc}</b></span>
            </div>
            <br/>
            <div>
                <button class="delete-btn" onclick="dialogFunc('')"> Decline </button>
                <button class="edit-btn" onclick="approveUser('${id}')"> Approve </button>
            </div>
            <br/>
            </div>
        </div>`;
    dialogFunc(content, "User Approval", "Approve User");
}

async function approveFundModal(img, organizer, desc, id) {
    fullLoad(true, 'true');
    console.log(img.length);
    var content = 
        `<div class="flex-col" id="approve-modal">
            <div class="approve-inner">
            <div class="flex-col">
            <div>
                <img class="approveImg" src="${img[0]}"/>
            </div><br/><br/>

                ${img.length > 1 ? 
                    `
                    <div class="approveImgList">
                    ${loadThisImg(img.splice(1,4))}
                    </div>
                    `
                : ``}

                ${await displayAcc(organizer[0])}
            <div class="flex-col" id="approve-detail">
                <span>Description: <b>${desc}</b></span>
            </div>
            <br/>
            <div>
                <button class="delete-btn" onclick="dialogFunc('')"> Decline </button>
                <button class="edit-btn" onclick="approveFunds('${id}')"> Approve </button>
            </div>
            <br/>
            </div>
            </div>
        </div>`;
        if(content){
        fullLoad(false, 'false');
        dialogFunc(content, "Funds Approval", "Approve Fund");
        }
}

let prevId = "";
async function approvalswrapFunc(params, activeId) {
    const approvebody = document.getElementById("approvebody");

    approvebody.innerHTML = fullLoad(true, 'mini');
   
    const prevIdPro = document.getElementById(prevId);
    const activeIdPro = document.getElementById(activeId);

    if(prevIdPro) prevIdPro.className = "approve-users"; 
    if (activeIdPro) activeIdPro.className = "approve-users active"; 
     if(params != prevId){
        prevId = activeId;
    }
    if(params == "users"){
        
        const listDataRaw = await getAllUsers();
        const listData = listDataRaw.filter(i => i.fundraiser == true && i.fundraiserState == "pending");
        
        if(listData.length > 0){

        approvebody.innerHTML = "";
        for (let b = 0; b < listData.length; b++) {
            const element = listData[b];
            
    approvebody.innerHTML += `<div class="approve-user unread">
                                        <span>
                                            ${element.name} has applied to become a fundraiser.
                                        </span>
                                        <button onclick="approveModal('${element.img}','${element.username}','${element.email}','${element.phone}','${element.country}','${element.desc}', '${element.uid}')" class="see-more">see more</button>
                                    </div>
`
    }
        }
else{
    approvebody.innerHTML = "No data available";
}
        }

    else{
        const listDataRaw = await getAllData();
        const listData = listDataRaw.filter(i => i.
verifiedState == "pending");
        
        approvebody.innerHTML = "";
        for (let b = 0; b < listData.length; b++) {
            const element = listData[b];
            
    approvebody.innerHTML += `<div class="approve-user unread">
                                        <span>
                                            ${element.title} 
                                        </span>
                                       <button onclick='approveFundModal(${JSON.stringify(element.images)}, ${JSON.stringify(element.organizer)}, "${element.description.replace(/"/g, '&quot;')}", "${element._id}")' class="see-more">see more</button>

                                    </div>
`
    }
    }
    
} 
approvalswrapFunc('users', 'userAppBtn');