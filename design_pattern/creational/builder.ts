/**
 * 언제 사용하나요?
 * 객체의 여러 변종이 있을 수 있고 점층적 생성자를 피하기 위해 사용합니다.
 * 팩토리 패턴과의 주요 차이점은, 팩토리 패턴은 생성이 한 단계인 경우에 사용되는 반면, 빌더 패턴은 생성이 여러 단계인 경우에 사용됩니다.
 */

/**
 * burger
 */
class Burger {
  protected size: number;

  protected cheese: boolean = false;

  protected pepperoni: boolean = false;

  protected lettuce: boolean = false;

  protected tomato: boolean = false;

  constructor(builder: BurgerBuilder) {
    this.size = builder.size;

    this.cheese = builder.cheese;

    this.pepperoni = builder.pepperoni;

    this.lettuce = builder.lettuce;

    this.tomato = builder.tomato;
  }
}

/**
 * burger builder
 */
class BurgerBuilder {
  public size: number;

  public cheese: boolean = false;

  public pepperoni: boolean = false;

  public lettuce: boolean = false;

  public tomato: boolean = false;

  constructor(size: number) {
    this.size = size;
  }

  addPepperoni(): BurgerBuilder {
    this.pepperoni = true;

    return this;
  }

  addLettuce(): BurgerBuilder {
    this.lettuce = true;

    return this;
  }

  addCheese(): BurgerBuilder {
    this.cheese = true;

    return this;
  }

  addTomato(): BurgerBuilder {
    this.tomato = true;

    return this;
  }

  build(): Burger {
    return new Burger(this);
  }
}

/**
 * usage
 */
const burger = new BurgerBuilder(14)
  .addPepperoni()
  .addLettuce()
  .addTomato()
  .build();

export {};
