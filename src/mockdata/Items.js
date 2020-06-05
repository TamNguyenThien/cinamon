import uuidv4 from 'uuid/v4'

const Items = [
  {
    id: uuidv4(),
    name: 'Mike',
    point: 1.230,
    level: 3,
    star: 3 // high
  },
  {
    id: uuidv4(),
    name: 'Alex',
    point: 45,
    level: 2,
    star: 2 // low
  },
  {
    id: uuidv4(),
    name: 'Christopher',
    point: 0,
    level: 1,
    star: 1 // medium
  },
  {
    id: uuidv4(),
    name: 'John',
    point: 10,
    level: 0,
    star: 0 // high
  },
  {
    id: uuidv4(),
    name: 'Aden',
    point: 1.230,
    level: 3,
    star: 3 // medium
  }
]

export default Items
