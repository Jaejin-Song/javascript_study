/**
 * 상호 의존성이 있고, 복잡한 생성 로직이 있는 경우 사용
 */

/**
 * Door class
 */
interface Door {
  getDescription(): void;
}

class WoodenDoor implements Door {
  getDescription() {
    console.log("I am a wooden door");
  }
}

class IronDoor implements Door {
  getDescription() {
    console.log("I am an iron door");
  }
}

/**
 * DoorFittingExpert class
 */
interface DoorFittingExpert {
  getDescription(): void;
}

class Carpenter implements DoorFittingExpert {
  getDescription() {
    console.log("I can only fit wooden doors");
  }
}

class Welder implements DoorFittingExpert {
  getDescription() {
    console.log("I can only fit iron doors");
  }
}

/**
 * DoorFactory class
 */
interface DoorFactory {
  makeDoor(): Door;

  makeFittingExpert(): DoorFittingExpert;
}

// 나무 문과 목수를 얻을 수 있는 나무 문 팩토리
class WoodenDoorFactory implements DoorFactory {
  makeDoor(): Door {
    return new WoodenDoor();
  }

  makeFittingExpert(): DoorFittingExpert {
    return new Carpenter();
  }
}

// 철문과 용접사를 얻을 수 있는 철문 팩토리
class IronDoorFactory implements DoorFactory {
  makeDoor(): Door {
    return new IronDoor();
  }

  makeFittingExpert(): DoorFittingExpert {
    return new Welder();
  }
}
interface DoorFactory {
  makeDoor(): Door;

  makeFittingExpert(): DoorFittingExpert;
}

/**
 * Usage
 */
const woodenFactory: DoorFactory = new WoodenDoorFactory();

const wdoor: Door = woodenFactory.makeDoor();

const wexpert: DoorFittingExpert = woodenFactory.makeFittingExpert();

wdoor.getDescription(); // 출력: I am a wooden door

wexpert.getDescription(); // 출력: I can only fit wooden doors

// Iron Factory도 마찬가지 입니다.
const ironFactory: DoorFactory = new IronDoorFactory();

const idoor: Door = ironFactory.makeDoor();

const iexpert: DoorFittingExpert = ironFactory.makeFittingExpert();

idoor.getDescription(); // 출력: I am an iron door

iexpert.getDescription(); // 출력: I can only fit iron doors

export {};
