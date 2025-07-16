

function openMenu(state) {
    if(state) {
        if(menuContainer) menuContainer.style.marginRight = "0";
        if (menuCover) menuCover.style.display = 'block';
        body.style.overflow = 'hidden';
    }
    else{
        if(menuContainer) menuContainer.style.marginRight = "-100vw";
        if (menuCover) menuCover.style.display = 'none';
        body.style.overflow = 'scroll';
    }
}



async function menuAcc() {
     let toReturn = fullLoad(true, 'mini');

    try {
     userInfo = await signIn();
} catch (error) {

    // const userInfo = localStorage.getItem('userInfo');
     userInfo = {
        "_id": 1,
        "username" : "",
        "role": "void"
    }
    console.error(error)
}
    if(userInfo){
        toReturn = `
         <div class="menu-user-account">
            ${userInfo.username ?  `
                <button class="menu-account-wrap" href="#">
                    <div class="menu-account-profile">
                        <div class="menu-profile-img-wrap">
                           <span class="menu-img-space" id="menu-img-letter">
  ${userInfo.username.split(" ")[0][0] + (userInfo.username.split(" ")[1] ? userInfo.username.split(" ")[1][0] : '')}
</span>

                            <img src="${userInfo.profile}" class="menu-img-space" alt=""
                            id="menu-profile-img" onload="changeImg('menu-profile-img')"/>
                        </div>
                        <p class="caps" id="menu-profile-name">
                            ${userInfo.name}
                        </p>                    
                    </div>
                </button>
                
                <a class="menu-account-settings" href="account-settings.html">
                    <span>
                        <b>Account Settings</b>
                    </span>
                    <i class="fa fa-chevron-right"></i>
                </a>
                
                <hr class="hr">`
                    : ""
                }
             </div>
        `
    }
    return toReturn;
}  


 async function menuFunc() {
    //  fullLoad(true, 'true');



    menuWrap.innerHTML = `
        <div class="menu-container" id="menu-container">
            <div class="close-menu">
                <i onclick="openMenu(false)" class="fa fa-x"></i>
            </div>
           
                ${ await menuAcc()}


            <div class="menu-all">
                <a href="index.html">
                    <span>
                        <b>Home</b>
                        <small>Go to home</small>
                    </span>
                    <i class="fa fa-chevron-right"></i>
                </a>
                <a href="donationlist.html">
                    <span>
                        <b>Donate</b>
                        <small>Extend your support to fundraiser.</small>
                    </span>
                    <i class="fa fa-chevron-right"></i>
                </a>
                <a href="fundraiser.html">
                    <span>
                        <b>Fundraise</b>
                        <small>Tips and hints.</small>
                    </span>
                    <i class="fa fa-chevron-right"></i>
                </a>
                ${userInfo.roles == "admin" ?
                    `
                    <a href="dashboard.html">
                        <span>
                            <b>Dashoard</b>
                            <small>Control users activities</small>
                        </span>
                        <i class="fa fa-chevron-right"></i>
                    </a>
                    `
                    : 
                    ""
                }
                <a href="about.html">
                    <span>
                        <b>About</b>
                        <small>Understand how it works.</small>
                    </span>
                    <i class="fa fa-chevron-right"></i>
                </a>
                <a href="tnc.html">
                    <span>
                        <b>Terms & Conditions</b>
                        <small>Step by steps guide on how it works.</small>
                    </span>
                    <i class="fa fa-chevron-right"></i>
                </a>
                <a href="#">
                    <span>
                        <b>Help Centre</b>
                        <small>Get our support.</small>
                    </span>
                    <i class="fa fa-chevron-right"></i>
                </a>
            </div>
            ${userInfo.fundraiser  ? "" : `
            <div class="start-fund-menu">
                <a href="fundraiser.html">Start FundWithPi</a>
            </div>
            `}
            <br/>
            <br/>
            <br/>
        </div>
        <span onclick="openMenu(false)" class="menu-cover" id="menu-cover"></span>
    `;
    
    menuContainer = document.getElementById('menu-container');
    menuCover = document.getElementById('menu-cover');
}
 menuFunc();


