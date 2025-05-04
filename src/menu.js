

function openMenu(state) {
    if(state) {
        menuContainer.style.marginRight = "0px";
        menuCover.style.display = 'block';
        body.style.overflow = 'hidden';
    }
    else{
        menuContainer.style.marginRight = "-100vw";
        menuCover.style.display = 'none';
        body.style.overflow = 'scroll';
    }
}






function menuFunc() {





    menuWrap.innerHTML = `
        <div class="menu-container" id="menu-container">
            <div class="close-menu">
                <i onclick="openMenu(false)" class="fa fa-x"></i>
            </div>
            <div class="menu-user-account">
                <a class="menu-account-wrap" href="#">
                    <div class="menu-account-profile">
                        <div class="menu-profile-img-wrap">
                            <span class="menu-img-space" id="menu-img-letter">K</span>
                            <img src="./assets/images/sample.jpeg" class="menu-img-space" alt="" id="menu-profile-img" onload="changeImg('menu-profile-img')">
                        </div>
                        <p>
                            Karl
                        </p>                    
                    </div>
                    <i class="fa fa-chevron-right"></i>
                </a>
                <a class="menu-account-settings" href="#">
                    <span>
                        <b>Account Settings</b>
                    </span>
                    <i class="fa fa-chevron-right"></i>
                </a>
                
             </div>
                <hr>
            <div class="menu-all">
                <a href="donationlist.html">
                    <span>
                        <b>Donate</b>
                        <small>Extend your support to fundraiser.</small>
                    </span>
                    <i class="fa fa-chevron-right"></i>
                </a>
                <button onclick="fundRaisersTips(false)" href="#">
                    <span>
                        <b>Fundraise</b>
                        <small>Tips and hints.</small>
                    </span>
                    <i class="fa fa-chevron-right"></i>
                </button>
                <a href="about.html">
                    <span>
                        <b>About</b>
                        <small>Understand how it works.</small>
                    </span>
                    <i class="fa fa-chevron-right"></i>
                </a>
                <a href="#">
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
                <button>
                    <span>
                        <b>Sign in</b>
                        <small></small>
                    </span>
                    <i class="fa fa-chevron-right"></i>
                </button>
            </div>
            <div class="start-fund-menu">
                <a href="#">Start FundWithPi</a>
            </div>
        </div>
        <span onclick="openMenu(false)" class="menu-cover" id="menu-cover"></span>
    `;
    
    menuContainer = document.getElementById('menu-container');
    menuCover = document.getElementById('menu-cover');
}
 menuFunc();


