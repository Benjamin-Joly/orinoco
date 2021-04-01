
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
         if(productList.length > 0){
          resolve()
         }else{
           setTimeout(() => {
            resolve()
           }, 100)
         } 
        }, 100)
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
  ////////////cart.js/////////suppr ordered items on the cart page
  return supprBuiltItems();
}).then(() => {
  ////////////cart.js/////////build ordered items on the cart page
  return buildSelectedItems();
}).then(() => {
  ////////////cart.js/////////update cart value in €
  return sumFromOrder();
})
