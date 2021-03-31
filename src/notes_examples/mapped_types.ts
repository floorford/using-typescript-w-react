type Properties = "propA" | "propB";

// TS expects a property to be only a string, number or symbol, but <> can be ANYTHING
// so need a type contstraint
type MyMappedType<Properties extends string | number | symbol> = {
  [P in Properties]: boolean; // can also use property name on right side with P
};

type MyMappedType2<T> = {
  [P in keyof T]: T[P];
  // can use ?, readonly on the left hand side, or use null as the value
};

type MyNewType = MyMappedType<"propA" | "propB">;
type MyNewType2 = MyMappedType2<{ a: "A"; b: "B" }>;

// made a custom picker
type Pick1<T, Properties extends keyof T> = {
  [P in Properties]: T[P];
};

type MyNewType3 = Pick1<{ a: "a"; b: "b" }, "a">;
