basket={}
let products = document.getElementsByClassName("plus");
let count = 0;
 
// console.log(products)

for (const product of products) {
    // console.log(iterator);
    product.addEventListener('click', () => {
        if (yoxla)
        console.log(product.parentElement.parentElement.parentElement.classList[0])
        // addToBasket();
    });
}


function checkBasket(productName){
for (let index = 0; index < basket.length; index++) {
    if (basket[index].name==productName){
        basket[index].count++;
    }

    }
}
function addElementToBasket(productName){
    basket.add([name:productName,
        count:0
    ])
}

// function addToBasket() {
//     count += 1
//     let basket = document.querySelector(".count")
//     console.log(basket)
// basket.innerText = count
// }