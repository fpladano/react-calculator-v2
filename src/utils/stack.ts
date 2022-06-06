export class Stack {
  stack: string[];

  constructor() {
    this.stack = [];
  }

  push(item: string) {
    if (this.stack.length === 4) this.shift();
    return this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  shift() {
    return this.stack.shift();
  }

  peek() {
    return this.stack[this.length - 1];
  }

  clear() {
    return (this.stack = []);
  }

  magic() {
    let sum: number = 0;
    this.stack.forEach((element) => {
      sum = sum + Number(element);
    });
    return sum;
  }

  get length() {
    return this.stack.length;
  }
}
