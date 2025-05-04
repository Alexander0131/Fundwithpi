async function getUsers(authResult){
    console.log("Starting to get users");
    console.log("Pi Username:", authResult.user.username);

    try {
        const res = await axios.post("http://localhost:3000/user/signin", { authResult });
        console.log("Backend response:", res.data);
    } catch (error) {
        console.error("Error sending user to backend:", error.response?.data || error.message || error);
    }
};

async function initial() {
    try {
        // ✅ Check if Pi SDK is loaded
        if (!window.Pi) {
            console.error("⚠️ Pi SDK not available on window. Make sure the script tag is included:");
            console.error(`<script src="https://sdk.minepi.com/pi-sdk.js"></script>`);
            return;
        }

        console.log("✅ Pi SDK found. Initializing...");
        window.Pi.init({ version: "2.0" });
        console.log("✅ Pi SDK initialized");

        const scopes = ['username', 'payments'];
        console.log("🧪 Requesting Pi authentication with scopes:", scopes);

        // ✅ Set a timeout fallback in case Pi.authenticate hangs
        const timeout = new Promise((_, reject) =>
            setTimeout(() => reject(new Error("⚠️ Pi authentication timed out after 10 seconds")), 10000)
        );

        // ✅ Try to authenticate with timeout protection
        const authResult = await Promise.race([
            window.Pi.authenticate(scopes),
            timeout
        ]);

        // ✅ Authentication succeeded
        console.log("🎉 Authenticated user:", authResult.user.username);

        // ✅ Send user data to backend
        await getUsers(authResult);

    } catch (error) {
        console.error("❌ Error during Pi authentication:", error);

        if (error instanceof Error) {
            console.error("Message:", error.message);
            console.error("Stack:", error.stack);
        } else {
            console.error("Unknown error object:", JSON.stringify(error));
        }
    }
}

initial();
