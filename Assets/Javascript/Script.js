basket={}
let products = document.getElementsByClassName("plus");
let count = 0;
console.log(products)

for (const product of products) {
    // console.log(iterator);
    product.addEventListener('click', () => {
        addToBasket();
    });
}

function addToBasket() {
    count += 1
    let basket = document.querySelector(".count")
    console.log(basket)
basket.innerText = count
}