function listDataHere(data) {
   var returnData = "";
    for (i = 0; i < data.length; i++) {
        returnData += `
            <div>
                <div class="single-stuck-donor-obj">
                <span class="fa-solid fa-hand-holding-dollar"></span>
                <div class="single-stuck-detail">
                    <span>${data[i].userId}</span>
                    <sup><small> ${formatNumber(data[i]. amt)}</small></sup>
                </div>
            </div>
            </div>
        `
    }
     return returnData;
}

async function seeMoreObjList(title, dataId, type) {
    var returnData = `
      <div class="objList">
          
          <div class="obj-stuck-list">
              ${await listDataMsgHere(dataId, '${type == "text" ? "text" : "amt"}')}
          </div>
      </div>
    `;
    dialogFunc(returnData, title, true);
}



async function listDataMsgHere(dataId, type) {
    const dataRaw = await fetchDonorData(dataId);
    const data = dataRaw.data;
   var returnData = "";
    for (i = 0; i < data.length; i++) {

        returnData += `
            <div>
                <div class="single-stuck-donor-obj">
                <span class="fa-solid fa-hand-holding-dollar"></span>
                <div class="single-stuck-detail">
                    <span>${data[i].user[1]}</span>
                    ${type == "text" ? 
                        `<sup><small class="caps"> ${data[i].comments}</small></sup>`
                    :
                        `<sup><small> ${formatNumber(data[i].amt)}</small></sup>`
                    }
                </div>
            </div>
            </div>
        `
    }
     return returnData;
}
async function seeMoreMsgList(title, dataId, type) {
    var returnData = `
      <div class="objList">
          
          <div class="obj-stuck-list">
              ${await listDataMsgHere(dataId, type)}
          </div>
      </div>
    `;
    dialogFunc(returnData, title, true);
}
