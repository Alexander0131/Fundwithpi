const fullLoaderHtml = document.getElementById("fullLoaderSpace");
const getHeader = document.querySelector('header');
const headWrap = document.getElementById('head-wrap');
const topFiveWrap = document.getElementById('top-five-wrap');
const fundHint = document.getElementById('fund-hint');
const swiperContent = document.getElementById('swiper-content');
const donateSwiper = document.getElementById('donate-swiper');
const footer = document.querySelector('footer');
const body = document.body;
const menuWrap = document.getElementById('menu-wrap');
const localStorageAccess = document.getElementById('local-storage-access');
const dialogWrap = document.getElementById('dialog-wrap');
const blurDialog = document.querySelector('.blur-dialog');



//search.html
const searchWrap = document.getElementById('search-wrap');
const foundItem = document.getElementById('found-item');

// Donation list 
const donationList = document.getElementById("donationList");
const donationListClass = document.querySelector('.donationList');
const donationListLoader = document.getElementById('donationListLoader');
const donationCart = document.getElementById('donationCart');

   

//F.html
const singleFundWrap = document.querySelector('.single-fund-wrap');


//fund.innerHTML
const wrapFundPage = document.getElementById("wrap-fund-page");


//about page
const abtPage = document.getElementById("about-page");


//create-fund-account-page
const createFundAccPage = document.getElementById('create-fund-account');
const currentPlace = document.getElementById("currentPlace");
const nextBtnFund =  document.getElementById('nextBtnFund')

//My fund page
const myFundPage = document.getElementById('myfunds-page');
const startNewFunds = document.getElementById('startNewFunds');

// My single fund page.
const singleFundHtml = document.getElementById("singlefundhtml");

// editmyfund page
const editmyfundHtml = document.getElementById("editmyfund-html");

// update page
const updateHtml = document.getElementById("updateHtml");

// report page
const reportHtmlSpace = document.getElementById("reportHtmlSpace");



var coverBtn = null;
var coverInput = null;
var coverContainer = null;


// Account Settings
const accHtml = document.getElementById("accHtml");


// const userInfo = {
//     id: 1, 
//     name: 'John b', 
//     email: 'john@example.com',
//     username: 'Mathew',
//     profile: './assets/images/sample.jpeg',
//     uid: '7abd5d58-5139-460a-bfef-e94b14f9fb9d',
// }
// const currentUser = userInfo;

var userInfo = localStorage.getItem('userInfo');
if(!userInfo){
    // signIn();
}


// Transaction Page
const transHtml = document.getElementById("transHtml");

// cfa page
const wrapCfa = document.getElementById("wrap-cfa");

/* var */
var amtToSend = "";
var blurCookies = "";
var cookiesContent = "";
var donationBodyText = "";
var donatePrice = ""
var menuContainer = "";
var menuCover = "";
var seeMoreText = "";
var textFader = "";



