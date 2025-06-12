function dialogFunc(htmlData, title, titleDis) {
    if (htmlData) {
        dialogWrap.innerHTML = `

            <div class="dialog-container">
               
                <div class="dialog-header ${titleDis}">
                <div class="dialog-title">
                  <h2>${title}</h2>
              </div>        
                <i id="dialog-i" onclick="dialogFunc('','')" class="fa fa-close"></i>
                </div>
                <div class="dialog-content">${htmlData}</div>
            </div>
        `;
        dialogWrap.style.display = "block";
        document.body.style.overflow = "hidden"; 
        blurDialog.style.display = "block";
        if (!titleDis) {
            // dialogWrap.style.top = "200px";
        }
        else{
            // dialogWrap.style.top = "200px";
        }
        
        
    } else {
        dialogWrap.style.display = "none";
        document.body.style.overflow = "auto";
        dialogWrap.innerHTML = ""; 
        blurDialog.style.display = "none";
    }
}


