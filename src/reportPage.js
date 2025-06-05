function submitReport() {
    const toSend = {
        uid: "123456",
        issueType: document.getElementById("issueType").value,
        desc: document.getElementById("description").value,
        status: "pending"
    };

    postReport(toSend);
}

function reportPageFunc(){




    reportHtmlSpace.innerHTML = `
          <div class="report-wrap">

                <span class="header">
                    <h1>Report an Issue</h1>
                    <p>Your feedback helps us improve the platform. Please let us know what's wrong.</p>
                </span>
                
                <div class="report-form">                 
                    <div class="form-group">
                        <label for="issueType">Issue Type</label>
                        <select id="issueType" name="issueType" required>
                            <option value="">Select an issue type</option>
                            <option value="bug">Bug</option>
                            <option value="payment">Payment Issue</option>
                            <option value="ui">UI Problem</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea id="description" name="description" rows="6" placeholder="Describe the issue in detail..." required></textarea>
                    </div>
                    
                    <button type="submit" class="default-btn" onclick="submitReport()">Submit Report</button>
                </div>
            </div>
        </div>
    `;
}
 reportPageFunc();