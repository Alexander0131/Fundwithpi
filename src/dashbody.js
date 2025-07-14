async function setNotiNum() {
    const currentUser = await signIn();
    const notiNum = document.getElementById("notiNum");
    const resRaw = await getAllNotifications();
    const res = resRaw.filter(i => i.status == "unread" || !i.reader.includes(currentUser.uid));
    if(res.length > 0) notiNum.style.display = "flex";
    notiNum.innerText = res.length;
}
setNotiNum();




let prevIdMain = "";
function dashbodyFunc(params) {
    const dashbody = document.getElementById('dashbody');
    const prevIdMainPro = document.getElementById(prevIdMain);
    const paramsPro = document.getElementById(params);

     if(prevIdMainPro) prevIdMainPro.className = "nav"; 
    if (paramsPro) paramsPro.className = "nav active"; 
     if(params != prevIdMain){
        prevIdMain = params;
    }

    if(params == 'approvals'){
        dashbody.innerHTML = `
            <div class="approval-list" id="approvalswrap">
                            <div class="approval-row">
                                <div class="approve-flex">
                                    <div class="approve-users active" id="userAppBtn" onclick="approvalswrapFunc('users', 'userAppBtn')">Users</div>
                                    <fundsAppBtndiv class="approve-users" id="fundsAppBtn" onclick="approvalswrapFunc('funds', 'fundsAppBtn')">Funds</fundsAppBtndiv>
                                </div>
                                <div class="approve-body" id="approvebody">
                                                                    </div>
                            </div>
                        </div>
        `
        approvalswrapFunc('users', 'userAppBtn');
    }
    else if (params == "withdrawal"){
        dashWithdrawFunc('params')
    }
    else if(params == "users"){
        dashUserFunc("users")
    }
    else if(params == "notifications"){
        dashNotiFunc("params");
    }
        
} 
dashbodyFunc("approvals");