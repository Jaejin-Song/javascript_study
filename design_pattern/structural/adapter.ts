/**
 * lion class
 */
interface Lion {
  roar(): void;
}

class AfricanLion implements Lion {
  roar(): void {}
}

class AsianLion implements Lion {
  roar(): void {}
}

/**
 * hunter class
 */
class Hunter {
  hunt(lion: Lion): void {
    lion.roar();
  }
}

/**
 * wildDog class
 */
// 이것은 게임에 추가해야 합니다.
class WildDog {
  bark(): void {}
}

// 게임과 호환되도록 wild dog 주위에 어댑터를 만듭니다.
class WildDogAdapter implements Lion {
  protected dog: WildDog;

  constructor(dog: WildDog) {
    this.dog = dog;
  }

  roar(): void {
    this.dog.bark();
  }
}

/**
 * usage
 */
const wildDog = new WildDog();

const wildDogAdapter = new WildDogAdapter(wildDog);

const hunter = new Hunter();

hunter.hunt(wildDogAdapter);

export {};
