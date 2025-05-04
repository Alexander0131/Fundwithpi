// Initialize the Pi SDK with your app ID and sandbox flag
Pi.init({
    version: "2.0",
    sandbox: true, // true enables sandbox mode
  });
  
  // Add login functionality
  document.getElementById("pi-login").addEventListener("click", async () => {
    try {
      const scopes = ['username', 'payments'];
      const authResult = await Pi.authenticate(scopes, onIncompletePaymentFound);
  
      console.log("Authenticated user:", authResult.user);
    } catch (err) {
      console.error("Authentication failed:", err);
    }
  });
  
  // Optional: handle incomplete payments
  function onIncompletePaymentFound(payment) {
    console.log("Incomplete payment found:", payment);
    // handle according to your logic
  }
  