function feedContentFunc(dataRaw) {
  var toReturn = "";
  
  // Merge dataRaw with remaining sampleData, and limit to 5 total items
  const combinedData = dataRaw.concat(sampleData).slice(0, 3);

  for (let i = 0; i < combinedData.length; i++) {
    const dataPro = combinedData[i];

    toReturn += `
      <div class="feed-slide">
        <div class="wrap-all-feed">
          <div class="img-content">
            <img src="${dataPro.images[0]}" alt=""/>
            <button class="slide-desc">${dataPro.verifiedState}</button>
          </div>
          <div class="feed-mid-wrap">
          <div class="det">
            <h5>${dataPro.title}</h5>
            ${dataPro.verifiedState != "sample" ? `
            <a class="button" href="/f.html?q=${dataPro._id}" class="opt-swiper-btn">
              See More <i class="fa fa-chevron-right"></i>
            </a>
            ` : ``}
            </div>
            <p class="feed-desc">${dataPro.description}</p>
          </div>

        </div>
      </div>
    `;
  }

  return toReturn;
}

 









async function homeFeedFunc() {
    const homeSupportRaw = await getAllData();
    const homeSupport = homeSupportRaw.filter(i => i.organizedfor == "global" && i.verifiedState == "active");
    var toReturn = `
     <div>
                    
            <h2>Featured topics</h2>
            <div class="feed donate-feed">
                
    <div class="feed-wrapper" id="feed-content">
        ${feedContentFunc(homeSupport.reverse().slice(0,3))}
    </div>
  </div>
  </div>
    `;

    donateFeed.innerHTML = toReturn;
};

homeFeedFunc();