export class RandomizedSet {
  list: number[];
  values: Map<number, number>;
  constructor() {
    this.values = new Map();
    this.list = [];
  }

  insert(val: number): boolean {
    if (this.values.has(val)) {
      return false;
    }
    this.list.push(val);
    this.values.set(val, this.list.length - 1);
    return true;
  }

  remove(val: number): boolean {
    if (!this.values.has(val)) {
      return false;
    }

    const index = this.values.get(val)!;
    this.list[index] = this.list[this.list.length - 1];
    this.values.set(this.list[index], index);
    this.list.pop();
    this.values.delete(val);
    return true;
  }

  getRandom(): number {
    const randomizedidx = Math.floor(Math.random() * this.list.length);
    return this.list[randomizedidx];
  }
}

/**
 * 문제점
 * - 불필요한 변수 사용
 * - has를 이용해도 중복 검사가 아니라는 점 생각하지 못함
 * - index를 저장하므로 undfined로 조건문 체크
 */

// insert
// const result = this.values.get(val);
// if (!result) {
//   this.list.push(val);
//   this.values.set(val, this.list.length - 1);
//   return true;
// }
// return false;

// remove
// const index = this.values.get(val);
// if (index !== undefined) {
//   const lastVal = this.list[this.list.length - 1];
//   this.list[index] = lastVal;
//   this.values.set(lastVal, index);

//   this.values.delete(val);
//   this.list.pop();
//   return true;
// }
// return false;
