const pop = document.getElementById("pop");
const popContent = document.getElementById("pop-content");

function openPop(content){
    if(content){
        popContent.innerHTML = content;
        pop.style.display = "block";
    }
    else{
        popContent.innerHTML = "";
        pop.style.display = "none";
    }
   
}