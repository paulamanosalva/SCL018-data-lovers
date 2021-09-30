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
        <img src=${champions.img}>  <h2>${champions.name}</h2> <h3>${champions.title}</h3>
        <img src="https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png"><img src="https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png">
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

