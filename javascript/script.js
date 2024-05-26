
// let hambuger = document.getElementById("hambuger");
// let nav = document.getElementById("nav");
// let close = document.getElementById("icon-close");

let i = 0; //current slide
let j = 4; //total slide

function menuOpen(){

    document.getElementById("nav").style.transform = "scale(1)";
    document.getElementById("nav").style.opacity = "1";

    document.getElementById("hambuger").style.display = "none";
    document.getElementById("icon-close").style.display = "block";

}

function menuClose(){

    document.getElementById("nav").style.transform = "scale(0)";
    document.getElementById("nav").style.opacity = "0";

    document.getElementById("hambuger").style.display = "block";
    document.getElementById("icon-close").style.display = "none";
}

// var bigImg = document.getElementsByClassName('big-img');
// var smallImg = document.getElementsByClassName('small-img');

// smallImg[0].onclick = function(){
//     bigImg.src = smallImg[0].src;
// }

// smallImg[1].onclick = function(){
//     bigImg.src = smallImg[1].src;
// }

// smallImg[2].onclick = function(){
//     bigImg.src = smallImg[2].src;
// }

// smallImg[3].onclick = function(){
//     bigImg.src = smallImg[3].src;
// }

// function to change image from image gallery

function changeone(){
var bigimg = document.getElementById('bigimg');
var imgone = document.getElementById('imgone');

bigimg.src = imgone.src;
}

function changetwo(){
var bigimg = document.getElementById('bigimg');
var imgtwo = document.getElementById('imgtwo');

bigimg.src = imgtwo.src;
}

function changethree(){
var bigimg = document.getElementById('bigimg');
var imgthree = document.getElementById('imgthree');

bigimg.src = imgthree.src;
}

function changefour(){
var bigimg = document.getElementById('bigimg');
var imgfour = document.getElementById('imgfour');

bigimg.src = imgfour.src;
}

// implementing next slide function

function next(){
    document.getElementById('mobImg' + (i+1)).classList.remove('active');
    i = (j + i + 1) % j;
    document.getElementById('mobImg' + (i+1)).classList.add('active');
}

function prev(){
    document.getElementById('mobImg' + (i+1)).classList.remove('active');
    i = (j + i - 1) % j;
    document.getElementById('mobImg' + (i+1)).classList.add('active');
}

// implementing increment or decrement effect

function decrement(){
var num = document.getElementById('num').stepDown();
}

function increment(){
var num = document.getElementById('num').stepUp();
}