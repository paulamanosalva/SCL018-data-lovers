// estas funciones son de ejemplo

// export const filterChamps = (champions, clase) => {
//   return champions.filter(champions.tags.includes(clase));
// };
export const filterChamps = (champions, champClass) => {

  //return champions.length;
  let filterArray = []
  for (let i = 0; i<champions.length; i++){
    if(champions[i].tags.includes(champClass)){
      filterArray.push(champions[i]);
    }
  }
  return filterArray;
};

// export const anotherExample = () => {
//   return 'OMG';
// };
