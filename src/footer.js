
function footerFunc() {
    return `
        <div class="wrap-footer">

            <!-- Documentation Links Section -->
            <div class="footer-docs">
                <h2>Docs</h2>
                <p><a href="#">Item 1</a></p>
                <p><a href="#">Item 2</a></p>
                <p><a href="#">Item 3</a></p>
                <p><a href="#">Item 4</a></p>
            </div>

            <!-- Social Media Links Section -->
            <div class="footer-social-media">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-twitch"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
            </div>

            <!-- Copyright Section -->
            <div class="copyright-footer">
                All rights reserved 2025
            </div>

        </div>
    `;
}


footer.innerHTML = footerFunc();