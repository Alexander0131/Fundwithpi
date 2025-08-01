// adding images
var imgsToUpload = [];
let selectedFilesB = [];
let descText = "";
let updatedDesc = '';
var textAreaVal = "";
let descChange, imgAdded = false;


function validEditBtn() {
    const editBtn = document.getElementById('editBtn');
    
    if(textAreaVal.length >= 150 || imgAdded){
        console.log("first")
        if(!descChange && !imgAdded){
            editBtn.className = 'default-btn disabled';
            editBtn.disabled = true;
        }
        
        else{
            editBtn.className = 'default-btn';
            editBtn.disabled = false;
        }
    }
    else{
            editBtn.className = 'default-btn disabled';
            editBtn.disabled = true;
    }
}

function multiBtnFuncB() {
    const input = document.getElementById("multi-input");
    if (input) input.click();
}

function handleMultiImagesB(event, lengthNum) {
    const previewContainer = document.getElementById("multi-preview-container");
    const len = Number(lengthNum);
    const counter = document.getElementById("multi-img-count");
    const files = Array.from(event.target.files);
    console.log(files.length + selectedFilesB.length + len)
    if (files.length + selectedFilesB.length + len > 5) {
        alert("You can only have up to 5 images.");
        return;
    }

    files.forEach((file, index) => {
        if (file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const id = `${Date.now()}-${index}`;
                selectedFilesB.push({ id, file });

                // Push to imgsToUpload if not already there
                imgsToUpload.push(file);

                previewContainer.innerHTML += `
                    <div class="preview-wrapper" id="img-${id}" style="position:relative; display:inline-block; margin:5px;">
                        <img src="${e.target.result}" />
                        <span onclick="removeImage('${id}')" class="closeBtnImg"><i class="fa fa-close"></i></span>
                    </div>
                `;

                counter.textContent = `${selectedFilesB.length} image(s) selected`;
            };
            reader.readAsDataURL(file);
        }
    });
        imgAdded = true;
        validEditBtn()
    console.log(imgsToUpload)

    event.target.value = "";
}

function removeImage(id) {
    const imgDiv = document.getElementById(`img-${id}`);
    if (imgDiv) {
        imgDiv.remove();

        const removed = selectedFilesB.find(img => img.id === id);

        // Remove from selectedFiles
        selectedFilesB = selectedFilesB.filter(img => img.id !== id);

        // Remove matching file from imgsToUpload (by reference)
        if (removed && removed.file) {
            imgsToUpload = imgsToUpload.filter(file => file !== removed.file);
        }

        const counter = document.getElementById("multi-img-count");
        counter.textContent = `${selectedFilesB.length} image(s) selected`;
        if(selectedFilesB.length == 0){
        counter.textContent = ``;

        }
    }
    console.log(imgsToUpload)
    if(imgsToUpload.length < 1){
        imgAdded = false;
        validEditBtn()
    }
}

// post edit
async function saveChangesBtn(title) {
    const descriptionElement = document.getElementById('description');
    if (!descriptionElement) {
        console.error('Element with id="description" not found.');
        return;
    }

    const updatedDesc = descriptionElement.value;

    const formData = new FormData();
    formData.append('description', updatedDesc);
      if (imgsToUpload && imgsToUpload.length > 0) {
        imgsToUpload.forEach((img) => {
            formData.append("images", img);
        });
    }

    // Pass FormData to the next function
    const queryValue = getQueryValue();

    const editState = await editToDb(formData, queryValue);
    if(editState) {
        console.log(formData)
        notifier("Edit saved");
        createNoti(`Changes were made in <a href="f.html?q=${queryValue}"><u>${title}</u></a>`);
        setTimeout(() => {
            window.location.href = `f.html?q=${queryValue}`;
        }, 1000)
    }
    else{
        notifier("Error saving edit");
    }
}

function trackBtn(curVal) {
    textAreaVal = curVal.value;
    if(descText == curVal.value){
        descChange = false;
        validEditBtn();
    }
    else{
        descChange = true;
        validEditBtn();
       
    }
}




async function editMyFundFunc(){
    editmyfundHtml.innerHTML = fullLoad(true, 'mini');
    let errorPage = `
             <div class="errorLand">
                 <img src="./assets/images/error.gif" alt=""/>
                 <a href="/myfunds.html" style="color: var(--text);">Go back</a>
             </div>
         `;
     const queryData = getQueryValue();
     if(!queryData){
        editmyfundHtml.innerHTML = errorPage;
     }else{
        const currentUser = await signIn();
        const data = await getAllData();
        const foundData = data.find(i => i._id == queryData);
        if( queryData == null || !foundData || foundData.organizer[0] != currentUser.uid){
            editmyfundHtml.innerHTML = errorPage;
        }
        if(foundData.organizer[0] == currentUser.uid){
                
         if(foundData){
            descText = foundData.description;
    editmyfundHtml.innerHTML = `
    <div class="editmyfund-wrap">
                <h2 class="editfund-title">Edit Fund Details</h2>
              
                <!-- Title Section -->
                <div class="editfund-group">
                  <label for="title" class="editfund-label">Title</label>
                  <input id="title" type="text" value="${foundData.title}" disabled class="editfund-input editfund-disabled">
                  <sup><small class="editfund-note red">*Title can't be changed</small></sup>
                </div>
              
                <!-- Description Section -->
                <div class="editfund-group">
                  <label for="description" class="editfund-label">Description</label>
                  <textarea id="description" rows="5" class="editfund-textarea" oninput="trackBtn(this)">${foundData.description}</textarea>
                  <sup><small class="editfund-note orange">*This will require a three-day margin for confirmation, and text must be up to 150 letters long.</small></sup>
                </div>
              
                <!-- Image Section -->
                <div class="editfund-group">
                  <label class="editfund-label">Cover Image</label>
                  <div class="editfund-images">
                    <div class="editfund-image-box">
                                           ${loadThisImg(foundData.images.slice(0,1))}
               
                    </div>
                    </div>
                  <label class="editfund-label">Images</label>
                  <div class="editfund-images">
                    <div class="editfund-image-box">
                                           ${loadThisImg(foundData.images.slice(1,5), 'delete', foundData._id)}
<div class="imgToUpload" id="multi-preview-container"></div>
</div>


<div>
    <small id="multi-img-count" class="img-count"></small>

                    <button class="editfund-add-image" onclick="multiBtnFuncB()" id="multi-btn">
                    + Add Image</button>
            <input type="file" accept="image/*" id="multi-input" multiple style="display: none" onchange="handleMultiImagesB(event, '${foundData.images.length - 1}')" />
                    </div>

                </div>
              
                <!-- Action Buttons -->
                <div class="editfund-actions">
                  <button id="editBtn" disabled="true" class="default-btn disabled" onclick="saveChangesBtn('${foundData.title}')">Save Changes</button>
                </div>
              </div>
            
    `;
        }
    }
}
};
editMyFundFunc()