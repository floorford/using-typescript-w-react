// static and instance sides of the class must be described with 2 seperate interfaces
// for static: constructor only
// for instance: public only

interface Animal {
  name: string;
  group: string;
  setGroup(group: string): void;
}

class Cat implements Animal {
  name: string;
  group: string;

  constructor(name: string) {
    this.name = name;
  }

  setGroup(group: string) {
    this.group = group;
  }
}

class Dog implements Animal {
  name: string;
  group: string;

  constructor(name: string) {
    this.name = name;
  }

  setGroup(group: string) {
    this.group = group;
  }
}

// <T> is a generic
interface AnimalConstructor<T> {
  new (name: string): T;
}

// Because the generic <T> could be ANYTHING we need to set a generic type constraint
function initaliseAnimal<T extends Animal>(
  Animal: AnimalConstructor<T>,
  name: string
) {
  const animal = new Animal(name);
  animal.setGroup("mammals");
  return animal;
}

// without passing in a generic above, TS would assume that cat and dog just use the Animal interface
// not a specific class which implements that interface
const cat = initaliseAnimal(Cat, "Smudge");
const dog = initaliseAnimal(Dog, "Rory");
