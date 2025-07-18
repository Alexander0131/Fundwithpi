async function mainNotiList() {
    var toReturn = "";

    const getNotiRaw = await getAllNotifications();
    const getNotis = getNotiRaw.reverse();
    console.log({getNotis})
    for (let i = 0; i < getNotis.length; i++) {
        const element = getNotis[i];
        
    toReturn += `
        <div class="approve-user ${element.status}">
             <span>
                ${element.content}
            </span>
            ${element.link != "none" ? ` 
            <a href="${element.link}" class="see-more">view</a>
            ` : " " }
        </div>
    `;
    }
    return toReturn;
}

async function dashNotiFunc(params) {
    const dashbody = document.getElementById('dashbody');
    dashbody.innerHTML = fullLoad(true, 'mini');
    notiNum.style.display = "none";

    const currentUser = await signIn();
    readAllNotifications(currentUser.uid);

    dashbody.innerHTML = `
        <div class="approve-body">
            ${await mainNotiList()}
        </div>
    `;

    
}

