
////////////////////////////////contact API get and save DATA on separated arrays

fetch(url).then((response) => {
  if(response.ok){
    response.json()
    .then((data) => {
      console.log(data);
      productList = data;
      console.log(productList);
    }).then(() => {
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
    }).then(() => {
      ////////////cart.js/////////update cart value in €
      return activeValidBtn();
    }).then(() => {
      return alertHeading.textContent="Retrouvez nos modèles de collections entièrement personalisables";
    })
  }else{
    alertHeading.textContent="Le serveur rencontre actuellement un problème nous faisons notre maximum pour réduire votre attente ;)";
  } 
});
