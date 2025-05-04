const API = "http://localhost:3000";

async function postToDb(formData, updateParam, donorParam) {
    console.log("Attempting post");
    fullLoad(true, true);

    try {
        const res = await axios.post(`${API}/funds/create`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        const resUpdate = await axios.post(`${API}/update/create`, updateParam);

        const resDonor = await axios.post(`${API}/donor/create`, donorParam);


        console.log("Posted successfully");
        fullLoad(false, false);
        window.location.href = "myfunds.html";
    } catch (error) {
        console.error("Post error:", error.response?.data || error.message);
        fullLoad(false, false);

    }
}

async function editToDb(formData, id) {
    console.log("Attempting post");
    fullLoad(true, true);

    try {
        const res = await axios.put(`${API}/funds/update/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        console.log("Edited successfully");
        // console.log(res.data);
        fullLoad(false, false);
        window.location.href = "myfunds.html";
    } catch (error) {
        console.error("Post error:", error.response?.data || error.message);
        fullLoad(false, false);

    }
}

async function getAllData() {
    try {
        const res = await axios.get(`${API}/funds`);
        // console.log(res.data.items)
        return res.data.items? res.data.items : rowData;
        // return rowData;
    } catch (error) {
        console.log(error)
    }
}


async function getFundByCat(theKey, theValue){
    try {
        const res = await axios.get(`${API}/funds/category?key=${theKey}&value=${theValue}&page=1`);
        return res.data.items;
    } catch (error) {
        console.log(error)
    }
};



// async function logAllData() {
//     const data = await getAllData();
//     console.log(data);
// }

// logAllData();


async function delSingleImg(img, dataId) {
    // get dataId
    fullLoad(true, true);

    try {
    console.log(img)
        const dataImg = await axios.get(`${API}/funds/${dataId}`);
        if(dataImg.data.images.includes(img)){
            console.log(getPublicId(img));
            console.log("The image dey");
            const delImg = await axios.delete(`${API}/funds/delete-image`, {
                data: { publicId: getPublicId(img) }
            });
            if (delImg) {
                // Reform the images array by filtering out the deleted image
                const reformImg = dataImg.data.images.filter(image => image !== img);
        
                // Update the DB with the new images array
                const editData = await axios.put(`${API}/funds/update/${dataId}`, {
                  images: reformImg
                });
                fullLoad(false, false);
                openPop(null);
                
                console.log("Updated data:", editData.data);
              }
        
              console.log("Image deleted:", delImg.data);
            }
             
    } catch (error) {
        console.log(error)
    }
    };

// --------------- donor crud start -----------------------//

    // fetch donor data
    async function fetchDonorData(id) {
        try {
            const res = await axios.get(`${API}/donor/${id}`);
            return res.data;

        } catch (error) {
              timeOutLoad(updateHtml, true, 100);

            console.log(error)
        }
    }


// --------------- donor crud End -----------------------//

// --------------- update crud start -----------------------//

// get method
async function getThisUpdate(id) {
    try {
        const res = await axios.get(`${API}/update/${id}`);
        return res.data;
    } catch (error) {
        
    }
}


// edit method
async function pushUpdateToAPI(id, data) {
    fullLoad(true)
    try {
        const res = await axios.put(`${API}/update/edit/${id}`, {data});
        document.getElementById("textareaUpdate").value = "";
        document.getElementById("shareBtnId").disabled = true;
        callDisUpdate();
        fullLoad(false)
    } catch (error) {
        fullLoad(false)
        
    }
}


// --------------- update crud End -----------------------//

