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

export const searchFilter = (champions, inputValue) =>{
  let tempArray=[];
  champions.forEach(e => {
    if(e.name.toLowerCase().includes(inputValue)){
      tempArray.push(e);
    }
  }); 
  // console.log(tempArray);
  return tempArray;
};

