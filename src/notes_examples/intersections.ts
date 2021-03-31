// combining types

interface IA {
  a: number;
}

interface IB {
  b: number;
}

interface IC {
  c: number;
}

function X(obj: IA & IB & IC) {
  // the & operator allows us to access all properties on the types
  return obj.a + obj.b * obj.c;
}

// need to use generics to describe here, as these objects could have any variation of props
// function combine<ObjA, ObjB>(objA: ObjA, objB: ObjB): ObjA & ObjB {
//   return { ...objA, ...objB };
// }

// the above version could still be used for combine anything e.g. combine(2, '')
// we only want it to combine objects so we use a constraint!
function combine<ObjA extends object, ObjB extends object>(
  objA: ObjA,
  objB: ObjB
): ObjA & ObjB {
  return { ...objA, ...objB };
}

const objA = { a: 1 };
const objB = { b: 2 };
const resultObj = combine(objA, objB);
// without the generics above this returns any - we always want to avoid this!
// The generics allow TS to figure out what the returned value would be
