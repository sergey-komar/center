$(function () {
    $(".slider__inner").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      
      });


//product
$('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    dots: true,
    
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
            dots: true,
        }
      },
     
    ]
  
  });


      //qty-btn
  $(".qty-btn").on("click", function (e) {
    e.preventDefault();
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.hasClass("inc")) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    $button.parent().find("input").val(newVal);
  });

})


window.addEventListener('DOMContentLoaded', () => {
  const tabsItem = document.querySelector('.tabs__item');
const tabsItemBtn = document.querySelectorAll('.tabs__item-btn');
const tabsContent = document.querySelectorAll('.tabs__content');

function tabsHide(){
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show');
    });

    tabsItemBtn.forEach(btn =>{
        btn.classList.remove('tabs__item-btn--active');
    })
}
function tabsShow(i){
    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
    tabsItemBtn[i].classList.add('tabs__item-btn--active');
}

if(tabsItem && tabsContent && tabsItem){
  tabsItem.addEventListener('click', (e)=>{
    const target = e.target;
    
    if(target && target.classList.contains('tabs__item-btn')){
        tabsItemBtn.forEach((item, i)=>{
            if(target == item){
                tabsHide();
                tabsShow(i);
            }
           
        })
       
    }
})

tabsHide();
tabsShow(0);
}

const searchBlock = document.querySelector('.search-block');
const searchBtn = document.querySelector('.header-box__right-search');
const searchCloseBtn = document.querySelector('.search-block__top-img');

searchBtn.addEventListener('click', () => {
    searchBlock.classList.add('search-block--hidden');
});
searchCloseBtn.addEventListener('click', () => {
    searchBlock.classList.remove('search-block--hidden');
});


//CART
const cartBlock = document.querySelector('.cart-block');
const cartBtn = document.querySelector('.header-box__right-basket');
const cartCloseImg = document.querySelector('.cart-block__inner-img');

  cartBtn.addEventListener('click', () => {
    cartBlock.classList.add('cart-block--hidden');
  });
  cartCloseImg.addEventListener('click', () => {
    cartBlock.classList.remove('cart-block--hidden');
  });

//MENU
const menu = document.querySelector('.header-box__inner');
const mobile = document.querySelector('.nav-icon');

mobile.addEventListener('click', function(){
    this.classList.toggle('nav-icon--active');
    menu.classList.toggle('nav--active');

});


const btn = document.querySelector('.btnUp');


btn.addEventListener('click', ()=>{
    console.log(111);
    window.scrollTo({
        top: 0, 
        behavior: 'smooth' 
    });
 
});
// function up() {
//   window.addEventListener('scroll', () => {
//     if(window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
//       btn.classList.add('btnUp-visible');
//     }else{
//       btn.classList.remove('btnUp-visible');
//     }
//   })
// }
// up();




})