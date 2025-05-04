function topFiveList() {
    topFiveWrap.innerHTML = singleRowFunc(rowData.reverse().slice(0,5)) + 
    `<a class="top-five-see-more"> <button> See More <i class="fa fa-chevron-down"></i> </button> </a>`;
}

topFiveList()