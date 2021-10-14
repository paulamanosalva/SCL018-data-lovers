import { filterClass } from './data.js';

import data from "./data/lol/lol.js";
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

const champions = Object.values(data.data);

const filterDifficulty = (champions) => {

    for (let i = 0; i < champions.length; i++){
    let champDifficulty = champions[i].info.difficulty;

    let easyArray = []
    if(champDifficulty > 0 && champDifficulty < 5){
        easyArray.push(champions[i]);
    } 

    let mediumArray = []
    if(champDifficulty > 4 && champDifficulty < 8){
        mediumArray.push(champions[i]);
    } 

    let hardArray = []
    if(champDifficulty > 7 && champDifficulty < 11){
        hardArray.push(champions[i]);
        console.log(hardArray);
    } 
    }
}; 
filterDifficulty(champions);

const printChampion = document.getElementById("champion-button");
// const printClass = document.getElementById("filtered-champion-classes");

    
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


// console.log(champions);

// console.log(filterChamps(champions, clase));

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

const print = (champions) =>{
    for (let i=0; i < champions.length; i++) {
        printChampion.innerHTML += drawCard(champions[i]);
    } 
}

document.addEventListener("click", (event) => {
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
        print(champions, "All").forEach(e => {
            printChampion.innerHTML += drawCard(e);
        })
    }
    // else if(event.target.matches("#dropdown")){
    //     document.getElementsByClassName("dropdown-content").classList.remove("hide");
    // }
})

 // console.log(print());
        // const print  = (champions) => {
        //     printChampion.innerHTML = "";
        //     for (let i=0; i < champions.length; i++) {
        //         printChampion.innerHTML += drawCard(champions[i]);
        //     }
        // }
        // console.log(print());

// printChampion.classList.add("hide");


// directorOption.addEventListener("change", (event) => {
//     console.log(event.target.value);
//     const chosenDirector = filterData(data, event.target.value);   
//     printCard.classList.add("hide");