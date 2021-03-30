////////////////////////////////////////basic init. before adding data.
const orderResults = document.getElementById('order-results');
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
/////////////////////////////////////////get the already-saved order on client side
function clientResult(){
  if(localStorage.length !==0){
    resultOrder = localStorage.getItem('order').split(',');
    return orderResults.textContent = `vous avez commandé ${resultOrder.length} produits`;  
  } 
}

////////////////////////////////////////Init. order array with splited data from localstorage
let order = localStorage.length <= 0 ? [] : [localStorage.getItem('order').split(',')];

////////////////////////////////////////add clicked button value to order array and save it to localstorage before updating client order preview
const cartBtnBhvr = () => {
  btnProduct.forEach(item => {
    item.addEventListener('click', (e) => {
      order.push(item.value);
      localStorage.setItem('order', order);
      clientResult(); 
    }) 
  });
}

const getCommonId = (i) => {
 return (productList.filter(Object => Object._id == i));
}


////////////////////////////////////////////////cart add order items
const buildSelectedItems = () => {
  if(resultOrder.length >= 0){  
    resultOrder.forEach(el => {
      let commonId = getCommonId(el);
      selectedItem = document.createElement('div');
      selectedItem.classList.add('selected-item', `selected-item__${commonId[0]._id}`);
      selectedItem.innerHTML = `<h3 class="cart-selected__heading">${commonId[0].name}</h3>
        <p class="cart-selected__opt">${commonId[0].lenses}</p>
        <p class="cart-selected__price">${commonId[0].price} €</p>      
        <button class="cart-selected__btn rmv__btn" value="${commonId[0]._id}">X</btn>`;
        selectedItemWrap.appendChild(selectedItem); 
        //////////////////////////////////////////////////Add sum to cart info
        });
        
        btnProduct.forEach(btn => {
        btn.addEventListener('click', (e) => {
          let commonId = getCommonId(btn.value);
          selectedItem = document.createElement('div');
          selectedItem.classList.add('selected-item', `selected-item__${commonId[0]._id}`);
          selectedItem.innerHTML = `<h3 class="cart-selected__heading">${commonId[0].name}</h3>
            <p class="cart-selected__opt">${commonId[0].lenses}</p>
            <p class="cart-selected__price">${commonId[0].price} €</p>      
            <button class="cart-selected__btn rmv__btn" value="${commonId[0]._id}">X</btn>`;
            selectedItemWrap.appendChild(selectedItem);
            
            clientResult(); 
            let cartResult = totalCart += commonId[0].price;
            totalCart==cartResult;
            totalCartField.textContent = `${totalCart} €`;
        })
      })
  }
}

const sumFromOrder = () => {
  resultOrder.forEach(element => {
    let objFromOrder = getCommonId(element);
    let cartResult = totalCart += objFromOrder[0].price;
    totalCart==cartResult;
  })
    totalCartField.textContent = `${totalCart} €`;
}



////////////////////////////////////////////////cart remove order items
const supprBuiltItems = () => {
  rmvBtn = Array.from(document.querySelectorAll('.rmv__btn'));
  const currentCart = document.getElementById('current__cart');
  currentCart.addEventListener('click', (e) => {
    const item = e.target;

    const id = resultOrder.indexOf(item.value);
    const removedId = resultOrder.splice(id, 1); 
    order=resultOrder;
    localStorage.setItem('order', order);

    let objFromOrder = getCommonId(item.value);
    let cartResult = totalCart -= objFromOrder[0].price;
    totalCart==cartResult;
    totalCartField.textContent = `${totalCart} €`;

    if(resultOrder == '' || resultOrder[0].value == 'undefined'){
          localStorage.clear()
        }

    const parent = item.parentElement;
    if(item.classList[1] == 'rmv__btn'){
      parent.remove(parent);
    }
  })
}



//////////////////////////////////////////////////////////To display LocalStorage state after clear() method page needs to be refreshed.

  rmvCart.addEventListener('click', () => {
    localStorage.clear();
    orderResults.textContent = `choisissez un produit`;
    document.location.reload();
});
