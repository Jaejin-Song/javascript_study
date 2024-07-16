/**
 * 언제 사용하나요?
 *
 * 기존 객체와 유사한 객체가 필요하거나 복제에 비해 생성 비용이 많이 드는 경우에 사용합니다.
 */

class Sheep {
  protected name: string;

  protected category: string;

  constructor(name: string, category: string = "Mountain Sheep") {
    this.name = name;

    this.category = category;
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setCategory(category: string): void {
    this.category = category;
  }

  getCategory(): string {
    return this.category;
  }
}

/**
 * usage
 */
const original: Sheep = new Sheep("Jolly");

console.log(original.getName()); // Jolly
console.log(original.getCategory()); // Mountain Sheep

// 필요한 부분을 복제하고 수정하세요.
const cloned: Sheep = Object.create(original);

cloned.setName("Dolly");

console.log(cloned.getName()); // Dolly
console.log(cloned.getCategory()); // Mountain Sheep

export {};
