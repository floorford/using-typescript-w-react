// selects one of two possible types given a conditionS
// type SomeType = T extends U ? X : Y;

type SomeType = string;
type MyConditionalType = SomeType extends string ? string : null;
// ts evaluates it as a string

function someFunction<T>(value: T) {
  // you can also nest conditional types
  type A = T extends boolean ? 'Type A' : T extends string ? 'Type B' : T extends number ? 'Type C';
  const someOtherFunction = (
    someArg: T extends boolean ? "Type A" : "Type B"
  ) => {
    const a: "Type A" | "Type B" = someArg;
  };
  return someOtherFunction;
  // here it doesn't evaluate the type, it DEFERS it because of the generic, we are awaiting the type
  // based on whatever is passed in
}

const resultTypeA = someFunction(true);
const resultTypeB = someFunction("banana");

type StringOrNot<T> = T extends string ? string : never;
// never can be used to filter union type, represents something which never exists
// this is actually what Exclude<T> does!
