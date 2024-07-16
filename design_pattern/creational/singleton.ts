class President {
  private static instance: President;

  private constructor() {
    // 생성자 숨기기
  }

  public static getInstance(): President {
    if (!President.instance) {
      President.instance = new President();
    }

    return President.instance;
  }

  private clone(): void {
    // 복제 비활성화
  }

  private wakeup(): void {
    // 데이터 역직렬화(unserialize) 비활성화
  }
}

/**
 * usage
 */
const president1: President = President.getInstance();
const president2: President = President.getInstance();

console.log(president1 === president2); // true

export {};
