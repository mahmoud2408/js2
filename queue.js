let queue = [];
queue.push("Mark");
queue.push("Patrick");
queue.push("Eric");
queue.push("Rafael");
let firstOut = queue.shift();
function isEmpty(queue) {
  return queue.length === 0;
}
console.log(isEmpty(queue));
