function footerFunc() {
    return `
        <div class="wrap-footer">
            <div class="rewrap">
            <!-- Documentation Links Section -->
            <div class="footer-docs">
                <h2>Resources</h2>
                <p><a href="#">How It Works</a></p>
                <p><a href="fundraiser.html">Start a Fundraiser</a></p>
                <p><a href="#">Donation Guidelines</a></p>
                <p><a href="#">FAQs</a></p>
            </div>

            <!-- Social Media Links Section -->
            <div class="footer-social-media">
                <h2>Connect with Us</h2>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-twitch"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
            </div>

            <!-- Platform Description Section -->
            <div class="footer-about">
                <h2>About Us</h2>
                <p>
                    This platform empowers Pi Network pioneers to raise and donate funds seamlessly within the Pi ecosystem. We support community-driven causes and peer-to-peer fundraising without borders.
                </p>
            </div>
            </div>

            <!-- Copyright -->
            <div class="copyright-footer">
                &copy; ${new Date().getFullYear()} fundWithPi. All rights reserved.
            </div>

        </div>
    `;
}

footer.innerHTML = footerFunc();
