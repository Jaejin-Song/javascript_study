/**
 * 팩토리 = 다른 객체를 생성하기 위한 객체
 * 팩토리는 다양한 프로토타입 또는 클래스에서 어떤 메소드 호출로 “새로운” 객체를 반환하는 함수 또는 메소드
 */
interface Door {
  getWidth(): number;

  getHeight(): number;
}

class WoodenDoor implements Door {
  protected width: number;

  protected height: number;

  constructor(width: number, height: number) {
    this.width = width;

    this.height = height;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }
}

class DoorFactory {
  public static makeDoor(width: number, height: number): Door {
    return new WoodenDoor(width, height);
  }
}

// 100x200의 문을 만들어줘
const door: Door = DoorFactory.makeDoor(100, 200);

console.log("Width: " + door.getWidth());
console.log("Height: " + door.getHeight());

// 50x100의 문을 만들어줘
const door2: Door = DoorFactory.makeDoor(50, 100);

export {};
