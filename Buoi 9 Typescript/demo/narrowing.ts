// example 1 using property check

type Doctor = {
  type: 'doctor';
  hospital: string;
}

type Engineer = {
  type: 'engineer';
  company: string;
}

type User = Doctor | Engineer;

const getPlaceOfWork = (user: User) => {
  if (user.type === 'doctor') {
    return user.hospital;
  }

  user.company
}


// example 2 using typeof

const getAge = (): number | undefined => {
  return 0;
}

const demo2 = () => {
  let age = getAge();

  age = age + 1;
}

// example 3 , using in operator

type TypeFish = { swim: () => void };
type TypeBird = { fly: () => void };

function move(animal: TypeFish | TypeBird) {
  if ("swim" in animal) {
    return animal.swim();
  }

  return animal.fly();
}

