////////////////////////////////////////basic init. before adding data.
const orderResults = document.getElementById('order-results');
const rmvCart = document.getElementById('remove-cart');
let filterIndex = [];
let resultOrder = [];
let rmvBtn = [];
let selectedItemWrap = document.createElement('div');
    selectedItemWrap.classList.add('selected-item__wrap');
    orderWrap.appendChild(selectedItemWrap);


/////////////////////////////////////////get the already-saved order on client side
function clientResult(){
  if(localStorage.length !==0){
    resultOrder = localStorage.getItem('order').split(',');
    return orderResults.textContent = `vous avez commandé ${resultOrder.length} produits`;    
  } 
}


////////////////////////////////////////Init. basic functionalities after all data is loaded
window.addEventListener('load', () => {
  setTimeout(() => {
    clientResult();
    supprBuiltItems();
    //buildSelectedItems();
  }, 10)
});

////////////////////////////////////////Init. order array with splited data from localstorage
let order = localStorage.length <= 0 ? [] : [localStorage.getItem('order').split(',')];

////////////////////////////////////////add clicked button value to order array and save it to localstorage before updating client order preview
const cartBtnBhvr = () => {
  btnProduct.forEach(item => {
    item.addEventListener('click', (e) => {
      order.push(item.value);
      localStorage.setItem('order', order);
      console.log(order);
      clientResult(); 
      //buildRmvBtns();
      // buildSelectedItems();
    }) 
  });
  //clientResult(); 
}



    

////////////////////////////////////////////////cart add order items
const buildSelectedItems = () => {
  if(resultOrder.length >= 0){
    resultOrder.forEach(el => {
      let commonId = productList.filter(Object => Object._id == el);
      const selectedItem = document.createElement('div');
      selectedItem.classList.add('selected-item', `selected-item__${commonId[0]._id}`);
        console.log(commonId[0]._id);
      selectedItem.innerHTML = `<h3 class="cart-selected__heading">${commonId[0].name}</h3>
        <p class="cart-selected__opt">${commonId[0].lenses}</p>
        <p class="cart-selected__price">${commonId[0].price}</p>        
        <button class="cart-selected__btn rmv__btn" value="${commonId[0]._id}">X</btn>`;

        selectedItemWrap.appendChild(selectedItem);
          /////////////////////////////////////////////////////filter
        });
  }
}
////////////////////////////////////////////////cart remove order items
const supprBuiltItems = () => {
  rmvBtn = Array.from(document.querySelectorAll('.rmv__btn'));
    rmvBtn.forEach(item => {
      item.addEventListener('click', () => {
      const btnParent = item.parentNode;
      btnParent.classList.add('selected-item--hidden');
      console.log(resultOrder);
      console.log(item.value);
      const id = resultOrder.indexOf(item.value);
      console.log(id);
      const removedId = resultOrder.splice(id, 1);
      console.log(removedId);
      console.log(resultOrder); 
      order=resultOrder;
      console.log(order);
      localStorage.setItem('order', order);
      clientResult();
        if(resultOrder[0] == '')
        localStorage.clear();
      }) 
    });
}



//////////////////////////////////////////////////////////To display LocalStorage state after clear() method page needs to be refreshed.

  rmvCart.addEventListener('click', () => {
    localStorage.clear();
    orderResults.textContent = `choisissez un produit`;
    document.location.reload();
});
