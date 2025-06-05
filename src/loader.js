function fullLoad(state, action) {
    let toReturn;
    if(action.includes('mini')){
        var cssheight = action.split(" ")[1];
        console.log({cssheight})
        toReturn = `
        <div id="full-load" class='full-load false' style="height:${cssheight}vh">
        <div class="main-load">
        <div class="loader"></div>
        </div>
        </div>
    `;

    }else{
       
        if (state){
            
            fullLoaderHtml.innerHTML = `
            <div id="full-load" class='full-load true'>
            <div class="main-load">
            <div class="loader"></div>
            </div>
            </div>
            `;
        }
        else{
            fullLoaderHtml.innerHTML = "";
        }
    }
   

    return toReturn;
}

// fullLoad(true, true)
// fullLoaderHtml.innerHTML = fullLoad(false);
if (document.getElementById("miniload")){
    document.getElementById("miniload").innerHTML = fullLoad(true, 'mini')
}

let timeoutHandle = null;

function timeOutLoad(id, timeOut, time) {
    if (timeOut) {
        timeoutHandle = setTimeout(() => {
            id.innerHTML = `
                <div class="timeout-message">
                    Your session has timed out. Please check your internet connection and refresh.
                </div>
            `;
        }, time);
    } else {
        if (timeoutHandle) {
            clearTimeout(timeoutHandle);
            timeoutHandle = null;
        }
        // innerHTML is untouched here
    }
}

