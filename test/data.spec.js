import { filterClass, filterDifficulty, searchFilter } from '../src/data.js';


describe('filterClass', () => {
  it('is a function', () => {
    expect(typeof filterClass).toBe('function');
  })

  it('should returns the result champClass', () => {

    const champions = [
    {tags: ["Fighter", "Tank"]},
    {tags: ["Mage", "Assassin"]},
    {tags: ["Tank", "Support"]}
  ];

  const result = [{tags: ["Mage", "Assassin"]}];

    expect(filterClass(champions, "Assassin")).toEqual(result);
  });
});


describe('filterDifficulty', () => {
  it('is a function', () => {
    expect(typeof filterDifficulty).toBe('function');
  })

  it('should returns the result champDifficulty', () => {

    const champDifficulty1 = 1
    const champDifficulty2 = 2
    const champDifficulty3 = 3

    const champions = [
      {info: {
        attack: 6,
        defense: 9,
        magic: 5,
        difficulty: 9
      }},
      {info: {
        attack: 2,
        defense: 6,
        magic: 8,
        difficulty: 3
      }},
      {info: {
        attack: 2,
        defense: 3,
        magic: 10,
        difficulty: 6
      }}
  ];

  const result1 = [{info: {
    attack: 2,
    defense: 6,
    magic: 8,
    difficulty: 3
  }}];

  const result2 = [{info: {
    attack: 2,
    defense: 3,
    magic: 10,
    difficulty: 6
  }}];

  const result3 = [{info: {
    attack: 6,
    defense: 9,
    magic: 5,
    difficulty: 9
  }}];

    
    //hacer varios expects para diferentes resultados.
    expect(filterDifficulty(champions, champDifficulty1)).toEqual(result1);
    
    expect(filterDifficulty(champions, champDifficulty2)).toEqual(result2);

    expect(filterDifficulty(champions, champDifficulty3)).toEqual(result3);
  });
});

describe('searchFilter', () => {
  it('is a function', () => {
    expect(typeof searchFilter).toBe('function');
  })

  it('should returns the result champion inputValue', () => {

    const inputValue = "evelynn"
    const champions = [
    {name: "Ahri"},
    {name: "Evelynn"},
    {name: "Aatrox"}
  ];

  const result = [{name: "Evelynn"}];

    expect(searchFilter(champions, inputValue)).toEqual(result);
  });
});
