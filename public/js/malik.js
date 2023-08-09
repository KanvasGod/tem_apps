var navList = document.getElementById('partnersList');
var navHandle = document.getElementById('navHandle');
var menu = false;
var showSignIn = false; 

function signIn() {
    const x = document.getElementById('overlay');
    showSignIn = !showSignIn;

    if (showSignIn) {
        x.style.display = ''
    } else {
        x.style.display = 'none'
    }
    
}

function showMenu(override) {
    var x = document.querySelector('.nav2');
    

    if(override === 'up') {
        menu = false;
    } else if(override === 'down') {
        menu = true;
    } else {
        menu = !menu;
    }

    if (menu) {
        x.style.display = 'block';
        x.style.border = '3px solid #8d8d8d';
    } else {
        x.style.border = 'none';
        x.style.display = 'none';
    }
}

navHandle.addEventListener('click', function() {
    showMenu()
})

navList.addEventListener('click', function() {
    showMenu()
})

var currentImage = 0;
var images  = [
    'image1',
    'images2',
    'images3',
    'images4'
];

function count() {
    var len = images.length;

    currentImage += 1;

    if (currentImage > len - 1) {
        currentImage = 0
    }
}

function setImage(showcase) {
    var id = document.getElementById(showcase);
    id.style.background = 'url(' + images[currentImage] + ')'
}

setInterval(function () {
    count()

}, 3500)



function init() {
    showMenu('up');
    setImage();
}

init()
