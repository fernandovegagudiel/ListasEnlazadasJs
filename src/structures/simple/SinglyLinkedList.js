const SimpleNode = require("./SimpleNode");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  addFirst(value) {
    const newNode = new SimpleNode(value);
    newNode.next = this.head;
    this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    }
    this._size++;
  }

  addLast(value) {
    const newNode = new SimpleNode(value);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this._size++;
  }

  removeFirst() {
    if (this.head === null) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this._size--;
    return value;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (this._isSameValue(current.value, value)) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

countOccurrences(value) {
    let count = 0;
    let current = this.head;
    while (current !== null) {
        if (this._isSameValue(current.value, value)) {
            count++;
        }
        current = current.next;
    }
    return count;
}

 clean() {
    let removedCount = this._size;
    while (!this.isEmpty()) {
        this.removeFirst();
    }
    return removedCount;
}

 reverseInPlace() {
  if (this.head === null || this.head.next === null) { // this y quité getNext
      return;
    }

    let previous = null;    // let
    let current = this.head; // let y this
    this.tail = this.head;   // this

    while (current !== null) {
      let next = current.next;    // let y quité getNext
      current.next = previous;    // quité setNext
      previous = current;         
      current = next;             
    }

    this.head = previous; // this
}


  removeDuplicates() {
    let removed = 0;              
    let current = this.head;      

    while (current !== null) {
      let runnerPrevious = current; 
      let runner = current.next;    

      while (runner !== null) {
        // comparar valores con el nodo actual usando helper interno
        if (this._isSameValue(current.value, runner.value)) {
          runnerPrevious.next = runner.next; 
          
          if (runner === this.tail) {        
            this.tail = runnerPrevious;      // actualizar referencia al último nodo
          }
          
          this._size--;                      
          removed++;
          runner = runnerPrevious.next;      
        } else {
          runnerPrevious = runner;
          runner = runner.next;              
        }
      }

      current = current.next;                
    }

    return removed;                          // devolver número de duplicados eliminados
}


  size() {
    return this._size;
  }

  isEmpty() {
    return this._size === 0;
  }

  toString() {
    let out = "[";
    let current = this.head;
    while (current !== null) {
      out += String(current.value);
      if (current.next !== null) {
        out += ", ";
      }
      current = current.next;
    }
    out += "]";
    return out;
  }

  _isSameValue(left, right) {
    return left === right;
  }
}

module.exports = SinglyLinkedList;
