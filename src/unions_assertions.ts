function someFn(myArg: number | string | boolean) {
  // typeguard for string
  if (typeof myArg === "string") {
    let x = myArg.toUpperCase();
  } else if (typeof myArg === "number") {
    myArg.toFixed(2);
  } else {
    return myArg;
  }
}

interface Dog {
  bark(): void;
  walk(): void;
}

interface Cat {
  miaow(): void;
  walk(): void;
}
// custom dog typegaurd - with assertion
function isDog(someObj: Dog | Cat): someObj is Dog {
  return (<Dog>pet).bark !== undefined;
}

function callMyPet(pet: Dog | Cat) {
  // should respond with appropriate animal sound
  // shared methods are instantly available
  pet.walk();

  // but specific methods are not
  // writing the call with this syntax is called an assertion
  // like we're saying: 'Assuming this is a Dog...'
  if ((<Dog>pet).bark) {
    (<Dog>pet).bark();
  } else {
    (<Cat>pet).miaow();
  }
  // but assertions are ugly! So we can create a custom typegaurd (see above)
  if (isDog(pet)) {
    pet.bark();
  } else {
    pet.miaow();
  }
}

class Foo {
  foo: number;
  commonProp: string;
}

class Bar {
  bar: number;
  commonProp: string;
}

function fooBarFunction(obj: Foo | Bar) {
  // for classes distinguishing the type is easier, cos we can use instanceOf
  if (obj instanceof Foo) {
    obj.foo;
  } else {
    obj.bar;
  }
}
