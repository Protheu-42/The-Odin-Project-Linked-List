function listFactory() {
  const root = nodeFactory("root");
  const list = {
    root,
  };
  let listSize = 0;

  // Print Methods
  const printList = () => console.log(JSON.stringify(list.root));
  const size = () => console.log(listSize);
  const head = () => console.log(root.next.value);
  const tail = (node = list.root) => {
    if (node.next === null) {
      return console.log(node.value);
    } else {
      return tail(node.next);
    }
  };
  const at = (index) => {
    let pointer = list.root;
    for (let i = 0; i < index; i++) {
      pointer = pointer.next;
    }
    console.log(pointer);
  };
  const contains = (input) => {
    let node = list.root;
    let searchResult = false;
    while (node != null) {
      if (node.value === input) {
        console.log(`${input} is on the list`);
        return true;
      }
      node = node.next;
    }
    console.log(`${input} is not in the list`);
    return searchResult;
  };
  const find = (input) => {
    let node = list.root;
    let index = 0;
    while (node != null) {
      if (node.value === input) {
        console.log(`${input} is on the ${index} position`);
        return index;
      }
      index++;
      node = node.next;
    }
    console.log(`${input} is not in the list`);
    return null;
  };
  const toString = () => {
    let node = list.root.next;
    let outputString = "";
    while (node != null) {
      outputString = outputString.concat(`( ${node.value} )`, " -> ");
      node = node.next;
    }
    outputString = outputString.concat("null");
    console.log(outputString);
    return outputString;
  };

  // Manipulation Methods

  const append = (value, node = list.root) => {
    if (node.next === null) {
      node.next = nodeFactory(value);
      listSize++;
    } else {
      return append(value, node.next);
    }
  };

  const prepend = (value) => {
    const node = nodeFactory(value);
    node.next = list.root.next;
    root.next = node;
    listSize++;
  };

  const pop = () => {
    let node = list.root;
    if (node.next === null) {
      return;
    }
    while (node.next.next != null) {
      node = node.next;
    }
    listSize--;
    return (node.next = null);
  };

  const insertAt = (value, index) => {
    let node = list.root;
    let pointer = 0;
    let tempNode = nodeFactory(value);
    while (pointer < index - 1) {
      node = node.next;
      pointer++;
    }
    tempNode.next = node.next;
    node.next = tempNode;
    return;
  };
  const removeAt = (index) => {
    let node = list.root;
    let pointer = 0;
    while (pointer < index - 1) {
      node = node.next;
      pointer++;
    }
    let nextNode = node.next.next;
    node.next = null;
    node.next = nextNode;
    return;
  };
  return {
    printList,
    size,
    head,
    tail,
    at,
    contains,
    find,
    toString,
    append,
    prepend,
    pop,
    insertAt,
    removeAt,
  };
}

function nodeFactory(input) {
  return {
    value: input,
    next: null,
  };
}

const list = new listFactory();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
//( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
