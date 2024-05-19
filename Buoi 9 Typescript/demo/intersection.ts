type Object1 = {
  name: '';
}

interface Object2 {
  age: number;
  name: 'user'
}


type NewType = Object1 & Object2

const test: Object2 = { age: 1, name: 'user' };
typeof test === 'object' 
