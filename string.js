function consomn(value) {
  value = prompt("enter your text");
  for (var i = 0; i < value.length; i++) {
    switch (value[i]) {
      case ("a", "e", "o", "u", "i", "y", "A", "E", "O", "I", "U", "Y"):
        value = value.slice(0, i) + value.slice(i + 1, value.length);
        break;
    }
  }
  return;
}
console.log(value);
