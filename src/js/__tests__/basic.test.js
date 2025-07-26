import sortHealth from '../basic';

// [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
test('position 1', () => {
  let listObjects = [
    {name: 'swordsman', health: 10},
    {name: 'archer', health: 80},
    {name: 'mag', health: 100},
  ]
  const resList = sortHealth(listObjects);

  expect(resList).toEqual(
  [
    {name: 'mag', health: 100},
    {name: 'archer', health: 80},
    {name: 'swordsman', health: 10},
  ]
  )
});

test('position 2', () => {
  let listObjects = [
    {name: 'swordsman', health: 10},
    {name: 'mag', health: 100},
    {name: 'archer', health: 80},
  ]
  const resList = sortHealth(listObjects);

  expect(resList).toEqual(
  [
    {name: 'mag', health: 100},
    {name: 'archer', health: 80},
    {name: 'swordsman', health: 10},
  ]
  )
});

test('position 3', () => {
  let listObjects = [
    {name: 'archer', health: 80},
    {name: 'swordsman', health: 10},
    {name: 'mag', health: 100},
  ]
  const resList = sortHealth(listObjects);

  expect(resList).toEqual(
  [
    {name: 'mag', health: 100},
    {name: 'archer', health: 80},
    {name: 'swordsman', health: 10},
  ]
  )
});

test('position 4', () => {
  let listObjects = [
    {name: 'archer', health: 80},
    {name: 'mag', health: 100},
    {name: 'swordsman', health: 10},
  ]
  const resList = sortHealth(listObjects);

  expect(resList).toEqual(
  [
    {name: 'mag', health: 100},
    {name: 'archer', health: 80},
    {name: 'swordsman', health: 10},
  ]
  )
});

test('position 5', () => {
  let listObjects = [
    {name: 'mag', health: 100},
    {name: 'swordsman', health: 10},
    {name: 'archer', health: 80},
  ]
  const resList = sortHealth(listObjects);

  expect(resList).toEqual(
  [
    {name: 'mag', health: 100},
    {name: 'archer', health: 80},
    {name: 'swordsman', health: 10},
  ]
  )
});

test('position 6', () => {
  let listObjects = [
    {name: 'mag', health: 100},
    {name: 'archer', health: 80},
    {name: 'swordsman', health: 10},
  ]
  const resList = sortHealth(listObjects);

  expect(resList).toEqual(
  [
    {name: 'mag', health: 100},
    {name: 'archer', health: 80},
    {name: 'swordsman', health: 10},
  ]
  )
});
