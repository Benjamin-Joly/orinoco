
async function loadData() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

document.addEventListener('DOMContentLoaded', async () => {
  try{
    productList = await loadData();
  }catch(e){
    console.log(e);
    alertHeading.textContent = "Data still looking for a way to reach you, please reload the page."
  }
  parsePriceUnit(productList);
  if(typeof(createNewItem) !== 'undefined'){
    createNewItem();
    cartBtnBhvr();
  }
  clientResult();
  supprBuiltItems();
  buildSelectedItems();
  sumFromOrder();
  activeValidBtn();
  loadCartValue();
  if(typeof(buildSummaryFromOrder)!== "undefined"){
    return buildSummaryFromOrder();
  }
})

////////////////////////////////update changes when back and forward btn is used. [fix for UX]
window.addEventListener('pageshow', async () => {
  try{
    productList = await loadData();
  }catch(e){
    console.log(e);
  }
  parsePriceUnit(productList);
  if(typeof(createNewItem) !== 'undefined'){
    createNewItem();
    cartBtnBhvr();
  }
  clientResult();
  buildSelectedItems();
  activeValidBtn();
  loadCartValue();
  if(typeof(removeSummaryItem)!== "undefined"){
    return removeSummaryItem();
  }
})
