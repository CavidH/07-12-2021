let basket = []
let products = document.getElementsByClassName("plus");
let count = 0;


 basket.push({name:"testmodel",count:45})

// console.log(products)

for (const product of products) {
    // console.log(iterator);
    product.addEventListener('mouseup', () => {
        // if (yoxla)
        // console.log(product.parentElement.parentElement.parentElement.classList[0])
        checkBasket(product.parentElement.parentElement.parentElement.classList[0])
        console.log(basket)
        //    addToBasket();
    });
}


function checkBasket(productName) {
    // if (basket == null) {
        for (let index = 0; index < basket.length; index++) {
            if (basket[index].name == productName) {
                basket[index].count++;
            } else {
                addElementToBasket(productName)
            }
        }
    // } else {
    //     console.log("leng 0 di")
    //     addElementToBasket(productName)
    // }
}
function addElementToBasket(productName) {
    console.log("element add ")

    basket.push({
        name: productName,
        count: 0
    });
}

// function addToBasket() {
//     count += 1
//     let basket = document.querySelector(".count")
//     console.log(basket)
// basket.innerText = count
// }