function processData(input) {
  const lines = input.split("\n");
  const totalEntries = parseInt(lines[0]);
  const phoneBook = new Map();

  for (let i = 1; i <= totalEntries; i++) {
    const [name, number] = lines[i].split(" ");
    phoneBook.set(name, number);
  }

  for (let i = totalEntries + 1; i < lines.length; i++) {
    const nameQuery = lines[i];

    if (phoneBook.has(nameQuery)) {
      console.log(`${nameQuery}=${phoneBook.get(nameQuery)}`);
    } else {
      console.log("Not found");
    }
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
