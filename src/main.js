import { filterClass, filterDifficulty, searchFilter } from './data.js';

import data from "./data/lol/lol.js";

const champions = Object.values(data.data);

const printChampion = document.getElementById("champion-button");

const tankClass = `<div class="champ-class"><img class="class-icon" src="images/tank-white.png"></div>`
const fighterClass = `<div class="champ-class"><img class="class-icon" src="images/fighter-white.png"></div>`
const assassinClass = `<div class="champ-class"><img class="class-icon" src="images/assassin-white.png"></div>`
const mageClass = `<div class="champ-class"><img class="class-icon" src="images/mage-white.png"></div>`
const marksmanClass = `<div class="champ-class"><img class="class-icon" src="images/marksman-white.png"></div>`
const supportClass = `<div class="champ-class"><img class="class-icon" src="images/support-white.png"></div>`
const emptyClass = `<div class="empty-class"><img class="fake-icon" src="images/support-white.png"></div>`

const easyDifficulty = `<div class="champ-difficulty"><img src="images/easy-difficulty.png"></div>`
const mediumDifficulty = `<div class="champ-difficulty"><img class="champ-difficulty" src="images/difficulty-medium.png"></div>`
const hardDifficulty = `<div class="champ-difficulty"><img src="images/hard-difficulty.png"></div>`
// const champBtn = document.querySelectorAll(".champion-btn");
// const accordionContainer = document.querySelectorAll(".accordion-container");

// const showPanel = () =>{
//     accordionContainer.forEach((e) => {
//         // console.log(e)
//     e.addEventListener("click", (event) =>{
//     console.log(event.target.closest(".accordion-container").querySelector(".panel"))
//     event.target.closest(".accordion-container").querySelector(".panel").classList.toggle("hide");  
// });
// });
// }

const drawCard = (champions) => {

    let myHtml = ``
    let panel = ``

        myHtml += `<div class="accordion-container">
        <button class="champion-btn" id="champBtnId">
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

panel =  `<div class="panel hide">
<div class="splash-container"><img class="splash"
    src=${champions.splash}></div>
<div class="blurb-container">
    <p>${champions.blurb}
    </p>
</div>
<ul class="stats">
    <li class="stats-li">Hp:${champions.stats.hp}</li>
    <li class="stats-li">Hp regen:${champions.stats.hpregen}</li>
    <li class="stats-li">Mp:${champions.stats.mp}</li>
    <li class="stats-li">Armor:${champions.stats.armor}</li>
</ul>
<ul class="stats">
    <li class="stats-li">Spellblock:${champions.stats.spellblock}</li>
    <li class="stats-li">Attack range:${champions.stats.attackrange}</li>
    <li class="stats-li">AD:${champions.stats.attackdamage}</li>
    <li class="stats-li">Movespeed:${champions.stats.movespeed}</li>
</ul>
</div>`
        myHtml += panel
        
return myHtml;
}



const print = (champions) =>{
    for (let i=0; i < champions.length; i++) {
        printChampion.innerHTML += drawCard(champions[i]);
    } 
}

print(champions);


const accordionContainer = document.querySelectorAll(".accordion-container");

accordionContainer.forEach((e) => {
    // console.log(e)
e.addEventListener("click", (event) =>{
// console.log(event.target.closest(".accordion-container").querySelector(".panel"))
event.target.closest(".accordion-container").querySelector(".panel").classList.toggle("hide");  
});
});

const iconBtns = document.getElementById("icon-btns");

iconBtns.addEventListener("click", (event) => {

    if (event.target.matches("#assassin-btn")){
        printChampion.innerHTML = "";
        filterClass(champions,"Assassin").forEach(e => {        
            printChampion.innerHTML += drawCard(e);
        })
        
            
    }
    else if (event.target.matches("#tank-btn")){
        printChampion.innerHTML = "";
        filterClass(champions,"Tank").forEach(e => {        
            printChampion.innerHTML += drawCard(e);
            
        })
    }
    else if (event.target.matches("#support-btn")){
        printChampion.innerHTML = "";
        filterClass(champions,"Support").forEach(e => {        
            printChampion.innerHTML += drawCard(e);
            
        })
            
    }
    else if (event.target.matches("#mage-btn")){
        printChampion.innerHTML = "";
        filterClass(champions,"Mage").forEach(e => {        
            printChampion.innerHTML += drawCard(e);
            
        })
            
    }
    else if (event.target.matches("#fighter-btn")){
        printChampion.innerHTML = "";
        filterClass(champions,"Fighter").forEach(e => {        
            printChampion.innerHTML += drawCard(e);
            
        })        
    }
    else if (event.target.matches("#marksman-btn")){
        printChampion.innerHTML = "";
        filterClass(champions, "Marksman").forEach(e => {
            printChampion.innerHTML += drawCard(e);
        })
    }
    else if (event.target.matches(".all-button")){
        printChampion.innerHTML = "";
        print(champions);
    }
});

let difficultyContainer = document.querySelector(".options-container"); 
let difficultyBtn = document.getElementById("dropdown");
difficultyBtn.addEventListener("click", ()=>{
    difficultyContainer.classList.toggle("hide");
});

let champDifficulty;
let easyDiff = document.getElementById("d1");
let mediumDiff = document.getElementById("d2");
let hardDiff = document.getElementById("d3");
let filterChampsByDifficulty = [];

easyDiff.addEventListener("click", ()=>{
    champDifficulty = 1;
    printChampion.innerHTML = "";
    filterChampsByDifficulty = filterDifficulty(champions, champDifficulty)
    filterChampsByDifficulty.forEach((e) =>{
        printChampion.innerHTML += drawCard(e);  
    })
});

mediumDiff.addEventListener("click", ()=>{
    champDifficulty = 2;
    printChampion.innerHTML = "";
    filterChampsByDifficulty = filterDifficulty(champions, champDifficulty)
    filterChampsByDifficulty.forEach((e) =>{
        printChampion.innerHTML += drawCard(e);
    })
    
});
hardDiff.addEventListener("click", ()=>{
    champDifficulty = 3;
    printChampion.innerHTML = "";
    filterChampsByDifficulty = filterDifficulty(champions, champDifficulty)
    filterChampsByDifficulty.forEach((e) =>{
        printChampion.innerHTML += drawCard(e);
        
    })
    
});

let championsBySearch = [];
let searchBar = document.getElementById("search");

searchBar.addEventListener("input", (event)=>{
    let inputValue = event.target.value;
    inputValue = inputValue.toLowerCase();
    printChampion.innerHTML = "";
    championsBySearch = searchFilter(champions, inputValue);
    championsBySearch.forEach((e) =>{
        printChampion.innerHTML += drawCard(e);
        
    })
});

// let toggleMenu = document.querySelector(".toggle-menu");
// let iconsImgs = document.querySelector(".icons-imgs");
// toggleMenu.addEventListener("click", ()=>{
//     navLinks.classList.toggle("active")
// })

// let classesBtn = document.querySelector(".all-classes-btn");

// console.log(iconsImgs)
// classesBtn.addEventListener("click", ()=>{
//     iconsImgs.classList.toggle("active")
// })