$(document).ready(function() {

    function createCheckoutProductCard(obj) {
        // <div class="checkout-card">
        //     <div>
        //         <img class="checkout-product-img" src="/assets/default-product.png" />
        //     </div>
        //     <div>
        //         <h4>Product Title</h4>
        //         <p>x3</p>
        //         <p>Amount: Rs <span>30000</span></p>
        
        //     </div>
        // </div>
        
        var card = document.createElement('div');
        card.classList.add('checkout-card');

        var firstInnerDiv = document.createElement('div');
        var productImg = document.createElement('img');
        productImg.classList.add('checkout-product-img');
        productImg.src = obj.preview;
        firstInnerDiv.appendChild(productImg);

        var secondInnerDiv = document.createElement('div');
        var prodName = document.createElement('h4');
        prodName.innerHTML = obj.name;
        var prodCount = document.createElement('p');
        prodCount.innerHTML = 'x'+obj.count;
        var amtLabel = document.createElement('span');
        amtLabel.innerHTML = 'Amount: Rs ';
        var amtSpan = document.createElement('span');
        amtSpan.innerHTML = parseInt(obj.count) * parseInt(obj.price);
        var productAmount = document.createElement('p');
        productAmount.appendChild(amtLabel);
        productAmount.appendChild(amtSpan);
        secondInnerDiv.appendChild(prodName);
        secondInnerDiv.appendChild(prodCount);
        secondInnerDiv.appendChild(productAmount);

        card.appendChild(firstInnerDiv);
        card.appendChild(secondInnerDiv);

        return card;
    }

    var productList = window.localStorage.getItem('product-list');
    productList = productList === null || productList === '' ? [] : productList;
    productList = productList.length > 0 ? JSON.parse(productList) : [];
    
    console.log(productList);
    var grandTotal = 0;
    for(var i=0; i<productList.length; i++) {
        $('#card-list').append(createCheckoutProductCard(productList[i]));
        // console.log('Count => ', productList[i].count);
        // console.log('Price => ', productList[i].price);

        var totalForCurrentProduct = parseFloat(productList[i].count) * parseFloat(productList[i].price);

        grandTotal = grandTotal + totalForCurrentProduct;

        // console.log('Total For Product '+ i + ' is=> ' + totalForCurrentProduct);
    }

    $('#item-count').html(productList.length);
    $('#total-amount').html(grandTotal);

    var placeOrderBtn=document.getElementById("btn-place-order");
    placeOrderBtn.addEventListener("click",orderConfirmMsg);

    function orderConfirmMsg(){
        console.log("ordered");
        location.assign("http://127.0.0.1:5500/thankyou.html");
        localStorage.clear();
    }
    
})


