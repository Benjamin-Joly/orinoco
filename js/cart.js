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

////////////////////////////////////////////////cart add order items onload and onclick
const buildSelectedItems = () => {
  if(resultOrder.length >= 0){
    activeValidBtn(); 
    resultOrder.forEach(el => {
      console.log(el);
      let commonId = getCommonId(el);
        selectedItem = document.createElement('div');
        selectedItem.classList.add('selected-item', `selected-item__${commonId[0]._id}`);
        selectedItem.innerHTML = `<h3 class="cart-selected__heading">${commonId[0].name}</h3>
          <p class="cart-selected__opt">${commonId[0].lenses}</p>
          <p class="cart-selected__price">${commonId[0].price} €</p>      
          <button class="cart-selected__btn rmv__btn" value="${commonId[0]._id}"></btn>`;
          selectedItemWrap.appendChild(selectedItem); 
          orderResults.textContent = resultOrder.length;
        });
        if(typeof(btnProduct)!=="undefined"){
          ////////////////////////////////////////////////////test if the variable is defined before fire it(for product page)
          btnProduct.forEach(btn => { 
            btn.addEventListener('click', (e) => {
              if(resultOrder[0] == ""){
                resultOrder.splice(0, 1);
              }
              let commonId = getCommonId(btn.value);
              selectedItem = document.createElement('div');
              selectedItem.classList.add('selected-item', `selected-item__${commonId[0]._id}`);
              selectedItem.innerHTML = `<h3 class="cart-selected__heading">${commonId[0].name}</h3>
                <p class="cart-selected__opt">${commonId[0].lenses}</p>
                <p class="cart-selected__price">${commonId[0].price} €</p>      
                <button class="cart-selected__btn rmv__btn" value="${commonId[0]._id}"></btn>`;
                selectedItemWrap.appendChild(selectedItem);
                
                clientResult(); 
                let cartResult = totalCart += commonId[0].price;
                totalCart==cartResult;
                totalCartField.textContent = `${totalCart} €`;
                orderResults.textContent = resultOrder.length;
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
    //order=resultOrder;
    localStorage.setItem('order', resultOrder);
    clientResult();

    let objFromOrder = getCommonId(item.value);
    let cartResult = totalCart -= objFromOrder[0].price;
    totalCart==cartResult;
    totalCartField.textContent = `${totalCart} €`;
    orderResults.textContent = resultOrder.length;

    if(resultOrder == '' || resultOrder[0].value == 'undefined' || resultOrder.length == 0){
      orderResults.style.display = "none";
      orderResultsWrap.style.display = "none";
      validOrder.classList.add('inactive');
          localStorage.clear()
        }

    const parent = item.parentElement;
    if(item.classList[1] == 'rmv__btn'){
      parent.remove(parent);
    }
  })
}
//////////////////////////////////////////////////////////remove the whole order, clear everything in localStorage, abort mission, reload page, forget it all and start a new life.
  rmvCart.addEventListener('click', () => {
    localStorage.clear();
    document.location.reload();
});
