function runSearch(val) {
    if(rowData) {
        const setSearch = rowData.filter(data => 
  data.title.toString().toLowerCase().includes(val.toString().toLowerCase()) ||
  (data.description?.toString().toLowerCase().includes(val.toString().toLowerCase()) ?? false) ||
  (data.content?.toString().toLowerCase().includes(val.toString().toLowerCase()) ?? false)
);

    if(setSearch) {
        return singleRowFunc(setSearch);
    }else{
        return null;
    }
   
    }
    
}


function searchFunc(val) {
    if (val != "" && val != " ") {
    //run the search
        searchWrap.style.display = "block";
        topFiveWrap.style.display = "none";
        if (runSearch(val)) {
            foundItem.innerHTML = runSearch(val);
        }
        else {
            foundItem.innerHTML = `<div class='noSearch'>No result found <br/><br/> <h2><u>Explore More<u></h2></div>`;
            topFiveWrap.style.display = "block";

        }
        
    }else{
        searchWrap.style.display = "none";
        topFiveWrap.style.display = "block";
    }
    
    
}