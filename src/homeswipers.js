function swiperContentFunc(data) {
  var toReturn = ""

  for (i = 0; i < data.length; i++) {
      
  
    toReturn +=  `
    <div class="swiper-slide">
          <div class="wrap-all-swiper">
              <div class="img-content">
                  <img src="${data[i].img}" alt="">
                  <button class="slide-desc">${data[i].pinned}</button>
              </div>
              <h5>${data[i].desc}</h5>
              <button class="opt-swiper-btn">${data[i].clickText} <i class="fa fa-chevron-right"></i></button>
             </div>
      </div>
      `;
    }
    
    return toReturn;
}

 









function homeSwiperFunc() {
    return `
     <div>
                    
            <h2>Feed</h2>
            <div class="swiper donate-mySwiper">
                
    <div class="swiper-wrapper" id="swiper-content">
        ${swiperContentFunc(newsData.reverse().slice(0,3))}
    </div>
  </div>
  </div>
    `
};

donateSwiper.innerHTML = homeSwiperFunc();