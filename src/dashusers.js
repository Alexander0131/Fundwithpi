 async function mainDelBtn(params) {
    const state = await mainDelCrud(params);
    if (state) {
        dashUserFunc();
        openPop("")
    }
 }
 
 
 function callToDelUser(params) {
    var content = `
        <div>
            <h2>Confirm deletion</h2>
            <span>Deleting this user doesn't avoid this user from recreating this account. </span>
            <br/>
            <br/>
            <div class="flex-right">
                <button onclick="openPop('')" class="edit-btn">cancel</button>
                <button onclick="mainDelBtn('${params}')" class="delete-btn">Delete</button>
            </div>
        </div>
        `;
        openPop(content);
    }

    async function banUserGo(stateA, params) {
        console.log({stateA})
            const toChange = {accountState: `${stateA ? "banned" : "active"}`}
        const state = await updateUsersInfo(toChange, params);
        if (state) {
            dashUserFunc();
            openPop("");
        }
    }

    function banUser(state, params) {
        console.log({state})
        if (state){
        var content = `
            <div>
                <h2>Confirm Ban</h2>
                <span>Banning this users avoids this user from raising funds and changing information.</span>
                <br/>
                <br/>
                <div class="flex-right">
                    <button onclick="openPop('')" class="edit-btn">cancel</button>
                    <button onclick="banUserGo(${state},'${params}')" class="delete-btn">Ban</button>
                </div>
            </div>
            `;
            }
            else{
               var content = `
            <div>
                <h2>Remove Ban</h2>
                <span>Removing the ban on this user's account reactivates full access to this user</span>
                <br/>
                <br/>
                <div class="flex-right">
                    <button onclick="openPop('')" class="edit-btn">cancel</button>
                    <button onclick="banUserGo(${state}, '${params}')" class="default-btn">Remove ban</button>
                </div>
            </div>
            `; 
            }
        openPop(content);
    }


    // edit user
    async function saveNewRole(id){
        const roleSelect = document.getElementById("role-select");
            const toChange = {roles: roleSelect.value}
        const state = await updateUsersInfo(toChange, id);
        if (state) {
            dashUserFunc();
            openPop("");
        }
    }

    function editTheUser(id, username, curRole) {
          var content = `
            <div>
                <h2>Change user role</h2>
                <div>Current Role: '<b class="caps">${curRole}</b>'</div>
                <span>Select a new role for ${username}: 
                    <select id="role-select" name="role">
                        <option value="user">Regular User</option>
                        <option value="admin">Admin</option>
                    </select>
                </span>
                <br/>
                <br/>
                <div class="flex-right">
                    <button onclick="openPop('')" class="edit-btn">cancel</button>
                    <button onclick="saveNewRole('${id}')" class="default-btn">Save changes</button>
                </div>
            </div>
            `; 
        
        openPop(content);
    }

async function mainUserList() {
    var toReturn = "";


    const getUsers = await getAllUsers();
    console.log({getUsers})
    for (let i = 0; i < getUsers.length; i++) {
        const element = getUsers[i];
        
    toReturn += `
        <div class="approve-user">
             <span>
                ${element.username}
            </span>
            <span class="flex">
                <button class="see-more">view</button>
                ${element.accountState != "banned" ? `
                <i class="fa fa-pen" onclick="editTheUser('${element.uid}', '${element.name}', '${element.roles}')"></i>
                `: ""}
                ${element.accountState != "banned" ?
                    `<i onclick="banUser(${true}, '${element.uid}')" class="fa fa-ban"></i>`
                : 
                    `<i onclick="banUser(${false}, '${element.uid}')" class="fa fa-unlock"></i>`
                }
                ${element.roles != "admin" && element.accountState != "banned" ? `
                <i onclick="callToDelUser('${element._id}')" class="fa fa-trash"></i>
                `: ""}
            </span>
        </div>
    `;
    }
    return toReturn;
}

async function dashUserFunc() {
    const dashbody = document.getElementById('dashbody');
    dashbody.innerHTML = fullLoad(true, 'mini');

    dashbody.innerHTML = `
        <div class="approve-body">
            ${await mainUserList()}
        </div>
    `;

    
}

