



/*------------- for search bar-----------*/
$(document).on('click','.search',function(){
$('.search-bar').addClass('search-bar-active')
})
/*------------- for search cancel button -----------*/
$(document).on('click','.search-cancel',function(){
    $('.search-bar').removeClass('search-bar-active')
})

/*-------------login & sign up form-----------*/
$(document).on('click','.user,.forget',function(){
    $('.form').addClass('login-active').removeClass('sign-up-active')
})
$(document).on('click','.sign-up-btn',function(){
    $('.form').addClass('sign-up-active').removeClass('login-active')
})

$(document).on('click','.form-cancel',function(){
    $('.form').removeClass('login-active').removeClass('sign-up-active')
})
/*-------------for header fixing-----------*/
$(window).scroll(function(){
    if($(document).scrollTop()>50){
        $('.navigation').addClass('fix-nav')
    }else{
        $('.navigation').removeClass('fix-nav')
    }
    
})
/*-------------responsive-menu-----------*/
$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('.navigation').toggleClass('active')
    })
})

/*-------------clothing-section % accessories section-----------*/

var clothingSection=document.getElementById("clothing-section");


function createHomePageProductCard(obj) {
    

    var mainDiv = document.createElement('div');
    mainDiv.classList.add('product-card');

    var productLink = document.createElement('a');
    productLink.href = 'http://127.0.0.1:5500/details.html?p='+obj.id;

    var productImage = document.createElement('img');
    productImage.classList.add('product-image');
    productImage.src = obj.preview;
    productImage.alt = obj.name + ' Pic';

    productLink.appendChild(productImage);

    var innerDiv = document.createElement('div');
    innerDiv.classList.add('product-div');

    var productName = document.createElement('h4');
    var productNameText = document.createTextNode(obj.name);
    productName.appendChild(productNameText);

    var productBrand = document.createElement('h5');
    var productBrandText = document.createTextNode(obj.brand);
    productBrand.appendChild(productBrandText);

    var productPrice = document.createElement('p');
    var productPriceText = document.createTextNode('Rs ' + obj.price);
    productPrice.appendChild(productPriceText);

    innerDiv.appendChild(productName);
    innerDiv.appendChild(productBrand);
    innerDiv.appendChild(productPrice);

    mainDiv.appendChild(productLink);
    mainDiv.appendChild(innerDiv);

    return mainDiv;
  }

  $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product', function(data, status) {
    var response = data;

    for(var i=0; i<response.length; i++) {
      if(response[i].isAccessory) {
        $('#accessory-grid').append(createHomePageProductCard(response[i]))
      } else {
        $('#clothing-grid').append(createHomePageProductCard(response[i]))
      }
    }
  })
