console.log(window.location.href)
$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('.container-color-box').addClass('color-header');
    }
    else {
        $('.container-color-box').removeClass('color-header');
    }
});
// change src

let countimg = 0;
let toogleBtn = document.querySelector('.navbar-toggler');

toogleBtn.addEventListener('click',()=>{
    if(countimg == 0){
        document.querySelector('.col-color-mo').style.padding="24px";
        document.querySelector('.tooglemenuimg').src ="./assest/images/x-mark.svg";
        document.querySelector('.container-color-box').classList.add('color-header');
      //document.querySelector('header').style.background="#1C1F26"
      countimg = 1;
    }
    else{
        document.querySelector('.tooglemenuimg').src ="./assest/images/Menu-Button.svg";
       // document.querySelector('header').style.background="transparent"
       document.querySelector('.container-color-box').classList.remove('color-header');
        document.querySelector('.col-color-mo').style.padding="0";
        countimg = 0;
    }
})

let countimg1 = 0;
let toogleBtn1 = document.querySelector('.shipping-cart');

toogleBtn1.addEventListener('click',()=>{
    if(countimg1 == 0){
        document.querySelector('.shipping-cart img').src ="./assest/images/green-cart-icon.svg";
      countimg1 = 1;
    }
    else{
        document.querySelector('.shipping-cart img').src ="./assest/images/shopping-cart.svg";
        countimg1 = 0;
    }
})


// sldier home page



