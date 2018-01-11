var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  //return name's position in line
  //"Welcome, Ada. You are number 1 in line."
  katzDeliLine.push(name);
  var nameIdx = katzDeliLine.indexOf(name);
  console.log(`Welcome, ${name}. You are number ${nameIdx + 1} in line.`)

}

function nowServing() {
  //return first person in line then remove that person from line
  //if line empty, return "There is nobody waiting to be served!"
  var currentCustomer = katzDeliLine[0];
  console.log(`Currently serving ${currentCustomer}.`);
  katzDeliLine.shift();
}

function currentLine() {
  //returns currentLine with 'The line is currently: 1. Ada, 2. Grace'
  //If the line is empty, return "The line is currently empty"
}
