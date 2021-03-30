////////////////////////////////Basic Init before Load datas

let url = 'http://localhost:3000/api/cameras';

const productId = [];
const productList = [];
const orderWrap = document.getElementById('order-wrap');
let btnProduct;
let rmvProduct;


const parsePriceUnit = () => {
  productList.forEach(el => {
    el.price === (el.price/=100);
  })
}

////////////////////////////////contact API get and save DATA on separated arrays
fetch(url).then((response) => response.json().then((data) => {
      data.forEach(element => {
        productId.push(element._id);
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
    return parsePriceUnit();   
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
  const newItem = document.createElement('div');
  newItem.classList.add("product__container");
  const dataMap = productList.map(x => {
    const dataName = x.name;
    const dataId = x._id;
    const dataPrice = x.price;
    const dataDescr = x.description;
    const dataUrl = x.imageUrl;
    return (
      `<div class="product__wrap">
      <img class="product__img" src="${dataUrl}" alt="${dataName}">
    <div class="product__item--type-container">
      <h3 class="product__item--heading">
      ${dataName}
      </h3>
      <p class="product__item--descr">
      ${dataDescr}
      </p>
      <p class="product__item--price">
      ${dataPrice} €
      </p>
      <button class="product__btn product__btn--${dataId}" value ="${dataId}">
        <div class="cart__icon">ajouter au panier</div>
      </button>
    </div>
    </div>`
    );
  });
    newItem.innerHTML = dataMap;
    orderWrap.appendChild(newItem);
    btnProduct = Array.from(document.querySelectorAll('.product__btn'));
}


