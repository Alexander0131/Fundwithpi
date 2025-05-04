function imgFormFunc(images) {
    if (!Array.isArray(images) || images.length === 0) return '';

    // Find the index of the image where current is true
    const startIndex = images.findIndex(img => img.current) || 0;

    // Generate Swiper slides
    const slides = images.map(img =>
        `<div class="swiper-slide"><img src="${img.img}" alt="Image"></div>`
    ).join('');

    // Swiper container HTML
    return `
        <div class="swiper-container">
            <div class="swiper-wrapper">${slides}</div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    `;
}

const formatImg = [
    {
        img: "hello.png",
        current: true 
    },
    {
        img: "hello.png",
        current: false
    },
    {
        img: "hello.png",
        current: false
    },
    {
        img: "hello.png",
        current: false
    }
]
//imgFormFunc(formatImg)

function imgWrapFunc(content, data) {
 
    setTimeout(() => {
        new Swiper('.swiper-container', {
            loop: true,
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            initialSlide: data.findIndex(img => img.current) || 0,
        });
    }, 100);
    
    
    var wrapContent = `
        <div class="wrap-img-format">
        ${content}
        </div>
    `
    return wrapContent;
}

function alignImg(data) {
    const sendFinal = imgWrapFunc(imgFormFunc(data), data);
dialogFunc(sendFinal, "")
}

//alignImg(formatImg)
