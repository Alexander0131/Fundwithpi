var disName, newEmail = false;


function triggerFileInput() {
    document.getElementById('file-input').click();
}

function removeImage() {
    const img = document.getElementById('profile-update');
    img.src = "./assets/images/sample.jpeg"; 
    delProfileImg();
}

function uploadImage() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    const imgPreview = document.getElementById('profile-update');

    if (file) {
        const formData = new FormData();
        formData.append("profile", file);

        // Show preview
        imgPreview.src = URL.createObjectURL(file);

       changeProImg(formData);
    }
}

function rechecker(){
    const uploadBtnId = document.getElementById("uploadBtnId");
    if(disName || newEmail){
        console.log("Good to go")
        uploadBtnId.disabled = false;
    }
    else{
        console.log("Not good to go");
        uploadBtnId.disabled = true;
    }
    console.log({disName, newEmail})
}

function stageUsername(mainVal, val) {
    console.log({mainVal, val});
    if (mainVal == val){
        disName = false;
    }
    else{
        disName = true
    }
    rechecker();
}
function stageEmail(mainVal, val) {
    console.log({mainVal, val});
    if (mainVal == val){
        newEmail = false;
    }
    else{
        newEmail = true
    }
    rechecker();
}
   
function updateChanges() {
    const toUpload = {
        username: document.getElementById("displayName").value,
        email: document.getElementById("displayEmail").value
    };
    
    updateUserInfo(toUpload)
}

function deactivateAcc(){
    const htmlToPop = `
        <br>Deactivation of this account will make this account unusable for atleast a month, before it can be reactivated.<br><br/>
        <span class="flex-right"><button class="edit-btn" onclick="openPop('')">Cancel</button><button class="delete-btn" onclick="deactivateMyAcc()">Deactivate</button></span>
        </b>
    `;
    openPop(htmlToPop)
}


async function accSetFunc(){
    console.log("Wait...")
    try {
        const userInfo = await signIn();
        // userInfo = await getThisUser(currentUser.uid);
         console.log({userInfo})
        
    
 
    accHtml.innerHTML = `
         <div class="acc-wrap">
                <div class="edit-img">
                    <span class="phtot-det">
                        <span class="icon-edit">
                            <b class="center-Text">A</b>
                            <img id="profile-update" src="${userInfo.profile}" onerror="this.style.display='none'" alt="">
                        </span>
                    </span>
                        <div class="edit-profile-opt">
                            <button class="default-btn" onclick="triggerFileInput()">Change</button>
        <button class="remove" onclick="removeImage()">Remove</button>
         <input type="file" id="file-input" accept="image/*" style="display: none;" onchange="uploadImage()" />

                    </div>
                </div>
                <div class="edits">
                    <span class="edits-list">
                        <label for="">Default Name</label>
                        <input type="text" id="defaultName" value="${userInfo.name}" disabled>
                        <sup><small class="red">This name can't be edited</small></sup>
                    </span>
                    <span class="edits-list">
                        <label for="">Display Name</label>
                        <input type="text" id="displayName" oninput="stageUsername('${userInfo.username}', this.value)" value="${userInfo.username}">
                        <sup><small>This name would be viewed by everyone</small></sup>
                    </span>
                    <span class="edits-list">
                        <label for="">Email</label>
                        <input type="text" id="displayEmail" value="${userInfo.email ? userInfo.email : ""}" placeholder="addyouremail@email.com" oninput="stageEmail('${userInfo.email}', this.value)">
                        <sup><small></small></sup>
                    </span>
                </div>
                <div class="upload-section">
                    <button class="default-btn" disabled id="uploadBtnId" onclick="updateChanges()">Update Changes</button>
                </div>


                <div class="acc-delete">
                    <div class="acc-list">
                        <span onclick="setTheme()" id="themeId">
                            <span>Dark Theme</span>
                            <i class="fa fa-moon"></i>
                        </span>
                        <a href="transaction.html">
                            <span>Transaction History</span>
                            <i class="fa fa-coins"></i>
                        </a>
                        <a href="report.html">
                            <span>Report</span>
                            <i class="fa fa-flag"></i>
                        </a>
                        <span onclick="deactivateAcc()" class="red">
                            <span>Deactivate Account</span>
                            <i class="fa fa-pause"></i>
                        </span>
                    </div>
                </div>
            </div>

    `
    
} catch (error) {
    console.error(error)
    timeOutLoad(accHtml, true, 50000);
  }
 
};

accSetFunc();