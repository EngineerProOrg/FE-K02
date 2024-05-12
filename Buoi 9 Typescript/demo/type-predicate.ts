type Fish = { swim: () => void };
type Bird = { fly: () => void };

declare function getSmallPet(): Fish | Bird;

function isFish(pet: Fish | Bird): pet is Fish {
  if ('swim' in pet) {
    return true
  }
  return false
}

let pet = getSmallPet();
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}


