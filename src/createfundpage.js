let previousBtn = null; 
let currentFunc = selectCardFunc();
const imgUpURL = 'null';
const SecondaryKeys = generateRandomString();

//information need
let selectedCat = "";
let fundOwner = "";
let goalAmt = 0;
var imgsToUpload = [];
let fundTitle = "";
let fundDesc = "";


var currentStep = 1;
function goToStep(val) {
    const stepVal = currentStep + val;
    currentStep = stepVal;
    if (stepVal >= 1 && stepVal <= 5) {
        currentPlace.innerText = stepVal+"/5";
    }
    const nextBtn = document.querySelector('.nav-button-next');
    
    
    nextBtn.classList.add("disabled");
        nextBtn.disabled = true;

        if (currentStep > 1) {
            document.querySelector('.nav-button-prev').classList.remove('false');
        }
        else{
            document.querySelector('.nav-button-prev').classList.add('false');
        }
    
    
    //stages
    
    if(currentStep == 1) currentFunc = selectCardFunc();
    if (currentStep == 2) currentFunc = selectFundOwnerFunc();
    if (currentStep == 3) currentFunc = setGoalAmtFunc();
    if (currentStep == 4){
        currentFunc = selectImgsFunc();
        nextBtnFund.textContent = "next";
        
    } 
    if (currentStep == 5) {
        currentFunc = titleAndDescFunc();
        nextBtnFund.textContent = "Create my fundraiser";
    }
    if (currentStep == 6) createFunds();
    
    
    createFundAccPage.innerHTML = createFundPageFunc();
}

function customNext(state) {
const nextBtn = document.querySelector('.nav-button-next');
  if (state) {
      nextBtn.classList.remove("disabled");
      nextBtn.disabled = false;
  }
    else{
      nextBtn.classList.add("disabled");
      nextBtn.disabled = true;
    }
       
}


function selectCategory(value, num) {
    const formClass = `category-button${num}`;

    if (value) {
        selectedCat = value;
        customNext(true);
        const eachBtn = document.querySelector(`.${formClass}`);
        
        if (previousBtn && previousBtn !== eachBtn) {
            previousBtn.style.background = 'var(--bgPlus)';
        }

                eachBtn.style.background = 'var(--lightGreen)';

                previousBtn = eachBtn;
    }
}

function listAllCat() {
    let toReturn = "";
    const cats = allCat;
    
    for(i=0; i < cats.length; i++){
        toReturn += `
            <button id="category-button" class="category-button${i}" onclick="selectCategory('Education', '${i}')">
                <i class="${cats[i].faClass}"></i><br>
                ${cats[i].name}</button>
        `
    }
    return toReturn;
}

//stage 1
function selectCardFunc() {
    return `
        <section class="fund-intro">
    <p class="intro-text">
      Begin your fundraising journey today on the #1 platform in the Pi Network —
      <i><strong>FundWithPi</strong></i>. Whether you're raising money for a cause, a project, or personal goals, we make it easy and fast.
    </p>
  </section>

  <section class="category-selection">
    <h2>Select a Category</h2>
    <p class="category-subtext">What category best describes your fundraising goal?</p>

    <div class="category-list">
      
      ${listAllCat()}
      
    </div>
  </section>
  
    `
}

//stage 2
let prevUserOwnElement = null;

function selectUserOwner(value, newElement) {
    if (prevUserOwnElement) {
        prevUserOwnElement.classList.remove('active');
        prevUserOwnElement.classList.add('inactive');
    }

    if (value) {
        fundOwner = value;
        customNext(true);
    }

    newElement.classList.remove('inactive');
    newElement.classList.add('active');
    prevUserOwnElement = newElement;
}



function selectFundOwnerFunc() {
    return `
        <div class="funds-owner">
            <h2>Who are you raising this funds for?</h2>
            <sup>This information helps us to advance the way your funds would be presented.</sup>
            
            <div class="wrap-owner">
                <span onclick="selectUserOwner('yourself', this)" class="owner inactive">
                    <i class="fa fa-user"></i>
                    <span class="main-texts">
                        <b> Yourself</b>
                        <small>Raise funds for your personal needs or goals.</small>
                    </span>
                </span>
                <span onclick="selectUserOwner('someone else', this)" class="owner inactive">
                    <i class="fa fa-users"></i>
                    <span class="main-texts">
                        <b>Someone Else</b> 
                        <small>Support a friend, family member, or loved one in need.</small>
                    </span>
                </span>
                <span onclick="selectUserOwner('charity', this)" class="owner inactive">
                    <i class="fa fa-hand-holding-heart"></i>
                    <span class="main-texts">
                        <b>Charity</b>
                        <small>Fundraise for a cause or nonprofit organization.</small>
                    </span>
                </span>
            </div>
        </div>
    `;
}



//stage 3


function setFundVal(val) {
    const input = document.getElementById('btn-fund-input');
    input.value = (parseInt(input.value) || 0) + val;
    updateTargetText();
    customNext(true);
}

function updateTargetText() {
    const input = document.getElementById('btn-fund-input');
    const target = document.getElementById('target-amount');
    goalAmt = input.value;
    target.textContent = parseInt(input.value) || 0;
    if (input.value <= 0 || !input.value) {
        customNext(false);
        console.log("hi")
    }
}

function setGoalAmtFunc() {
    return `
        <div class="wrap-fund-goal">
            <div>
                 <h1>Set Your Fundraising Goal</h1>
                <p>Choose how much Pi you want to raise for your cause. Select a quick amount or type your own.</p>

                
                <div class="add-opt">
                    <button onclick="setFundVal(50)">+50π</button>
                    <button onclick="setFundVal(100)">+100π</button>
                    <button onclick="setFundVal(200)">+200π</button>
                    <button onclick="setFundVal(500)">+500π</button>
                    <button onclick="setFundVal(1000)">+1,000π</button>
                    <button onclick="setFundVal(1500)">+1,500π</button>
                    <button onclick="setFundVal(2000)">+2,000π</button>
                </div>

                <div class="input-wrap">
                    <span>π</span>
                    <input 
                        id="btn-fund-input" 
                        type="number" 
                        value="" 
                        placeholder="Enter Amount." 
                        oninput="updateTargetText()"
                    >
                </div>                
                <p>Your target: <b><span id="target-amount">0</span></b></p>
            </div>
        </div>
    `;
}


// Stage 4

function openCoverInput() {
    const input = document.getElementById("cover-input");
    if (input) input.click();
}

function handleCoverImage(event) {
    const file = event.target.files[0];
    const img = queryClass("disCoverImg");
    const uploadImgBtns = queryClass('upload-img-btns');
    const imgHint = queryClass('imgHint');

    img.style.display = "block";
    uploadImgBtns.style.display = "none";
    imgHint.style.display = "block";

    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = function (e) {
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);

        // Set or replace the first index with the cover image file
        imgsToUpload.push(file);

        customNext(true);
    }

    console.log(imgsToUpload)
}


// multi images

let selectedFiles = []; // Store selected image files

function multiBtnFunc() {
    const input = document.getElementById("multi-input");
    if (input) input.click();
}

function handleMultiImages(event) {
    const previewContainer = document.getElementById("multi-preview-container");
    const counter = document.getElementById("multi-img-count");
    const files = Array.from(event.target.files);

    if (files.length + selectedFiles.length > 5) {
        alert("You can only select up to 5 images.");
        return;
    }

    files.forEach((file, index) => {
        if (file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const id = `${Date.now()}-${index}`;
                selectedFiles.push({ id, file });

                // Push to imgsToUpload if not already there
                imgsToUpload.push(file);

                previewContainer.innerHTML += `
                    <div class="preview-wrapper" id="img-${id}" style="position:relative; display:inline-block; margin:5px;">
                        <img src="${e.target.result}" style="width:100px; height:70px; border:1px solid #ccc; object-fit:cover;" />
                        <span onclick="removeImage('${id}')" class="closeBtnImg"><i class="fa fa-close"></i></span>
                    </div>
                `;

                counter.textContent = `${selectedFiles.length} image(s) selected`;
            };
            reader.readAsDataURL(file);
        }
    });
    console.log(imgsToUpload)

    event.target.value = "";
}

function removeImage(id) {
    const imgDiv = document.getElementById(`img-${id}`);
    if (imgDiv) {
        imgDiv.remove();

        const removed = selectedFiles.find(img => img.id === id);

        // Remove from selectedFiles
        selectedFiles = selectedFiles.filter(img => img.id !== id);

        // Remove matching file from imgsToUpload (by reference)
        if (removed && removed.file) {
            imgsToUpload = imgsToUpload.filter(file => file !== removed.file);
        }

        const counter = document.getElementById("multi-img-count");
        counter.textContent = `${selectedFiles.length} image(s) selected`;
    }
    console.log(imgsToUpload)
}





// Stage 5

let titleReady = false;
let descReady =  false;
function recheckTitleDesc() {
    if(titleReady && descReady){
        customNext(true);
    }
    else{
        customNext(false)
    }
}


function countTitleLen(val){
    titleLen = 60 - val.value.length;
    fundTitle = val.value;
    queryClass('titleLength').textContent = titleLen;
    if(val.value.length >= 10){
        titleReady = true;
        recheckTitleDesc();
    }
    else{
        titleReady = false;
        recheckTitleDesc();
    }
}
function updateTextArea(val) {
    fundDesc = val.value;
    if(val.value.length >= 150){
        descReady = true;
        recheckTitleDesc();
    }else{
        descReady = false;
        recheckTitleDesc();
    }
}



function titleAndDescFunc(){
    titleLen = 60;
    return `
        <div class="titleDesc-wrap">
            <div> 
                <h2>Tell us the purpose for this fundraising.</h2>
                <br/>
                <b>Provide a title for your fundraiser.</b>
                <div class="titleDesc-title">
                    <input type="text" maxlength="60" oninput="countTitleLen(this)" placeholder="My title is..."/>
                    <span class="titleLength">${titleLen}</span>
                </div>
                <sup><small>*Title length must be up to 10 letters long</small></sup>
                <br/>
                <br/>
                <div class="titleDesc-desc">
                    <b>Tell us more</b>
                    <br/>
                    <small>Make people get to know the reason for raising this funds, in other to get an advanced support from people willing to contribute.</small>
                    <div class="titleDescTextArea">
                        <textarea oninput="updateTextArea(this)" placeholder="State your description here."></textarea>

                    </div>
                <sup><small>*Description length must be up to 150 letters long</small></sup>

                </div>
                </div>
        </div>
    `
}


async function createFunds() {
    fullLoad(true, 'true');

    try {
        
    
    const userInfo = await signIn();
    const currentUser = userInfo.uid;
    console.log(currentUser);
    const formData = new FormData();

    formData.append("title", fundTitle);
    formData.append("description", fundDesc);
    formData.append("content", fundDesc);
    formData.append("goalAmount", goalAmt);
    formData.append("amountRaised", 0);
    formData.append("externals", SecondaryKeys);
    formData.append("withdrawable", 0);
    formData.append("donorsCount", 0);
    formData.append("organizer", [currentUser]); 
    formData.append("verifiedState", "pending");
    formData.append("category", selectedCat);
    formData.append("status", "pending");
    formData.append("deadline", "");

    // Append images properly
    if (imgsToUpload && imgsToUpload.length > 0) {
        imgsToUpload.forEach((img) => {
            formData.append("images", img);
        });
    }
    
    const createUpdate = {
        "objId": SecondaryKeys,
        "data" : []
    };
    const createDonor = {
        "objId": SecondaryKeys, 
        "data": []
     }
    postToDb(formData, createUpdate, createDonor);
   } catch (error) {
      console.error("Error")  
    }
}




function selectImgsFunc() {
    console.log("Run a")
    return `
        <div>
            <h1>Select a cover photo</h1>
            <small>This would help in describing your story. You can always change the photos when necessary.</small>

            <div id="cover-upload-container">
                <div class="img-wrap">
                    <img class="disCoverImg" src="" alt="" onclick="openCoverInput()" alt="Cover Photo" />
                   <sup> <small class="imgHint">*Click on the image to change it.</small></sup>
                </div>
                <button class="upload-img-btns" onclick="openCoverInput()">Upload a photo</button>
                <input type="file" accept="image/*" id="cover-input" style="display: none" onchange="handleCoverImage(event)" />
            </div>

            <h2>Select other images (optional)</h2>
            This could help you share more experience about the reason raising these funds.
            <br />
            <button class="default-btn" onclick="multiBtnFunc()" id="multi-btn">Select Multiple</button>
            <input type="file" accept="image/*" id="multi-input" multiple style="display: none" onchange="handleMultiImages(event)" />
            <sup class="red">*Maximum is 5</sup>


<div>
    <small id="multi-img-count" class="img-count">No image selected</small>
</div>

<div class="imgToUpload" id="multi-preview-container"></div>

            </div>
    `;
}








function createFundPageFunc() {
    return `
        <div class="fund-page-wrapper">
  ${currentFunc}
  
  
</div>
        </div>
        
    
    `
}
createFundAccPage.innerHTML = createFundPageFunc();