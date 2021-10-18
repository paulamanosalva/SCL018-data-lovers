import { filterClass, filterDifficulty, searchFilter } from '../src/data.js';


describe('filterClass', () => {
  it('is a function', () => {
    expect(typeof filterClass).toBe('function');
  })

  it('should returns the result class "Assassin"', () => {

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

    const champDifficulty = 1
    const champions = [
      {info: {
        attack: 6,
        defense: 9,
        magic: 5,
        difficulty: 7
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

  const result = [{info: {
    attack: 2,
    defense: 6,
    magic: 8,
    difficulty: 3
  }}];

    expect(filterDifficulty(champions, champDifficulty)).toEqual(result);
  });
});

describe('searchFilter', () => {
  it('is a function', () => {
    expect(typeof searchFilter).toBe('function');
  })

  it('should returns the result champion "inputValue"', () => {

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
