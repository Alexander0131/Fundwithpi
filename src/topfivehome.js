async function topFiveList() {
    const topFive = await getAllData();
    topFiveWrap.innerHTML = singleRowFunc(topFive.filter(i => i.organizedfor != "global" && i.verifiedState == "active").reverse().slice(0,5)) + 
    `<a class="top-five-see-more" href="donationlist.html?q=all"> <button> See All <i class="fa fa-chevron-down"></i> </button> </a>`;
}

topFiveList()