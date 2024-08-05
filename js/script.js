"use strict";

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      renderBullet: function(index, className) {
        let canv = ['LINEAR', 'ZIG-ZAG', 'CUSTOM'];
        return `<span class= ${className}> 
                        <img src="../images/our-products/canv/0${index+1}.svg" alt=""> 
                        <h3>ПОЛОТНО ${canv[index]}</h3>
                </span>`;
      },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  const swiper1 = new Swiper('.our-manufacture-slider', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 5,
    spaceBetween: 2,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      // renderBullet: function(index, className) {
      //   let canv = ['LINEAR', 'ZIG-ZAG', 'CUSTOM'];
      //   return `<span class= ${className}> 
      //                   <img src="../images/our-products/canv/0${index+1}.svg" alt=""> 
      //                   <h3>ПОЛОТНО ${canv[index]}</h3>
      //           </span>`;
      // },
    }, 
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });