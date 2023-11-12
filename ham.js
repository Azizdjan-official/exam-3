let cheese = document.querySelector('.cheese');
let meat = document.querySelector('.meat');
let onion = document.querySelector('.onion');
let salad = document.querySelector('.salad');
let tomato = document.querySelector('.tomato');
let pickle = document.querySelector('.ot');
let price = [2, 5, 1, 1, 2, 3];
let totalAmount = document.getElementById('total');
total = 2;
let mashulotlar2 = document.querySelectorAll('.mashulotlar2');
let reset = document.getElementById('reset');
let layers = document.querySelector('.qatlam');

let btnArr = [cheese, meat, onion, salad, tomato, pickle];


let products = ["./burger-layers/cheese.png",
 "./burger-layers/meat.png", 
 "./burger-layers/onion.png" ,
 "./burger-layers/salad.png", 
 "./burger-layers/tomato.png",
 "./burger-layers/pickle.png"];





function main(){
    
mashulotlar2.forEach((item, index) => {
    item = btnArr[index];
    price[index];
    item.addEventListener('click', () => {
        total += price[index];
        totalAmount.textContent = 'Total: ' + '$' + total;
        let img = document.createElement('img');
        img.src = products[index];
        img.classList.add('recipe-item');
        layers.appendChild(img);
        img.style.height = '10px'; 
    });
});
};

main();
reset.addEventListener('click', () => {
    setTimeout(() => {
        document.location.reload();
      }, 200);
});






