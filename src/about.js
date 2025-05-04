function abtPageFunc() {
  const dataToUse = abtData;
    return `
        <div class="about-page">
            
            <img src="${dataToUse.img}" alt="">
            
            <div class="abt-text">
             <h2>${dataToUse.title}</h2>

<small><sub>${dataToUse.desc}</sub></small>
<br>
  ${dataToUse.content}
            </div>
            
        </div>
    `;
}
abtPage.innerHTML = abtPageFunc();