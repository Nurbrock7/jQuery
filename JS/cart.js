'use strict'
let items = document.getElementsByClassName('item');
console.log(items);

let cart = [
    {name: name , price: price,},
    {name: name , price: price,},
    {name: name , price: price,},
    {name: name , price: price,},
    {name: name , price: price,},
    {name: name , price: price,},
];

function addCart(name, price) {
    // create item
    let item = {
        name: name,
        price: price,
    } 
};

if (cart.length!=0) {
    let check = false; 
    for (let cartItem in  cart) {
        if (cart [cartItem].name === item.name) {
            check = true;
        }
    }


// if check item returns false , item was not found in the array.

if (!check) {cart.push(item)}
} else { cart.push(item);
}


// Get cart div

let div = document.getElementById('cart');

// cart clear

div.innerHTML = "";

// show cart updated array 

for (let value in cart) {
    // create a <li> node
    let node = document.createElement("li");

    let textnode = document.createTextNode(cart[value].name);
    
    // append the textvto <li>
    node.appendChild(textnode);

    // append <li> to <ul> with ID 'my list'

    div.appendChild(node);
}



// STILL TO DO

// reove an item from cart
// write a function that calculates the total in the cart
// add a quantuty to cart items
// be abale to inccrease and decrease the quantity