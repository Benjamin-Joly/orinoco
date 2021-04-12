const orderSummaryWrap = document.querySelector('.order-summary__wrap');
console.log(orderSummaryWrap);
console.log(resultOrder);

const buildSummaryFromOrder = () => {
    let orderFilter;
    resultOrder.forEach((el) => {
        orderFilter = getCommonId(el);  
        orderFilter = orderFilter[0];
        buildSummaryItems(orderFilter);
    });
}

const buildSummaryItems = (element) => {
    console.log(element);
    const summaryItemWrap = document.createElement('div');
    summaryItemWrap.classList.add('summary-item__wrap', 'item__'+element._id);
    summaryItemWrap.innerHTML = `
        <h3 class="summary-item__heading">${element.name}</h3>
        <p class="summary-item__opt">${element.lenses}</p>
        <p class="summary-item__price">${element.price} €</p>
        <button class="cart-selected__btn rmv__btn" value="${element._id}"></btn>
    `;
    orderSummaryWrap.appendChild(summaryItemWrap);
}
