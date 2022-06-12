const obfuscate = function(password) {
  let output = "";
  for (let x in password) {
    if (password[x] === "a") {
      output += "4";
    } else if (password[x] === "e") {
      output += "3";
    } else if (password[x] === "o") {
      output += "0";
    } else if (password[x] === "l") {
      output += "1";
    } else {
      output += password[x];
    }
  }
  return output;
}


let password = process.argv[2];
console.log(obfuscate(password));

/*
Every "a" in the string should be replaced with a "4".
Every "e" in the string should be replaced with a "3".
Every "o" (oh) in the string should be replaced with a "0" (zero).
Every "l" (el) in the string should be replaced with a "1" (one).
*/