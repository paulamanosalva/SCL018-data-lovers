// estas funciones son de ejemplo

// export const filterChamps = (champions, clase) => {
//   return champions.filter(champions.tags.includes(clase));
// // };

export const filterClass = (champions, champClass) => {
  let filterArray = []
  for (let i = 0; i<champions.length; i++){
    if(champions[i].tags.includes(champClass)){
      filterArray.push(champions[i]);
    }
  }
  return filterArray;
};

//filtrar(filter) unicamente medium-difficulty
export const filterDifficulty = (champions) => {

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

// export const anotherExample = () => {
//   return 'OMG';
// };