/////////////////////////////////////////////////*****************Get the product ID and iterate a button and a css class for each ID it receives. */

let url = 'http://localhost:3000/api/cameras';

const productId = [];
const productList = [];
let productDescr = [];
let productName = [];
let productPrice = [];
let productOpt = [];
let productImgUrl = [];

fetch(url).then((response) => response.json().then((data) => {
      data.forEach(element => {
        productId.push(element._id);
        productDescr.push(element.description);
        productName.push(element.name);
        productPrice.push(element.price);
        productOpt.push(element.lenses);
        productImgUrl.push(element.imageUrl);
        productList.push(element);
      });
}));

const orderWrap = document.getElementById('order-wrap');
let btnProduct;
let rmvProduct;

  const loadDataFirst = new Promise((resolve, reject) => {
      window.addEventListener('load', () => {
        setTimeout(() => {
          resolve()
        }, 10)
      });
  });

  loadDataFirst.then(() => {
    ////////////loadData.js/////////
    return createNewItem();   
}).then((result) => {
  ////////////cart.js/////////
  return cartBtnBhvr();
}).then((display) => {
  ////////////cart.js/////////
  return clientResult();
}).then((test) => {
  ////////////cart.js/////////
  return buildRmvBtns();
}).then((test) => {
  ////////////cart.js/////////
  return buildSelectedItems();
})
const createNewItem = () => {
  productList.forEach(item => {
   // const objSelected = productList.filter(Object => Object._id == item);
    const itemIndexNumber = productId.indexOf(item);
    const newItem = document.createElement('div');
    newItem.classList.add("product__container", `product__container--${itemIndexNumber}`);
    newItem.innerHTML = 
    `<img class="product__img product__img--${itemIndexNumber}" src="${item.imageUrl}" alt="${item.name}">
    <div class="product__item--type-container">
      <h3 class="product__item--heading">
      ${item.name}
      </h3>
      <p class="product__item--descr">
      ${item.description}
      </p>
      <p class="product__item--price">
      ${item.price}
      </p>
      <button class="product__btn product__btn--${itemIndexNumber}">
        <div class="cart__icon">ajouter au panier</div>
      </button>
    </div>`;
    orderWrap.appendChild(newItem);
  });
  btnProduct = Array.from(document.querySelectorAll('.product__btn'));
  rmvProduct = Array.from(document.querySelectorAll('.rmv__btn'));
}


//btnNumber =>  itemIndexNumber, newItem => newItem
//don't forget to set the btn elements this class product__btn
