const _items = new WeakMap();

class Stack {
  constructor() {
    //_items.set(key->this object, value->emptyArray [])
    _items.set(this, []);
  }

  //we access the array [] here
  push(obj) {
    _items.get(this).push(obj);
  }

  pop() {
    const items = _items.get(this);

    if (items.length === 0) {
      throw new Error("Stack is empty");
    }

    //remove the object at the end of array
    return items.pop();
  }

  peek() {
    const items = _items.get(this);

    if (items.length === 0) {
      throw new Error("Stack is empty");
    }

    return items[items.length - 1];
  }

  get count() {
    return _items.get(this).length;
  }
}

