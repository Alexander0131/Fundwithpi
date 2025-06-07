async function displayAcc(userId){
    let toReturn;

    try {
        
   
    const userInfo = await signIn()


    toReturn = `
        <div>
            <sub>Organizer: </sub>

            <div class="fund-user-account">
                <button class="menu-account-wrap" href="#">
                    <div class="menu-account-profile">
                        <div class="menu-profile-img-wrap">
                           <span class="menu-img-space" id="menu-img-letter">
  ${userInfo.username.split(" ")[0][0] + (userInfo.username.split(" ")[1] ? userInfo.username.split(" ")[1][0] : '')}
</span>

                            <img src="${userInfo.profile}" class="menu-img-space" alt=""
                            id="menu-profile-img" onload="changeImg('menu-profile-img')">
                        </div>
                        <p class="caps" id="menu-profile-name">
                            ${userInfo.name}
                        </p>                    
                    </div>
                </button>
                
             </div>
        </div>
    `
    return toReturn;
} catch (error) {
        
}
}