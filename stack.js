let stack = [];

stack.push("Khaled");
stack.push("Tahl");
stack.push("Leonardo");
let name = stack.pop();
function peek(stack) {
  let positionLastElement = stack.length - 1;
  return stack[positionLastElement];
}
console.log(peek(stack));
function isEmpty(stack) {
  return stack.length === 0;
}
console.log(isEmpty(stack));
