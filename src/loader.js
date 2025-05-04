function fullLoad(state, action) {
    let toReturn;
    if(action != 'mini'){

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
    }else{
        toReturn = `
            <div id="full-load" class='full-load false'>
            <div class="main-load">
            <div class="loader"></div>
            </div>
            </div>
        `;
    }
   

    return toReturn;
}

// fullLoad(true, true)
// fullLoaderHtml.innerHTML = fullLoad(false);


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

