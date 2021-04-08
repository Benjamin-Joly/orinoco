/////////////////////////////////////////////////*****************Data const an let for init */
let url = 'https://oc-p5-api.herokuapp.com/api/cameras';
let urlTemp = 'https://oc-p5-api.herokuapp.com/api/cameras';

let urlLocal = 'http://localhost:3000/api/cameras';
const productId = [];
let productList ;
let urlTeddies = 'https://ab-p5-api.herokuapp.com/api/teddies';

/////////////////////////////////////////////////*****************DOM elements targeted */
const orderWrap = document.getElementById('order-wrap');
const productSection = document.getElementById('product__section');
let btnProduct;
let rmvProduct;
const alertHeading = document.getElementById('alert-heading');
const validOrder = document.getElementById('valid-order');
const orderResults = document.getElementById('order-results');
const orderResultsWrap = document.querySelector('.order-results__wrap');
const rmvCart = document.getElementById('remove-cart');
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

/////////////////////////////////////////////////*****************parce the price value by 100 */
const parsePriceUnit = () => {
  productList.forEach(el => {
    el.price === (el.price/=100);
  })
}
/////////////////////////////////////////////////*****************activate (or not) the order validation btn */
const activeValidBtn = () => {
  if(resultOrder.length>0){
    return validOrder.classList.remove('inactive'); 
  }
}


///////////////////////////////////////////////////////////////////update and set the client view of the order depending on what's stored in local storage <== very important
  function clientResult(){
   if(localStorage.length === 0){
       totalCartField.textContent=="0";
       orderResults.style.display = "none";
      orderResultsWrap.style.display = "none";
   }else if(localStorage.getItem('order') == null){
    totalCartField.textContent=="0";
   }else if(localStorage.length > 0){
    resultOrder = localStorage.getItem('order').split(',');
    totalCartField.textContent==resultOrder.length;
    }else{
    totalCartField.textContent=="0";
   }
   if(resultOrder[0] == ""){
    resultOrder.splice(0, 1);
  }
  return resultOrder;
  }

///////////////////////////////////////////////////////////////////display and update cart amount

const sumFromOrder = () => {
    resultOrder.forEach(element => {
      let objFromOrder = getCommonId(element);
      let cartResult = totalCart += objFromOrder[0].price;
      totalCart==cartResult;
    })
      totalCartField.textContent = `${totalCart} €`;
  }