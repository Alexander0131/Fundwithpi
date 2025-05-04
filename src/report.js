function reportUserFuncUi() {
    return  `
      <div> 
          <h3>Suggestions</h3>
          <div class="report-wrap">
              <div class="report-opts">
                  <div class="option" onclick="selectThisOpt(this, 'This is scam!')">This is scam!</div>
                  <div class="option" onclick="selectThisOpt(this, 'Misinformation in the case description.')">Misinformation in the case description.</div>
                  <div class="option" onclick="selectThisOpt(this, 'Request a refund!')">Request a refund!</div>
              </div>
              <div>
                  <textarea id="report-textarea"> Share your thoughts!</textarea>
                  <input id="report-email" type="email" placeholder="enteryouremail@email.com" value="" required/>
              </div>
              <div class="wrap-return-btn" align="right">
                  <button class="default-btn">Send</button>
              </div>
          </div>
      </div>
    `;
}

// Function to handle selection and update textarea
function selectThisOpt(element, value) {
    document.getElementById('report-textarea').value = value;

    // Remove 'selected' class from all options
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));

    // Add 'selected' class to the clicked option
    element.classList.add('selected');
}