console.log(window.location.href)
$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('header').addClass('color-header');
    }
    else {
        $('header').removeClass('color-header');
    }
});
// change src

let countimg = 0;
let toogleBtn = document.querySelector('.navbar-toggler');

toogleBtn.addEventListener('click',()=>{
    if(countimg == 0){
        document.querySelector('.tooglemenuimg').src ="./assest/images/x-mark.svg";
      //document.querySelector('header').style.background="#1C1F26"
      countimg = 1;
    }
    else{
        document.querySelector('.tooglemenuimg').src ="./assest/images/Menu-Button.svg";
       // document.querySelector('header').style.background="transparent"
        countimg = 0;
    }
})
// change addtogglestyle tab panel home page
function showImage(index) {
    const images = document.querySelectorAll('.imagech');
    images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
    });
}

let num = 0
let tooglecart = document.querySelector('.cart-toggle');

tooglecart.addEventListener('click',()=>{
    if(num == 0){
        document.getElementById('card-show').style.display="block";
        num =1;
    }
    else{
        document.getElementById('card-show').style.display=" none ";
        num =0;
    }
})

// sldier home page


AOS.init({
    duration: 1200,
})