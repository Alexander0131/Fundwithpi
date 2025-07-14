function homeHead() {
    return `
        <div class="head-section">
            <img class="head-img" src="./assets/images/help.png" alt="">
            <div class="head-details">
                <small class="small-text">We Rise by lifting others</small>
                <h4>Helping is Resiprocal</h4>
            </div>

            <div class="head-don">
                Donations are made from the heart, make something from your heart with just a click.
                <br/>
                <a href="donationlist.html?q=all" class="don-btn">Donate</a>
            </div>
        </div>
    `
};
headWrap.innerHTML = homeHead();