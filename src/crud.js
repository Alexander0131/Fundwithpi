// const API = "http://localhost:3000";
const API = "https://fund-backend-gold.vercel.app";

async function postToDb(formData, updateParam, donorParam) {
    console.log("Attempting post");
    fullLoad(true, 'true');

    try {
        const res = await axios.post(`${API}/funds/create`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        const resUpdate = await axios.post(`${API}/update/create`, updateParam);

        const resDonor = await axios.post(`${API}/donor/create`, donorParam);


        console.log("Posted successfully");
        fullLoad(false, 'false');
        window.location.href = "myfunds.html";
    } catch (error) {
        console.error("Post error:", error.response?.data || error.message);
        fullLoad(false, 'false');

    }
}

async function editToDb(formData, id) {
    console.log("Attempting post");
    fullLoad(true, 'true');

    try {
        const res = await axios.put(`${API}/funds/update/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        console.log("Edited successfully");
        // console.log(res.data);
        fullLoad(false, 'false');
        // window.location.href = "myfunds.html";
    } catch (error) {
        console.error("Post error:", error.response?.data || error.message);
        fullLoad(false, 'false');

    }
}

async function getOneFund(params) {
    try {
        const res = await axios.get(`${API}/funds/${params}`);
        return res.data;
    } catch (error) {
        console.error(error)
        
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
    fullLoad(true, 'true');

    try {
    console.log(img)
        const dataImg = await axios.get(`${API}/funds/${dataId}`);
        if(dataImg.data.images.includes(img)){
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
                fullLoad(false, 'false');
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
    fullLoad(true, 'true');
    try {
        const res = await axios.put(`${API}/update/edit/${id}`, {data});
        document.getElementById("textareaUpdate").value = "";
        document.getElementById("shareBtnId").disabled = true;
        callDisUpdate();
        fullLoad(false, 'false')
    } catch (error) {
        fullLoad(false, 'false')
        
    }
}


// --------------- update crud End ----------------------- //

// Handle users start
// --------------- get user start ----------------------- //

async function getThisUser() {
    try {
        const res = await axios.get(`${API}/user/user/${currentUser.uid}`);

        return res.data;
    } catch (error) {
        console.log(error)
    } 
}

// --------------- get user end ----------------------- //


// --------------- get random start ----------------------- //

async function getRandomUser(params) {
    try {
        const res = await axios.get(`${API}/user/user/${params}`);

        return res.data;
    } catch (error) {
        console.log(error)
    } 
}

// --------------- get random user end ----------------------- //
// --------------- user profile picture Start ----------------------- //

async function changeProImg(params) {
    fullLoad(true, true);
    try {
        const userInfo = await getThisUser(currentUser.uid);
        if(userInfo.profile){
            console.log("Deleting older Image")
            const delOld =  await delProfileImg();
                const res = await axios.put(`${API}/user/edit/img/${currentUser.uid}`, params);
                document.getElementById("menu-profile-img").src = res.data.profile;
            
        }
        else{
            const res = await axios.put(`${API}/user/edit/img/${currentUser.uid}`, params);
                document.getElementById("menu-profile-img").src = res.data.profile;
            }
            fullLoad(false, false)
        } catch (error) {
        fullLoad(false, false)
        console.log(error)
    }
}


// ---------------  user profile picture end ----------------------- //
// ---------------  edit user detail start ----------------------- //
async function updateUserInfo(data) {
    fullLoad(true, 'true');
    try {
        const res = await axios.put(
            `${API}/user/update/${currentUser.uid}`,
            data, // regular JS object
            {
                headers: {
                    "Content-Type": "application/json" // optional; Axios sets this automatically
                }
            }
        );
        fullLoad(false, 'false');
        return true;

    } catch (error) {
        console.error("Update failed:", error.response?.data || error.message);
        fullLoad(false, 'false');
        return false;
    }
}

// ---------------  edit user detail end ----------------------- //

















// ---------------  delete profile picture start --------------------- //


async function delProfileImg() {
    // get dataId
    fullLoad(true, true);
    console.log("Attempting Delete")
    
    try {
        const dataImg = await axios.get(`${API}/user/${currentUser.uid}`);
        console.log({dataImg}) 
        if(dataImg.data.profile){  
            const delImg = await axios.delete(`${API}/user/delete-image`, {
                data: { publicId: getPublicId(dataImg.data.profile) }
            });
            if (delImg) {
                // Reform the images array by filtering out the deleted image   
                
                // Update the DB with the new images array
                const editData = await axios.put(`${API}/user/update/${currentUser.uid}`, {
                    profile: null 
                });
                fullLoad(false, false);  
                
               
            }
           
        }
    fullLoad(false, false);

        
    } catch (error) {
    fullLoad(false, false);
    console.log("Eror")
    console.error(error)
    }
};

// ---------------  delete profile picture end ----------------------- //



// ------------ deactivate user start   ----------  //

async function deactivateMyAcc() {
    fullLoad(true, true);
    openPop("");
    try {
        const res = await axios.put(`${API}/user/update/${currentUser.uid}`, {accountState: `deactivated$$${getCurrentDateString(3)}`});
        fullLoad(false, false);
        accountDeactivateCheck();
        console.log("Account deactivated succesfully");
    } catch (error) {
        fullLoad(false, false);
        console.log(error);
    }
}


// Handle users ends


// Handle transaction start

// get All transaction start
async function getAllTrans() {
    try {
        await signIn();
        const res = await axios.get(`${API}/transaction/${currentUser.uid}`);
        console.log("first");
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

// get All transaction ends




// Handle transactions ends
// Handle users ends
// Handle users ends
// Handle users ends



// Report crud //

// post report start //

async function postReport(params) {
    fullLoad(true, 'true');

    const issueType = document.getElementById("issueType");
    const desc = document.getElementById("description");
    const reportTextarea = document.getElementById("report-textarea");
    const reportEmail = document.getElementById("report-email");
    try {

        const res = await axios.post(`${API}/report/`, params);
        if (issueType) issueType.value = "";
        if (desc) desc.value = "";
        if (reportTextarea) reportTextarea.value = "";
        if (reportEmail) reportEmail.value = "";
    fullLoad(false, 'false')
    
} catch (error) {
        fullLoad(false, 'false')
        console.log(error)
    }
};



async function makePayment(objId, amount, memo, purpose) {
    await signIn();
    console.log("Trying payment");
    const currentUserId = currentUser.uid;
    const paymentData = {
      amount,
      memo,
      metadata: { productId: objId }
    };
    console.log({paymentData})
  
    try {
      window.Pi.createPayment(paymentData, {
        onReadyForServerApproval: async function (paymentId) {
          console.log("Ready for server approval:", paymentId);
          try {
            await axios.post(`${API}/payments/approve`, { paymentId, amount, purpose, currentUserId });
          } catch (err) {
            console.error("Error during server approval:", err);
          }
        },
  
        onReadyForServerCompletion: async function (paymentId, txid) {
          console.log("Ready for server completion:", paymentId, txid);
          try {
            await axios.post(`${API}/payments/complete`, { paymentId, txid });
          } catch (err) {
            console.error("Error during server completion:", err);
          }
        },
  
        onCancel: async function (paymentId) {
          console.log("Payment cancelled:", paymentId);
          try {
            await axios.post(`${API}/payments/cancelled_payment`, { paymentId });
          } catch (err) {
            console.error("Error notifying server of cancellation:", err);
          }
        },
  
        onError: function (error, paymentId) {
          console.error("Payment error:", error);
        }
      });
      return true;
    } catch (err) {
      console.error("Failed to initiate Pi payment:", err);
      return false;
    }
  }
  

// Withdraw 
async function withdrawAPI(params) {
    try {
        const res = await axios.post(`${API}/withdraw/`, params);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function moveToWalletAPI(user, amt, balance, itemId) {
    console.log({user})
    console.log({balance})
    try {
        const res = await axios.put(`${API}/user/update/${user}`, {wallet: amt});
        const formData = new FormData();
        formData.append("withdrawable", balance);

       editToDb(formData, itemId);
        console.log(res)
        return true;
    } catch (error) {
        return false;
    }
}