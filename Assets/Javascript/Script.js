let basket = []
let addproducts = document.getElementsByClassName("plus");
//console.log(addproducts)
let countProductCards = document.getElementsByClassName("count-product");
//console.log(countProductCards[1])
//console.log(countProductCards[0].parentElement.parentElement.parentElement.classList[0])

let removeproducts = document.getElementsByClassName("minus");
//console.log(removeproducts)
let count = 0;




basket.push({ name: "testmodel", count: 45 })
// console.log(products)

addProduct()
removeProduct()

//add
// function getByIndex(){
//     for (let index = 0; index < basket.length; index++) {
            
//             }
// }

// function countCardProductsCalc() {
//     for  (let index = 0; index < countProductCards.length; index++) {
            
//             countProductCards[index].innerText=getByIndex(index)

//     }
// }
function addProduct() {
    for (const product of addproducts) {
        // console.log(iterator);
        product.addEventListener('mouseup', () => {
            // if (yoxla)
            // console.log(product.parentElement.parentElement.parentElement.classList[0])
            checkBasket(product.parentElement.parentElement.parentElement.classList[0])
            countCardProductsCalc();
            //console.log(basket)

        });

    }
}


//remove
function removeProduct() {
    for (const product of removeproducts) {
        // console.log(iterator);
        product.addEventListener('mouseup', () => {
            // if (yoxla)
            // console.log(product.parentElement.parentElement.parentElement.classList[0])
            checkBasketForRemove(product.parentElement.parentElement.parentElement.classList[0])
            // removeProductBasketForCount();
           // console.log(basket)

        });

    }
}



function checkBasketForRemove(productName) {
    for (let index = 0; index < basket.length; index++) {
        if (basket[index].name == productName) {
            if (basket[index].count > 0) {
                basket[index].count--;
                removeProductBasketForCount();
            } else {
                alert("Sebetnizde qeyd olunan mehsul artiq yoxdur")
            }

            return;
        }

        // console.log(basket[index].name)
    }
    for (let index = 0; index < basket.length; index++) {
        if (basket[index].name != productName) {
            alert("Sebetnizde qeyd olunan mehsul yoxdur");
            return;
        }

        // console.log(basket[index].name)
    }
}
function checkBasket(productName) {
    for (let index = 0; index < basket.length; index++) {
        if (basket[index].name == productName) {
            basket[index].count++;
            return;
        }

        // console.log(basket[index].name)
    }
    for (let index = 0; index < basket.length; index++) {
        if (basket[index].name != productName) {
            addElementToBasket(productName);
           // console.log("element yaradildi")
            return;
        }

        // console.log(basket[index].name)
    }
}

// let flag = true;
// for (let index = 0; index < basket.length; index++) {
//     if (basket[index].name == productName) {
//         basket[index].count++;
//         flag = false;
//         break;
//     }
// }
// if (flag) {
//     addElementToBasket(productName)

// }

// } else {
//     console.log("leng 0 di")
//     addElementToBasket(productName)
// }

function addElementToBasket(productName) {
   // console.log("element add ")

    basket.push({
        name: productName,
        count: 1
    });
}

function addProductBasketForCount() {
    count += 1
    let basket = document.querySelector(".count")
   // console.log(basket)
    basket.innerText = count
}
function removeProductBasketForCount() {

    count -= 1
    let basket = document.querySelector(".count")
   // console.log(basket)
    basket.innerText = count

}