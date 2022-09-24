class ListNode {
  val = 0;
  next = null;
}

function arrayToList(arr) {
  if (!arr.length) return null;

  const firstNode = new ListNode();
  let currentNode = firstNode;
  
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];

    currentNode.val = n;
    if (i !== arr.length - 1) {
      currentNode.next = new ListNode();
      currentNode = currentNode.next;
    }
  }

  return firstNode;
}

function nodeToString(node) {
  if (!node) return '';
  return `${node.val}` + nodeToString(node.next);
}

function reverseStr(str) {
  return str.split('').reverse().join('');
}

function stringToList(str) {
  if (!str) return null;

  const firstNode = new ListNode();
  let currentNode = firstNode;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    currentNode.val = +char;

    if (i !== str.length - 1) {
      currentNode.next = new ListNode();
      currentNode = currentNode.next;
    }
  }

  return firstNode;
}

function addTwoNumbersBigInt(l1, l2) {
  const l1n = BigInt(reverseStr(nodeToString(l1)));
  const l2n = BigInt(reverseStr(nodeToString(l2)));
  const sum = l1n + l2n;
  
  return stringToList(reverseStr(sum.toString()));
}

function addTwoNumbers(l1, l2) {
  const firstNode = new ListNode();
  let currNode = firstNode;
  let carry = 0;
  let i1 = l1;
  let i2 = l2;

  do {
    let i1Val = i1 ? i1.val : 0;
    let i2Val = i2 ? i2.val : 0;
    const sum = i1Val + i2Val + carry;
    const addNow = sum % 10;
    carry = Math.floor(sum / 10);

    currNode.val = addNow;
    
    if (i1) i1 = i1.next;
    if (i2) i2 = i2.next;

    if (!i1 && !i2 && carry === 0) break;
    else {
      currNode.next = new ListNode();
      currNode = currNode.next;
    }
  } while (true);

  return firstNode;
}

const l1 = arrayToList([9,9,9,9,9,9,9]);
const l2 = arrayToList([9,9,9,9]);

console.time('Manual');
for (let i = 0; i < 1000000; i++) {
  addTwoNumbers(l1, l2);
}
console.timeEnd('Manual');

console.time('BigInt');
for (let i = 0; i < 1000000; i++) {
  addTwoNumbersBigInt(l1, l2);
}
console.timeEnd('BigInt');
