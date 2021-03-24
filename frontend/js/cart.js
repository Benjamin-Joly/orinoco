/////////////////////////////////////////////////*****************Add/suppress products in the cart by using localStorage. Updates on live the product number. Still need to refresh the page to erase the order*/

const orderResults = document.getElementById('order-results');
const rmvCart = document.getElementById('remove-cart');
let filterIndex = [];
let resultOrder = [];
const divideResOrdr = () =>{
  resultOrder = [filterIndex*=productList.length]
}

let selectedItemWrap = document.createElement('div');
  selectedItemWrap.classList.add('selected-item__wrap');
  orderWrap.appendChild(selectedItemWrap);

function clientResult(){
  if(localStorage.length !==0){
    resultOrder = localStorage.getItem('order').split(',');
        if(localStorage.length !== 0){
          return orderResults.textContent = `vous avez commandé ${resultOrder.length} produits`;
        }else if (localStorage.length == 0){
        return orderResults.textContent = `vous n'avez pas sélectionné d'articles`;
        }else{
          return orderResults.textContent = `choisissez un produit`;
        }        
  } 
}
/*//////////////////////////////////////////////////////////////////à vérifier
function getDataFromOrder(){
    resultOrder.forEach(el => {
    let test = productList.filter(Object => Object._id == el)
    console.log(test);
});
}
*/


window.addEventListener('load', () => {
  setTimeout(() => {
    clientResult();
    //buildSelectedItems();
  }, 10)
});


let order = localStorage.length <= 0 ? [] : [localStorage.getItem('order').split(',')];


const cartBtnBhvr = () => {
  btnProduct.forEach(item => {
    item.addEventListener('click', (e) => {
      let clickNumb = btnProduct.indexOf(item);
      order.push(productId[clickNumb]);
      localStorage.setItem('order', order);
      console.log(order);
      clientResult(); 
      buildRmvBtns();
      buildSelectedItems();
    }) 
  });
  //clientResult(); 
}
/*
const rmvProduct = () => {
    rmvProduct.forEach(item => {
        item.addEventListener('click', (e) => {
            if(order.filter(item)==item)
        })
    })
};
<button class="rmv__btn rmv__btn--${item._id}">
        <div class="cart__icon">retirer du panier</div>
      </button>
*/
let rmvBtn = document.getElementById('remove-product');
const buildRmvBtns = () => {
    //resultOrder.forEach(item => {
        if(resultOrder.length > 0){
            rmvBtn.style.display = 'inline';
        }else{
            rmvBtn.style.display = 'none';
        }
   // })
};

    rmvBtn.addEventListener('click', (e) => {
        resultOrder.pop();
        order = resultOrder;
          if(resultOrder.length !== 0){
            localStorage.setItem('order', order);
            clientResult(); 

          }else{
            localStorage.clear();
            document.location.reload();
            clientResult(); 
          }
        })


const buildSelectedItems = () => {
        resultOrder.forEach(el => {
      const selectedItem = document.createElement('div');
      selectedItem.classList.add('selected-item');
      let commonId = productList.filter(Object => Object._id == el);
      console.log(el);
      console.log(commonId);
      let selectedItemNumb = '';
      selectedItem.innerHTML = `<h3 class="cart-selected__heading">${commonId[0].name}</h3>
        <p class="cart-selected__opt">${commonId[0].lenses}</p>
        <p class="cart-selected__price">${commonId[0].price}</p>
        <p class="cart-selected__multiple">${selectedItemNumb}</p>
        <button class="cart-selected__btn remove__product">-</btn>`;
     /* let checkMultiples = resultOrder.filter(Element => Element == el);
      console.log(checkMultiples.length);
          if(checkMultiples.length >= 1){
            selectedItemNumb.innerText = checkMultiples.length;
          }*/
          selectedItemWrap.appendChild(selectedItem);
        });    
}

//////////////////////////////////////////////////////////To display LocalStorage state after clear() method page needs to be refreshed.

  rmvCart.addEventListener('click', () => {
    localStorage.clear();
    orderResults.textContent = `choisissez un produit`;
    document.location.reload();
});

//console.log(order);