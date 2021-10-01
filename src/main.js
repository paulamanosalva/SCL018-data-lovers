// import { example } from './data.js';
import data from "./data/lol/lol.js";
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

// const showChampion = document.getElementsByClassName("champion-btn");
// let i;

// for (i = 0; i < showChampion.length; i++) {
//     showChampion[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.display === "flex") {
//             panel.style.display = "none";
//         } else {
//             panel.style.display = "flex";
//         }
//     });
// }

let champions = Object.values(data.data);
let printChampion = document.getElementById("champion-button");


const drawCard = (champions) => {
    return `
    <div class="accordion-container">
        <button class="champion-btn">
        <div class="champ-icon"><img  src=${champions.img}></div>  <h2 class="champ-name">${champions.name}</h2> <h3 class="champ-title">${champions.title}</h3>
        <div class="champ-class"><img class="class1" src="./images/assassin-white.png"><img class="class2" src="./images/assassin-white.png"></div><div class="champ-difficulty"><img src="./images/difficulty-medium.png"></div>
        </button>
    </div>`;
};

for (let i=0; i < champions.length; i++) {
    printChampion.innerHTML += drawCard(champions[i]);
}

// drawCard(Object.values(champions));

    // printChampion.innerHTML += drawCard(champions[i]);
    
// console.log(Object.values(champions)[0]);
// console.log(example, data);
// console.log(Object.values(champions)[0]);

