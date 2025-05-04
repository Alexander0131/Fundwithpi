function openLocal(state) {
console.log('hello')
    if(state) {
        cookiesContent.style.marginBottom = "0px";
        blurCookies.style.display = 'block';
        
    }
    else{
        cookiesContent.style.marginBottom = "-100vw";
        blurCookies.style.display = 'none';
        body.style.overflow = 'scroll';
    }
}

function notInterested() {
    openLocal(false);
    localStorage.setItem("allowcookies", "never");
}


function acceptCookieFunc() {
   
   localStorageAccess.innerHTML = `
      <div class="local-s-space" id="local-s-space">
            <div id="blur-cookies" class="blur-cookies"></div>
            <div class="cookies-content" id="cookies-content">                            
                <p>This app uses cookies to enhance its speed and performance, ensuring a smoother and more efficient experience. By allowing cookies, you enable us to optimize functionality and provide you with the best possible service. Kindly allow cookies for an improved user experience.

</p>
                <br>
                <div class="cookies-btn">
                <button onclick="notInterested()">Not interested</button>
                <button onclick="acceptCookies(true)" class="allow-cookies">Allow Cookies</button>
             </div>
           </div>
           
        </div>
    `;
    body.style.overflow = 'hidden';
    cookiesContent = document.getElementById("cookies-content");
    blurCookies = document.getElementById("blur-cookies");
    
    
    
};


function callLocalAcceptance() {
    var checkState = localStorage.getItem("allowcookies");
    if (checkState || !checkState == "never") {
        setTimeout(() => {
            acceptCookieFunc();
        }, 5000)
    }
}
   callLocalAcceptance();
function acceptCookies(state) {
    if (state) {
        localStorage.setItem("allowcookies", true);
        openLocal(false);
    }
}

