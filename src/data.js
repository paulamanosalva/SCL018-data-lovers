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
export const filterDifficulty = (champions, champDifficulty) => {
  const tempArray = [];

  champions.forEach((e)=>{
    if(champDifficulty === 1){
      if(e.info.difficulty < 5){
        tempArray.push(e);
      }
    }
    else if(champDifficulty === 2){
      if(e.info.difficulty > 4 && e.info.difficulty < 8 ){
        tempArray.push(e);
      }
    }
    else if(champDifficulty === 3){
      if(e.info.difficulty > 7){
        tempArray.push(e);
      }
    }
  });
  // console.log(tempArray);
  return tempArray
};




  //   for (let i = 0; i < champions.length; i++){
  //   let filterArray = [];
  //   let dataDifficulty = champions[i].info.difficulty;
  //   // console.log(dataDifficulty);
  //   // console.log(typeof dataDifficulty);
    
  //   if(champDifficulty === 1){
  //     // champions.filter(dataDifficulty => dataDifficulty < 5)
  //     console.log(dataDifficulty => dataDifficulty < 5)
  //   } 

  //   else if(champDifficulty === 2){
  //     if(dataDifficulty >5 && dataDifficulty <8){
  //       filterArray.push(champions[i]);
  //       console.log(filterArray);
  //     } 
  //   } 

  //   else if(champDifficulty == 3){
  //     if(dataDifficulty >7  && dataDifficulty <11){
  //       filterArray.push(champions[i]);
  //     }
  //   } 
  // }

