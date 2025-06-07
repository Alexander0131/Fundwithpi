function headerFunc() {
    return `
        <div class="header-row">
            <a href="s.html"><span class="fa fa-search"></span></a>
          <a href="./createfundraiseraccount.html"><span class="site-logo"><img src="./assets/images/logo.png" alt="logo"></span></a>
            <span onclick="openMenu(true)" class="fa fa-bars"></span>
        </div>
    `
}

getHeader.innerHTML = headerFunc();
