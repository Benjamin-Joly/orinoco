////////////////////////////////Basic Init before Load datas

let url = 'http://localhost:3000/api/cameras';

const productId = [];
const productList = [];
let productDescr = [];
let productName = [];
let productPrice = [];
let productOpt = [];
let productImgUrl = [];
const orderWrap = document.getElementById('order-wrap');
let btnProduct;
let rmvProduct;


const changePriceUnit = () => {
  productList.forEach(el => {
    el.price === (el.price/=100);
    console.log(el.price);
  })
}

////////////////////////////////contact API get and save DATA on separated arrays
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


////////////////////////////////short delay before displaying data so everything can be loaded.
  const loadDataFirst = new Promise((resolve, reject) => {
      window.addEventListener('load', () => {
        setTimeout(() => {
          resolve()
        }, 10)
      });
  });

  loadDataFirst.then(() => {
  ////////////loadData.js//////Get data from API and after short loading time create them on the landing page HTML.
    return changePriceUnit();   
}).then(() => {
  ////////////cart.js/////////init addToCart btns
  return createNewItem();
}).then(() => {
  ////////////cart.js/////////init addToCart btns
  return cartBtnBhvr();
}).then(() => {
  ////////////cart.js/////////update the order on a client side preview
  return clientResult();
}).then(() => {
  ////////////cart.js/////////build ordered items on the cart page
  return supprBuiltItems();
}).then(() => {
  ////////////cart.js/////////build ordered items on the cart page
  return buildSelectedItems();
}).then(() => {
  ////////////cart.js/////////update cart value in €
  return sumFromOrder();
})



  //////////////////Get data from API and after short loading time create them on the landing page HTML.
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
      ${item.price} €
      </p>
      <button class="product__btn product__btn--${item._id}" value ="${item._id}">
        <div class="cart__icon">ajouter au panier</div>
      </button>
    </div>`;
    orderWrap.appendChild(newItem);
  });
  btnProduct = Array.from(document.querySelectorAll('.product__btn'));
}
