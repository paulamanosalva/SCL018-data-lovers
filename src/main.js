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

// let tankClass = `<img class="class1" src="images/mage-white.png">`
// let fighterClass = `<img class="class1" src="images/fighter-white.png">`
// let assassinClass = `<img class="class1" src="images/assassin-white.png"`
// let mageClass = `<img class="class1" src="images/mage-white.png"`
// let MarksmanClass = `<img class="class1" src="images/marksman-white.png"`
// let supportClass = `<img class="class1" src="images/support-white.png">`

// let easyDifficulty = `<img class="class1" src="images/easy-difficulty.png">`
// let mediumDifficulty = `<img class="class1" src="images/difficulty-medium.png">`
// let hardDifficulty = `<img class="class1" src="images/hard-difficulty">`

// const getClass = (champions) => {
//     if (champions.tags[0] === "Fighter") { return fighterClass}
//     else { console.log("hola") }
// }



const drawCard = (champions) => {
    return `
    <div class="accordion-container">
        <button class="champion-btn">
        <div class="champ-icon"><img  src=${champions.img}></div>  <h2 class="champ-name">${champions.name}</h2> <h3 class="champ-title">${champions.title}</h3>
        <div class="champ-class">${champions.tags}</div> 
        <div class="champ-difficulty">${champions.info.difficulty}</div>
        </button>
    </div>`;
};

for (let i=0; i < champions.length; i++) {
    printChampion.innerHTML += drawCard(champions[i]);
}

// const getClass = (champions) => { 
//     let class1 = champions.tags[0];
//     if (class1 === "Fighter"){
//         document.getElementsByClassName("champ-class").innerHTML += fighterClass;
//     }
// }
// drawCard(Object.values(champions));

    // printChampion.innerHTML += drawCard(champions[i]);
    
// console.log(Object.values(champions)[0]);
// console.log(example, data);
// console.log(Object.values(champions)[0]);

