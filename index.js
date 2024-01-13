// code your solution here
// Define a Function Using Function Declaration
function razzle() {
    console.log("You've been razzled!");
  }
  razzle();
  
  // Define Hoisting
  function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
  }
  
  // Define Function Expression
  const distanceFromHqInFeet = function (pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;
  };
  
  // Define Anonymous Function
  const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Define an IIFE: Immediately-Invoked Function Expression
  const wrapAdjective = function (visualFlair = "*") {
    return function (adjective = "special") {
      return `You are ${visualFlair}${adjective}${visualFlair}!`;
    };
  };
  
  // Define Function-Level Scope
  function outer(greeting, msg = "It's a fine day to learn") {
    return function (name, lang = "Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`;
    };
  }
  outer("Hello")("student", "JavaScript");
  
  // Define Closure
  const array = (function (thingToAdd) {
    const base = 3;
    return [
      function () {
        return base + thingToAdd;
      },
      function () {
        return base;
      },
    ];
  })(2);
  
  // Define Scope Chain
  function demoChain(name) {
    const part1 = "hi";
    return function () {
      const part2 = "there";
      return function () {
        console.log(`${part1.toUpperCase()} ${part2} ${name}`);
      };
    };
  }
  demoChain("Dr. Stephen Strange")()();
  
  // LAB: Implement Functions
  function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Run learn-lab test to verify you've gotten this set of tests passing before continuing with the lesson.
  