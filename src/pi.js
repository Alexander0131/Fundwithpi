window.__ENV = {
  // backendURL: "http://localhost:3000", 
  backendURL: "https://fund-backend-gold.vercel.app",
  sandbox: "true"
};



let currentUser = "Unknown";
const backendURL = window.__ENV?.backendURL;

const axiosClient = axios.create({
  baseURL: "https://fund-backend-gold.vercel.app"
  // baseURL: "http://localhost:3000"
});
function initPiSdk() {
  const loader = document.getElementById('loader');
  const mainContent = document.getElementById('main-content');

  try {
    // Optional: Show loader
    if (loader) loader.style.display = 'block';
    if (mainContent) mainContent.style.display = 'none';

    // Initialize Pi SDK
    window.Pi.init({
      version: "2.0",
      sandbox: window.__ENV?.sandbox === "true"
    });

    document.querySelectorAll('.buy-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        const card = e.target.closest('.product-card');
        const price = parseFloat(card.dataset.price);
        const memo = card.dataset.memo;
        const productId = card.dataset.id;
        orderProduct(memo, price, { productId });
      });
    });

    async function rawSignIn() {
      return await signIn();
    } 
    rawSignIn()
    // Optional: Run any post-init logic
    // console.log("Attempt Sign in")
  
    // Hide loader and show content
    if (loader) loader.style.display = 'none';
    if (mainContent) mainContent.style.display = 'block';

  } catch (err) {
    console.error("Pi SDK init failed:", err);
    if (loader) loader.innerText = "Failed to initialize Pi SDK.";
  }
}
initPiSdk();


  // Event Listeners
  // document.getElementById('signin-btn').addEventListener('click', signIn);
  // document.getElementById('signout-btn').addEventListener('click', signOut);
//   document.getElementById('confirm-signin').addEventListener('click', signIn);




async function signIn() {
const scopes = ['username', 'payments'];
// check localstorage 
// const tempAcc = localStorage.getItem("thisuser");
// const tempAccJson = JSON.parse(tempAcc);
// if(tempAcc && !tempAccJson.update && tempAccJson.count < 3) {
//   console.log("Acc gotten from temp");
//   const wrapAcc = { acc: tempAccJson.acc, count: tempAccJson.count + 1, update: tempAccJson.update};
//       localStorage.setItem("thisuser", JSON.stringify(wrapAcc));
//   return tempAccJson.acc;  
// }else{

  try {
    const authResult = await window.Pi.authenticate(scopes, onIncompletePaymentFound);
    currentUser = authResult.user;
    const sign = await axiosClient.post(`/user/signin`, { authResult });
    if(sign){
      console.log("Signed In")
      currentUser = sign.data.user;
      updateHeader();
      const toReturn = await getThisUser(currentUser.uid) ? await getThisUser(currentUser.uid) : sign.data.user;
      const wrapAcc = { acc: toReturn, count: 0, update: false};
      localStorage.setItem("thisuser", JSON.stringify(wrapAcc));
      return toReturn;
    }
    
  } catch (err) { 
    console.error("Authentication error", err);
  }
// }


}


function signOut() {
  currentUser = null;
  axios.get(`${API}/user/signout`);
  updateHeader();
}

 async function updateHeader() {
  const mpn = document.getElementById("menu-profile-name");
  const mil =  document.getElementById("menu-img-letter");
  const mpi = document.getElementById("menu-profile-img");

   if(mpn) mpn.textContent = currentUser.username;
  
  //  get all account info
  if(currentUser.uid){
    userInfo = await getThisUser(currentUser.uid) ? await getThisUser(currentUser.uid) : currentUser;
   if(mil) mil.textContent = currentUser.username[0];
    if(userInfo.profile){
      if(mpi) mpi.src = userInfo.profile;
    }

    // Set to localstorage
    localStorage.setItem('user', JSON.stringify(userInfo));
    // console.log({userInfo})



}
return currentUser;
}

function orderProduct(memo, amount, metadata) {
  if (!currentUser) {
    showModal();
    return;
  }

  const paymentData = { amount, memo, metadata };
  const callbacks = {
    onReadyForServerApproval,
    onReadyForServerCompletion,
    onCancel,
    onError
  };

  window.Pi.createPayment(paymentData, callbacks).then(payment => {
    console.log("Payment created", payment);
  }).catch(err => {
    console.error("Payment creation error", err);
  });
}

function onIncompletePaymentFound(payment) {
  console.log("Incomplete Payment Found:", payment);
  axiosClient.post('/payments/incomplete', { payment });
}

function onReadyForServerApproval(paymentId) {
  console.log("Ready for Approval:", paymentId);
  axiosClient.post('/payments/approve', { paymentId });
}

function onReadyForServerCompletion(paymentId, txid) {
  console.log("Ready for Completion:", paymentId, txid);
  axiosClient.post('/payments/complete', { paymentId, txid });
}

function onCancel(paymentId) {
  console.log("Payment Cancelled:", paymentId);
  axiosClient.post('/payments/cancelled_payment', { paymentId });
}

function onError(error, payment) {
  console.error("Payment Error:", error);
  if (payment) {
    console.log("Related payment:", payment);
  }
}