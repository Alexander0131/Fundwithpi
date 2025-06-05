function optionList(){
    let toReturn = "";

    for (let i = 0; i < countries.length; i++) {
        const element = countries[i];
        toReturn += `<option>${element.name}</option>`
        
    }
    return toReturn;
}  
  
  
  async function cfaFunc(){
    try {
        const userInfo = await signIn();
   
        if(userInfo){
    toReturn = `
         <div class="cfa-container">
            <h1>Create Your Fundraising Account</h1>
            <form id="fundraisingForm">
              <label>Full Name:</label>
              <input type="text" id="fullName" required />
        
              <label>Username (Pi username):</label>
              <input type="text" id="username" value="${userInfo.name}" disabled />
        
              <label>Email:</label>
              <input type="email" id="email" required />
        
              
              <label>Country & Phone Number:</label>
              <div class="phone-input">
                 <select id="countrySelect" required>
                    ${optionList()}
                 </select>
                <span id="dialCode"></span>
                <input type="tel" id="phone" placeholder="000-000-000-000" required />
            </div>

        
              <label>Fundraiser Title:</label>
              <input type="text" id="fundraiserTitle" required />
        
              <label>Description:</label>
              <textarea id="description" rows="4" required></textarea>        
              <button type="submit" class="default-btn">Create Account</button>
            </form>
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
  