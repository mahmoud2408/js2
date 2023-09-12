let person = {
  name: "John",
  age: 21,
  email: "john@gmail.com",
};
function over(array) {
  let over = [];
  for (let i = 0; i < array.length; i++) {
    if (person.age > 30) {
      over = over.push(person);
    }
  }
}
