

async function fundPageFunc() {

    wrapFundPage.innerHTML = fullLoad(true, 'mini 60');
    try {
        userInfo = await signIn();

        
        
        if (userInfo.fundraiser) {
        wrapFundPage.innerHTML = `
        <div>
           <div class="fundraising-banner">
  <img src="./assets/images/help.png" alt="Fundraising Assistance Icon" />
  <p>
    Begin your fundraising journey with <strong>fundWithPi</strong>, a trusted platform designed to empower individuals and organizations. Whether you're seeking support for medical needs, charitable initiatives, emergency relief, animal welfare, educational programs, or other causes close to your heart, our platform provides the tools and visibility to help your campaign succeed. 
  </p>
     </div>
        
               ${await fundRaisersTips(true)}
           </div>
           
        `
    }else{
        console.log("No account found");
 
        wrapFundPage.innerHTML = `${fundnoaccfunc()}`
    }

        } catch (error) {
            console.error(error)
        }

}

async function wrapFundFunc(){

    wrapFundPage.innerHTML = await fundPageFunc();
}
fundPageFunc();