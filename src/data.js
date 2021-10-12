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

// export const filterDifficulty = (champions, champDifficulties => {
  
  // let easyArray = []
  // // let mediumArray = []
  // // let hardArray = []

  // for (let i = 0; i<champions.length; i++){
  //   let champDifficulty = champions[i].info.difficulty;

  //   if(champDifficulty > 0 && champDifficulty < 4){
  //     easyArray.push(champDifficulty);
  //   } 

    // else if(champions[i].info.difficulty > 3 && champions[i].info.difficulty < 8){
    //   mediumArray.push(champions[i]);

    // } 

    // else if(champions[i].info.difficulty > 7 && champions[i].info.difficulty < 11){
    //   hardArray.push(champions[i]);

    // } 
//   }
// }; 


// export const anotherExample = () => {
//   return 'OMG';
// };