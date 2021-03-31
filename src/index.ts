export function log(str: string) {
  console.log(str);
}

log("Hello World!");

class A {
  greeting = "helolow word";
}

log(new A().greeting);
