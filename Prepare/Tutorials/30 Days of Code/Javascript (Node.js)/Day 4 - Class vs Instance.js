process.stdin.resume();
process.stdin.setEncoding("ascii");

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

process.stdin.on("data", function (data) {
  input_stdin += data;
});

process.stdin.on("end", function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function Person(initialAge) {
  // Add some more code to run some checks on initialAge
  if (initialAge > 0) {
    this.age = initialAge;
  } else {
    this.age = 0;
    console.log("Age is not valid, setting age to 0.");
  }

  this.amIOld = function () {
    // Do some computations in here and print out the correct statement to the console

    if (this.age < 13) {
      console.log("You are young.");
    } else if (this.age < 18) {
      console.log("You are a teenager.");
    } else {
      console.log("You are old.");
    }
  };

  this.yearPasses = function () {
    // Increment the age of the person in here
    this.age += 1;
  };
}

function main() {
  let T = parseInt(readLine());

  for (let i = 0; i < T; i++) {
    let age = parseInt(readLine());
    let p = new Person(age);

    p.amIOld();

    for (let j = 0; j < 3; j++) {
      p.yearPasses();
    }

    p.amIOld();
    console.log("");
  }
}
