type Object1 = {
  name: '';
}

interface Object2 {
  age: number;
  name: 'user'
}

type NewType = Object1 & Object2

const demo: NewType = {
  age: 1,
}

function test(parms: NewType) {

}