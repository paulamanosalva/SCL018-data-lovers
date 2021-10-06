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

let tankClass = `<div class="champ-class"><img class="class-icon" src="images/tank-white.png"></div>`
let fighterClass = `<div class="champ-class"><img class="class-icon" src="images/fighter-white.png"></div>`
let assassinClass = `<div class="champ-class"><img class="class-icon" src="images/assassin-white.png"></div>`
let mageClass = `<div class="champ-class"><img class="class-icon" src="images/mage-white.png"></div>`
let marksmanClass = `<div class="champ-class"><img class="class-icon" src="images/marksman-white.png"></div>`
let supportClass = `<div class="champ-class"><img class="class-icon" src="images/support-white.png"></div>`
let emptyClass = `<div class="empty-class"><img class="fake-icon" src="images/support-white.png"></div>`

let easyDifficulty = `<div class="champ-difficulty"><img src="images/easy-difficulty.png"></div>`
let mediumDifficulty = `<div class="champ-difficulty"><img class="champ-difficulty" src="images/difficulty-medium.png"></div>`
let hardDifficulty = `<div class="champ-difficulty"><img src="images/hard-difficulty.png"></div>`



// console.log(champions);

const drawCard = (champions) => {

    let myHtml = ``

        myHtml += `<div class="accordion-container">
        <button class="champion-btn">
        <div class="champ-icon"><img  src=${champions.img}></div>
        <h2 class="champ-name">${champions.name}</h2> <h3 class="champ-title">${champions.title}</h3>`

        champions.tags.forEach(element => {
            switch(element){
                case("Tank"):
                    myHtml += tankClass;
                    break;
                case("Fighter"):
                case("Melee"):
                    myHtml += fighterClass;
                    break;
                case("Support"):
                    myHtml += supportClass;
                    break;
                case("Marksman"):
                    myHtml += marksmanClass;
                    break;
                case("Mage"):
                    myHtml += mageClass;
                    break;
                case("Assassin"):
                    myHtml += assassinClass;
                    break;

            } 
//preguntar cómo se haría esto con un switch :
            if (champions.tags.length < 2) {
                myHtml += emptyClass;
            }
        });

        switch(champions.info.difficulty){

            case 1: case 2: case 3: case 4:
                myHtml += easyDifficulty;
                break;
            case 5: case 6: case 7:
                myHtml += mediumDifficulty;
                break;
            case 8: case 9: case 10:
                myHtml += hardDifficulty;
                break;            
        }


myHtml += `</button>`
return myHtml;
}

for (let i=0; i < champions.length; i++) {
    printChampion.innerHTML += drawCard(champions[i]);
}