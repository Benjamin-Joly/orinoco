const orderWrap = document.getElementById('order-wrap');
const productSection = document.getElementById('product__section');
let btnProduct;
let rmvProduct;
const alertHeading = document.getElementById('alert-heading');
const validOrder = document.getElementById('valid-order');
const orderResults = document.getElementById('order-results');
const orderResultsWrap = document.querySelector('.order-results__wrap');
console.log(orderResultsWrap);
const rmvCart = document.getElementById('remove-cart');
console.log(rmvCart);
let filterIndex = [];
let resultOrder = [];
let rmvBtn = [];
let selectedItemWrap = document.createElement('div');
    selectedItemWrap.id = 'current__cart';
    selectedItemWrap.classList.add('selected-item__wrap');
    orderWrap.appendChild(selectedItemWrap);
let selectedItem;
let numbOfMultiple;
let totalCartField = document.getElementById('total-cart');
let totalCart = 0;

const parsePriceUnit = () => {
    productList.forEach(el => {
      el.price === (el.price/=100);
    })
  }
 
 
 //////////////////Get data from API and after short loading time create them on the landing page HTML.
  function delay(URL) {
    setTimeout( function() { window.location = URL }, 1200 );
  }



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
        `
        <div class="product__wrap">
        <a class="${dataId} product__link" data-link="${dataId}" href="javascript:delay('frontend/pages/produit.html')">
        <img id="img__${dataId}" class="product__img" src="${dataUrl}" alt="${dataName}">
        </a>
        <div class="product__item--type-container">
        <a class="${dataId} product__link--type" data-link="${dataId}" href="frontend/pages/produit.html">
        <h3 class="product__item--heading">
        ${dataName}
        </h3>
        <p class="product__item--descr">
        ${dataDescr}
        </p>
        </a>
        <p class="product__item--price">
        ${dataPrice} €
        </p>
        <button class="product__btn product__btn--${dataId} cta--white" value ="${dataId}">
          <div class="cart__icon">ajouter au panier</div>
        </button>
      </div>
      </div>
      `
      );
    });
   
      newItem.innerHTML = dataMap.join('');
      productSection.appendChild(newItem);
      btnProduct = Array.from(document.querySelectorAll('.product__btn'));
      const linkSelect = Array.from(document.querySelectorAll(".link__product"));
      linkSelect.forEach(el => {
          el.addEventListener('click', (e) => {
            delay();
            const trackedId = el.dataset.link;
            console.log(trackedId);
            localStorage.setItem(['trackedLink'] , trackedId);
          })
      })
      /*const dataset = linkSelect.map(x => {
        const linkIds =  x.dataset.link;
          return console.log(linkIds);
      });*/
            
  }




  