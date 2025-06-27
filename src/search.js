async function runSearch(val) {
    var toReturn = fullLoad(true, 'mini 50');
    const searchData = val == "" ? await getAllData(): await searchMainData(val);
   console.log({searchData})
    if(searchData) {
        const setSearch = searchData.filter(data => 
  data.title.toString().toLowerCase().includes(val.toString().toLowerCase()) ||
  (data.description?.toString().toLowerCase().includes(val.toString().toLowerCase()) ?? false) ||
  (data.content?.toString().toLowerCase().includes(val.toString().toLowerCase()) ?? false)
);

    if(setSearch) {
        toReturn = singleRowFunc(setSearch);
    }
   
    }else{
        toReturn = `<div class="searchNotFound"><h3 class="flex-center">No match for <i>'${val}'</i></h3></div>`
    }
    return toReturn;
}


async function searchFunc(val) {
    foundItem.innerHTML = fullLoad(true, 'mini 50');
    if (val != "" && val != " ") {
    //run the search
        searchWrap.style.display = "block";
        topFiveWrap.style.display = "none";
        if (runSearch(val)) {
            foundItem.innerHTML = await runSearch(val);
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