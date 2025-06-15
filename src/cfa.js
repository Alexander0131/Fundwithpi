let fName, email, desc, country, phone, fundraiserTitle;

function optionList(){
    let toReturn = "";

    for (let i = 0; i < countries.length; i++) {
        const element = countries[i];
        toReturn += `<option>${element.name}</option>`
        
    }
    return toReturn;
}  

// fullname
function setFName(value){
  value.style.border = "1px solid #ccc";
}

// Email
function setEmail(value){
  value.style.border = "1px solid #ccc";
}

// Phone
function setPhone(input) {
  input.value = input.value.replace(/\D/g, '');
  input.style.border = "1px solid #ccc";
}


// Fundraiser Title
function setFundTitle(value){
  value.style.border = "1px solid #ccc";
}

// Description
function setDesc(value){
  value.style.border = "1px solid #ccc";
}

async function pushChanges(){
  const fNameId = document.getElementById("fullName");
  const emailId = document.getElementById("email");
  const countryId = document.getElementById("countrySelect");
  const phoneId = document.getElementById("phone");
  const fundraiserTitleId = document.getElementById("fundraiserTitle");
  const descId = document.getElementById("description");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if(fNameId.value.length <= 5) {
    fNameId.style.border = '1px solid red';
  }
  if (!emailRegex.test(emailId.value)) {
    emailId.style.border = "1px solid red";
  } 
  if(countryId.value == "") {
    fNameId.style.border = '1px solid red';
  }
  if(phoneId.value.length == "") {
    phoneId.style.border = '1px solid red';
  }
  if(fundraiserTitleId.value.length <= 5) {
    fundraiserTitleId.style.border = '1px solid red';
  }
  if(descId.value.length <= 5) {
    descId.style.border = '1px solid red';
  }

  if(fNameId.value.length > 5 && emailRegex.test(emailId.value) && countryId.value != "" && phoneId.value.length != "" && fundraiserTitleId.value.length > 5 && descId.value.length > 5){

    const toEdit = {
      username: fNameId.value,
      email: emailId.value,
      country: countryId.value,
      fundraiser: true,
      phone: phoneId.value,
      desc: descId.value,
      fundraiserTitle: fundraiserTitleId.value
    }
   const updateThis = await updateUserInfo(toEdit)
    if(updateThis){
      window.location.href = 'fundraiser.html';
    }
  }

}

  
  
  async function cfaFunc(){
    wrapCfa.innerHTML = fullLoad(true, 'mini 60');
    try {
        const userInfo = await signIn();

        if(userInfo.fundraiser){
          window.location.href = 'fundraiser.html';
        }
   
        if(userInfo){
    toReturn = `
         <div class="cfa-container">
            <h1>Create Your Fundraising Account</h1>
            <div id="fundraisingForm">
              <label>Full Name:</label>
              <input type="text" id="fullName" oninput="setFName(this)" required />
        
              <label>Username (Pi username):</label>
              <input type="text" id="username" value="${userInfo.name}" disabled />
        
              <label>Email:</label>
              <input type="email" id="email" oninput="setEmail(this)" value="${userInfo.email ? userInfo.email : ""}" required />
        
              
              <label>Country & Phone Number:</label>
              <div class="phone-input">
                 <select id="countrySelect" required>
                    ${optionList()}
                 </select>
                <span id="dialCode"></span>
                <input type="tel" id="phone" oninput="setPhone(this)" placeholder="000-000-000-000" required />
            </div>

        
              <label>Fundraiser Title:</label>
              <input type="text" id="fundraiserTitle" oninput="setFundTitle(this)" required />
        
              <label>Description:</label>
              <textarea id="description" oninput="setDesc(this)" rows="4" required></textarea>        
              <button onclick="pushChanges()" class="default-btn">Create Account</button>
            </div>
            <div id="resultMessage"></div>
          </div>

    `;
}
} catch (error) {
        console.error(error)
}

    wrapCfa.innerHTML = toReturn;
  }

  cfaFunc();
  