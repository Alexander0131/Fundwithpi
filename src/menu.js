
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



async function menuAcc(userInfoMenu) {

    const menuAccId = document.getElementById('menuAcc');
    let toReturn = fullLoad(true, 'mini 10');
    fullLoad(false, '')


     
         
         console.log({userInfoMenu})

    if(userInfoMenu){
        toReturn = `
         <div class="menu-user-account">
            ${userInfoMenu.username ?  `
                <button class="menu-account-wrap">
                    <div class="menu-account-profile">
                        <div class="menu-profile-img-wrap">
                           <span class="menu-img-space" id="menu-img-letter">
  ${userInfoMenu.username.split(" ")[0][0] + (userInfoMenu.username.split(" ")[1] ? userInfoMenu.username.split(" ")[1][0] : '')}
</span>

                            <img src="${userInfoMenu.profile}" class="menu-img-space" alt=""
                            id="menu-profile-img" onload="changeImg('menu-profile-img')"/>
                        </div>
                        <p class="caps" id="menu-profile-name">
                            ${userInfoMenu.name}
                        </p>                    
                    </div>
                </button>
                
                <a class="menu-account-settings" href="account-settings.html">
                    <span>
                        <b>Account Settings</b>
                    </span>
                    <i class="fa fa-chevron-right"></i>
                </a>
                ${userInfoMenu.roles == "admin" ?
                    `
            <div class="menu-all">
                    <a href="dashboard.html">
                        <span>
                            <b>Dashoard</b>
                            <small>Control users activities</small>
                        </span>
                        <i class="fa fa-chevron-right"></i>
                    </a>
                    </div>
                    `
                    : 
                    ""
                }
                <hr class="hr">`
                    : ""
                }
             </div>
        `
    }
   
     
    return toReturn;
}  


  async function menuFunc() {

   
        menuWrap.innerHTML = `
        <div class="menu-container" id="menu-container">
            <div class="close-menu">
                <i onclick="openMenu(false)" class="fa fa-x"></i>
            </div>
           
                <div id="menuAcc"></div>


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
           
            <br/>
            <br/>
            <br/>
        </div>
        <span onclick="openMenu(false)" class="menu-cover" id="menu-cover"></span>
    `;
    
    
    menuContainer = document.getElementById('menu-container');
    menuCover = document.getElementById('menu-cover');
    // fullLoad(true, '')
    
    try {
        const userInfoMenu = await signIn();
        const theTempUID = localStorage.getItem("tempUID");
        
        console.log(theTempUID)
        
        if(theTempUID != "null"){

            menuWrap.innerHTML = `
        <div class="menu-container" id="menu-container">
            <div class="close-menu">
                <i onclick="openMenu(false)" class="fa fa-x"></i>
            </div>
           
                <div id="menuAcc">${await menuAcc(userInfoMenu) }</div>


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
           
            <br/>
            <br/>
            <br/>
        </div>
        <span onclick="openMenu(false)" class="menu-cover" id="menu-cover"></span>
    `;
    
    
    menuContainer = document.getElementById('menu-container');
    menuCover = document.getElementById('menu-cover');




        }else{
        fullLoad(true, '')

        }
    }
    catch (error) {
        fullLoad(true, '')

        console.log(error)
    }












}
 menuFunc();
