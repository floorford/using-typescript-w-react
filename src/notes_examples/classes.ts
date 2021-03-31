// A TS class - everything works as in JS, just have to remember to type things!
// a class in TS has 2 sides: static and instance
// aka static methods cannot be called by the instance, only inside the declaration
// The static side includes the static members of the class and the constructor
class Robot {
  public colour: string;

  // static things are publicly available unless stated otherwise
  static availableColours = ["pink", "white"];
  static isColourAvailable(colour: string): boolean {
    return Robot.availableColours.includes(colour);
  }

  constructor(public name: string) {
    // this actually gets set automatically by TS, but nice to write out for us
    this.name = name;
  }

  set newName(value: string) {
    this.name = value;
  }

  set newColour(colour: string) {
    // remember static properties have to accepted via the class, not using this.
    if (!Robot.isColourAvailable) {
      throw new Error("Colour is not available");
    }

    this.colour = colour;
  }

  get robotName() {
    return this.name;
  }

  askName() {
    console.log(`My name is ${this.name}`);
  }

  move(distance: number) {
    console.log(`${this.name} moved ${distance} meters`);
  }
}

const robot = new Robot("BeepBoop");
robot.askName(); // My name is BeepBoop

class FlyingRobot extends Robot {
  jetpackSize: number;

  constructor(name: string, jetpackSize: number) {
    super(name);

    this.jetpackSize = jetpackSize;
  }

  move(distance: number) {
    console.log(`${this.name} is flying`);
    super.move(distance);
  }
}

const flyingRobot = new FlyingRobot("Neil", 15);
flyingRobot.move(10); // Neil is flying; Neil moved 10 metres

// MODIFIERS: public, private, protected, redaonly
// if nothing specified public is default
// private: only accessible within the class where you're doing your declaration
// private can also be declared with the # symbol
// protected: only accessible from the defined class or subclass, consumer can't access from outside
// readonly: can't be modified
