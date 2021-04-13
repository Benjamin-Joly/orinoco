const orderSummaryWrap = document.querySelector('.order-summary__wrap');
console.log(orderSummaryWrap);
console.log(resultOrder);

const buildSummaryFromOrder = () => {
    let orderFilter;
    if(resultOrder.length>=0 || resultOrder !== null || resultOrder !== ""){
        resultOrder.forEach((el) => {
            orderFilter = getCommonId(el);  
            orderFilter = orderFilter[0];
            buildSummaryItems(orderFilter);
        });
    }   
}

const buildSummaryItems = (element) => {
    const summaryItemWrap = document.createElement('div');
    summaryItemWrap.classList.add('summary-item__wrap', 'item__'+element._id);
    summaryItemWrap.innerHTML = `
        <h3 class="summary-item__heading">${element.name}</h3>
        <p class="summary-item__opt">${element.lenses}</p>
        <p class="summary-item__price">${element.price} €</p>
    `;
    orderSummaryWrap.appendChild(summaryItemWrap);
}


const removeSummaryItem = () => {
    orderSummaryWrap.innerHTML = "";
    clientResult();
    resultOrder.forEach((el) => {
        orderFilter = getCommonId(el);  
        orderFilter = orderFilter[0];
        buildSummaryItems(orderFilter);
    });
}