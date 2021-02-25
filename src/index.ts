import multiply, { multiplyByTwo } from "./multiply";

const a = 10;
const b = 3;

console.log(`Multiply function: ${a} x ${b} = ${multiply(a, b)}`);
console.log(`Multiply by 2: ${a} x 2 = ${multiplyByTwo(6)}`);

// ************ NON PRIMITIVE TYPE EXAMPLES ************ //

// ************ Arrays: the same! ************ //
let array1: string[] = ["hi", "bye"];
// generic<genericParameter>
let array2: Array<string> = ["hi", "bye"];

// ************ Tuple: array with fixed number of elements where types are known ************ //
let tuple: [string, number, boolean] = ["hi", 54, false];

// ************ Enum: more friendly names to a set to values, normally used for choices ************ //
// zero number sequence assigned to these
// if you manually assign uses those (Red = 2)
// can assign other values (Red = 'red') but then can't reverse look up
enum Colour {
  Red,
  Green,
  Blue,
}

let myFavColour: Colour = Colour.Blue;
console.log(myFavColour); // returns 2
// can look up reversely
console.log(Colour[0]); // returns Red

// ************ Any: describe a variable we don't know ************ //
let ANY: any;
ANY = "string";
ANY = 14;
ANY = true;

// ************ Type Assertions: further customise types than what TS can do automatically ************ //
const email = document.getElementById("email");

// type gaurding for null
if (email) {
  email.addEventListener("change", (e) => {
    const input = e.currentTarget as HTMLInputElement; // (as blah is the type assertion)
    // can also write as <HTMLInputElement> but not in tsx cos <> mean something in react already
    console.log(input.value); // without the TA we would be unable to get the value without an error
  });
}
