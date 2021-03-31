// ************ Interfaces ************ //
// properties of interface are mandatory by default
interface Profile {
  readonly name: string; // once name value declared, cannot be reassigned
  age?: number; // age is now optional
  isMember: boolean;
}

let profile: Profile = {
  name: "Jerry",
  age: 32,
  isMember: true,
};

// ************ Index Signatures ************ //
// common to see this in JS
let a: any = {};
a.x = 1;
a.y = 2;

// BAD PRACTICE for TS, should use index signatures
interface A {
  someProp: number;
  anotherProp: string;
  [key: string]: number | string;
}

// then assign the values
let b: A = {
  someProp: 1,
  anotherProp: "2",
};

b.x = 3;

// ************ Call Signatures ************ //
// a function definition
interface Sum {
  (a: number, b: number): number;
}

const sum: Sum = (a, b) => a + b;

// ************ Extending Interfaces ************ //
interface Mum {
  eyes: string;
}
interface Dad {
  hair: string;
}

// comma separate to extend multiple
interface Child extends Mum, Dad {
  alive: string;
}

let child: Child = {
  alive: "required because we declared it in the interface",
  eyes: "required because we extended from the Mum",
  hair: "required because we extended from the Dad",
};
