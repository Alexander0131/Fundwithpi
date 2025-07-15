
const currency = "π";
const loggedIn = false;
// const fundraiserAcc = false;
var titleLen = 60;
var userId = null;
var theme = localStorage.getItem("theme") || "light"; 
body.className = theme;


// Load pie
function loadPie(){
 const loadPieId =  document.getElementById("loadPie");
 if (loadPieId) {
     loadPieId.innerText = currency;
 }
 
}
loadPie();

//formation of numbers
function formatNumber(num) {
  if (num < 1000) return num.toString();
  if (num < 1000000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'm';
}

// get percentage 
function getPercent(total, value) {
  return Math.round((value / total) * 100);
}

function changeImg(theIdRaw) {
    var theId = document.getElementById(theIdRaw);
    theId.style.opacity = "1";
}

function getQueryValue() {
    const params = new URLSearchParams(window.location.search);
    return params.get('q'); 
}

//query class
function queryClass(value){
  return document.querySelector('.' + value);
}

// ---- Get date start ---- //
function getCurrentDateString(params) {
  const currentDate = new Date();

  if (typeof params === "number" && !isNaN(params)) {
    currentDate.setDate(currentDate.getDate() + params);
  }

  return currentDate.toISOString();
}

// ---- Get date end ---- //

// ---- deconstruct date start ---- //
function formatMongoDateString(dateStr) {
  const date = new Date(dateStr);
  
  const day = String(date.getDate()).padStart(2, '0');
  const month = date.toLocaleString('default', { month: 'long' }); 
  const year = date.getFullYear();

  return `${day} ${month} ${year}`; 
}
// ---- deconstruct date end ---- //

// app.js
//Pi.init({ version: "2.0", sandbox: true });

// circle 
function circleProgress(goalAmt, amtRaised) {
  return `
    <div class="ctrl-progress-bar-wrap">
        <div class="ctrl-progress-bar">
           <div role="progressbar" aria-valuenow="${getPercent(goalAmt, amtRaised)}" aria-valuemin="0" aria-valuemax="100" style="--value: ${getPercent(goalAmt, amtRaised)}"></div>
        </div>
        <small>£${formatNumber(amtRaised)}</small>
      </div>
  `
}

// delete image
function confirmDel(img, dataId){
  const toReturn = `
    <div class="imgDel">
      <span><h2>Confirm Deletion of image</h2></span>
      <img src="${img}" alt=""/>
      <div>
        <button class="edit-btn" onclick="openPop(null)">Cancel</button>
        <button class="delete-btn" onclick="delSingleImg('${img}', '${dataId}')">Delete</button>
      </div>
    </div>
  `;
  openPop(toReturn);
}

// display all images...
function selectedImage(num, dataRaw) {
  const data = JSON.parse(dataRaw); // Fix the parsing
  var reCreateData = [];
  
  for (let b = 0; b < data.length; b++) {
      reCreateData.push({
          img: data[b],
          current: Number(num) == b // Ensure `num` is a number
      });
  }
  
  alignImg(reCreateData);
}

function loadThisImg(data, type, dataId) {
  var returnData = "";
  
  for (let a = 0; a < data.length; a++) {
      returnData += `
      ${type != "delete" ? `
          <img onclick='selectedImage(${a}, \`${JSON.stringify(data)}\`)' 
               src="${data[a]}" 
               alt="">
               ` :`
               <span class="wrap-load-img">
                <img onclick='selectedImage(${a}, \`${JSON.stringify(data)}\`)' 
               src="${data[a]}" 
               alt="">
               <button onclick="confirmDel('${data[a]}', '${dataId}')"><i class="fa fa-trash"></i></button>
               </span>
               `}
      `;
  }
  
  return returnData;
}

// get donors mini
async function donorMini(data, dataId, type){
  let toReturn = "helllo";

  toReturn = `
    <div class="donor-space">
            ${await getDonorsText(data.filter(i => i.comments != "").reverse().slice(0, 3), type)}

            <div>
                ${type == "text" ? 
                `<button class="see-more" onclick="seeMoreMsgList('What Donors Are Saying?', '${dataId}', '${type}')">See more</button>`
                :
                `<button class="see-more" onclick="seeMoreMsgList('How much are people raising?', '${dataId}', '${type}')">See more</button>`
                }
            </div>
        </div>
  `;

  return toReturn;
}

//get words of support 
async function getDonorsText(data, type) {
  var returnData = ""

  for (i = 0; i < data.length; i++) {
    const aUser = await getRandomUser(data[i].userId);
      returnData += `
        <div class="single-stuck-donor">
              <i class="fa-solid fa-hand-holding-dollar"></i>
              <div class="single-stuck-detail">
                 
                  ${type == "text" ? 
                    `<sup><small> ${data[i]. comments}</small></sup>`
                    :
                    ` <sup><small>${formatNumber(Number(data[i].amt))}</small></sup>`
                  }
              </div>
          </div>
      `
  }
  return returnData;
}



function seeMoreMsgList(id, type) {
  const donorsList = donorsData.filter(i => i.objId == id);
  
return seeMoreObjMsgList("Donor List", donorsList, type)
}

// Extract img id
function getPublicId(url){
  const parts = url.split('/');
  const fileWithExtension = parts.slice(-1)[0];
  const folder = parts.slice(-2)[0];
  const fileName = fileWithExtension.split('.')[0];
  return `${folder}/${fileName}`;
};

// Generate ids
function generateRandomString() {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  for (var i = 0; i < 20; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}


function setTheme() {
  state = theme == "light" ? "dark" : "light";
  var getCurrentState = localStorage.getItem("theme");
  localStorage.setItem("theme", state);
  document.getElementById("themeId").innerHTML = `<span class="caps">${state} Theme</span>
                            <i class="${state == "light" ? "fa fa-sun" : "fa fa-moon"}"></i>`
  theme = state;
  body.className = theme;
}

async function accountDeactivateCheck() {
  const checkAccState = await getThisUser();
  console.log(checkAccState);
  if(checkAccState.accountState.split("$$")[0] == "deactivated"){
    console.log("Account Deactivated");
    body.innerHTML = `
      <div class="flex-center deactivated">
      <div>
        <b>This Account have been deactivated</b><br/>
        <a href="reactivate.html" class="red">Reactivate now!</a>
      </div>

      </div>
    `
  }
}

function getTimeDifference(startTime, endTime) {
  const start = new Date(startTime);
  const end = new Date(endTime);

  const diffMs = end - start;

  if (diffMs <= 0) {
    return "Time is up!";
  }

  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffHours / 24);
  const hours = diffHours % 24;

  return `${days} day${days !== 1 ? 's' : ''} and ${hours} hour${hours !== 1 ? 's' : ''} left`;
}

function applauseFunc() {
  const applauseHtml = document.getElementById("applause");
  applauseHtml.innerHTML = `
  <h2>You're in good hands.</h2><br/>
  <p>
    As a trusted platform built on the Pi Network, we make fundraising simple, secure, and accessible. With transparent tools and a strong focus on trust and safety, you can confidently raise funds or support causes that matter.
  </p>`;
}
applauseFunc();

function closeNotier(){
  console.log("closing")
  const progresserId = document.getElementById("progresser");
  setTimeout(() => {

    progresserId.style.marginLeft = "0";
  }, 1000);
  setTimeout(() => {
    notifierHtml.style.marginRight = "50px";
  }, 8000);
  setTimeout(() => {
    notifierHtml.style.marginRight = "-500px";
  }, 8200);

 

}
 
function notifier(text){
    notifierHtml.style.marginRight = "0";
  notifierHtml.innerHTML = `
    <div>
      <div class="flex-row">
        <div class="notter">
          <div>${text}</div>
        </div>
        <span class="progress-bar">
          <span id="progresser"></span>
        </span>
      </div>
    </div>
  `;
  closeNotier()
}

// function accLocalStore(params) {
//   if (params == "get") {
//     const tempAcc = localStorage.getItem("thisuser");
//     const tempAccJson = JSON.parse(tempAcc);
//     return tempAccJson;
//   }
  
//   const tempAcc = localStorage.getItem("thisuser");
//   const tempAccJson = JSON.parse(tempAcc);
//   console.log("Acc gotten from temp");
//   const wrapAcc = { acc: tempAccJson.acc, count: tempAccJson.count + 1, update: tempAccJson.update};
//       localStorage.setItem("thisuser", JSON.stringify(wrapAcc));
// }


async function displayDonorAmt(link, type){
    let toReturn = fullLoad(true, 'mini')
    try {
        const toReturnRaw = await  donorMini((await fetchDonorData(link)).data, link, type);
        const checkDonorLen = (await fetchDonorData(link)).data;
        if(checkDonorLen.length > 0) {
            toReturn = `<h4>${type != 'text' ?'Donations' : 'Words of support'} (${formatNumber(checkDonorLen.length)})</h4>  ${toReturnRaw}`;
        }
        else{
            toReturn = ""
        }
    } catch (error) {
        console.log(error)
    }
    return toReturn;
}