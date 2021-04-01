////////////////////////////////////////add clicked button value to order array and save it to localstorage before updating client order preview
const cartBtnBhvr = () => {
  btnProduct.forEach(item => {
    item.addEventListener('click', (e) => {
      resultOrder.push(item.value);
      console.log(resultOrder);
      localStorage.setItem('order', resultOrder);
      clientResult(); 
    }) 
  });
}
const getCommonId = (i) => {
 return (productList.filter(Object => Object._id == i));
}
////////////////////////////////////////////////cart add order items onload and onclick
const buildSelectedItems = () => {
  if(resultOrder.length >= 0){  
    resultOrder.forEach(el => {
      let commonId = getCommonId(el);
      console.log(commonId);
      selectedItem = document.createElement('div');
      selectedItem.classList.add('selected-item', `selected-item__${commonId[0]._id}`);
      selectedItem.innerHTML = `<h3 class="cart-selected__heading">${commonId[0].name}</h3>
        <p class="cart-selected__opt">${commonId[0].lenses}</p>
        <p class="cart-selected__price">${commonId[0].price} €</p>      
        <button class="cart-selected__btn rmv__btn" value="${commonId[0]._id}">X</btn>`;
        selectedItemWrap.appendChild(selectedItem); 
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
////////////////////////////////////////////////cart remove order items
const supprBuiltItems = () => {
  rmvBtn = Array.from(document.querySelectorAll('.rmv__btn'));
  const currentCart = document.getElementById('current__cart');
  currentCart.addEventListener('click', (e) => {
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

    if(resultOrder == '' || resultOrder[0].value == 'undefined'){
      orderResults.style.display = "none";
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
