class Sorter {
  constructor() {
    // your implementation
    this.sorter = [];
    this.comparator = (a, b) => a - b;
  }

  add(element) {
    // your implementation
    this.sorter.push(element);
  }

  at(index) {
    // your implementation+
    return this.sorter[index];
  }

  get length() {
    // your implementation
    return this.sorter.length;
  }

  toArray() {
    // your implementation
    return this.sorter;
  }

  sort(indices) {
    // your implementation
    let filterArr = this.sorter.filter((item, index) => {
      return indices.includes(index);
    });

    filterArr.sort(this.comparator).reverse();

    this.sorter = this.sorter.map((item, index) => {
      return indices.includes(index) ? filterArr.pop() : item;
    });

    return this.sorter;
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;