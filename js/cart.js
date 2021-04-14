
////////////////////////////////////////filter to get a common ID between order array and products loaded array.
const getCommonId = (i) => {
 return (productList.filter(Object => Object._id == i));
}

const displayCartNotif = () => {
  if(resultOrder == '' || resultOrder[0].value == 'undefined' || resultOrder.length == 0){
    orderResults.style.display = "none";
    orderResultsWrap.style.display = "none";
  }else{
    orderResults.style.display = "inline";
    orderResultsWrap.style.display = "flex";
  } 
}

const calculateCartValue = (product) => {
  let cartResult = totalCart += product.price;
  totalCart==cartResult;
  totalCartField.textContent = `${totalCart} €`;
  orderResults.textContent = resultOrder.length;
}

const buildSelectedProduct = (value) => {
  selectedItem = document.createElement('div');
   selectedItem.classList.add('selected-item', `selected-item__${value._id}`);
    selectedItem.innerHTML = `<h3 class="cart-selected__heading">${value.name}</h3>
                            <p class="cart-selected__opt">${value.lenses}</p>
                            <p class="cart-selected__price">${value.price} €</p>      
                            <button class="cart-selected__btn rmv__btn" value="${value._id}"></btn>`;
      selectedItemWrap.appendChild(selectedItem);
  clientResult(); 
}

////////////////////////////////////////////////cart add order items onload and onclick
const buildSelectedItems = () => {
  if(resultOrder.length >= 0){
    activeValidBtn(); 
    resultOrder.forEach(el => {
      let commonIdFiltered = getCommonId(el);
      let commonId = commonIdFiltered[0];
          buildSelectedProduct(commonId);
          orderResults.textContent = resultOrder.length;
        });
        if(typeof(btnProduct)!=="undefined"){
          btnProduct.forEach(btn => { 
            btn.addEventListener('click', (e) => {
              if(resultOrder[0] == ""){
                resultOrder.splice(0, 1);
              }
              let commonIdFiltered = getCommonId(btn.value);
              let commonId = commonIdFiltered[0];
              buildSelectedProduct(commonId);
              calculateCartValue(commonId);
            })
          })
        }
        displayCartNotif();   
  }
}
////////////////////////////////////////////////remove items from cart and from order array to-do list like behavior.
const supprBuiltItems = () => {
  rmvBtn = Array.from(document.querySelectorAll('.rmv__btn'));
  const currentCart = document.getElementById('current__cart');
  currentCart.addEventListener('click', (e) => {
    if(resultOrder[0] == ""){
      resultOrder.splice(0, 1);
    }
    const item = e.target;
    const id = resultOrder.indexOf(item.value);
    const removedId = resultOrder.splice(id, 1);
    let objFromOrder = getCommonId(item.value);
    let cartResult = totalCart -= objFromOrder[0].price;
    totalCart==cartResult;
    totalCartField.textContent = `${totalCart} €`;
    orderResults.textContent = resultOrder.length;
    localStorage.setItem('order', resultOrder);
    clientResult();
    if(resultOrder == '' || resultOrder[0].value == 'undefined' || resultOrder.length == 0){
      orderResults.style.display = "none";
      orderResultsWrap.style.display = "none";
      validOrder.classList.add('inactive');
          localStorage.removeItem('order');
        }
    const parent = item.parentElement;
    if(item.classList[1] == 'rmv__btn'){
      parent.remove(parent);
    }
    if(typeof(removeSummaryItem) !== "undefined"){
      removeSummaryItem();
    }
  })
}
//////////////////////////////////////////////////////////remove the whole order, clear everything in localStorage, abort mission, reload page, forget it all and start a new life.
  rmvCart.addEventListener('click', () => {
    localStorage.removeItem('order');
    document.location.reload();
});

/*
  window.addEventListener('pageshow', () => {
    clientResult();
    console.log(productList);
      resultOrder.forEach((product) => {
       let commonId = getCommonId(product);
       console.log(commonId);
      })
  });
*/