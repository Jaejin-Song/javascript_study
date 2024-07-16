/**
 * 컴포지트 패턴을 사용하면 클라이언트가 개별 객체를 동일한 방식으로 처리할 수 있다.
 */

abstract class Employee {
  protected salary: number;

  protected name: string;

  protected roles: string[] = [];

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  public abstract getName(): string;
  public abstract setSalary(salary: number): void;
  public abstract getSalary(): number;
  public abstract getRoles(): string[];
}

class Developer extends Employee {
  constructor(name: string, salary: number) {
    super(name, salary);
  }

  getName(): string {
    return this.name;
  }

  setSalary(salary: number): void {
    this.salary = salary;
  }

  getSalary(): number {
    return this.salary;
  }

  getRoles(): string[] {
    return this.roles;
  }
}

class Designer extends Employee {
  constructor(name: string, salary: number) {
    super(name, salary);
  }

  getName(): string {
    return this.name;
  }

  setSalary(salary: number): void {
    this.salary = salary;
  }

  getSalary(): number {
    return this.salary;
  }

  getRoles(): string[] {
    return this.roles;
  }
}

class Organization {
  protected employees: Employee[] = [];

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  getNetSalaries(): number {
    let netSalary = 0;

    for (const employee of this.employees) {
      netSalary += employee.getSalary();
    }

    return netSalary;
  }
}

/**
 * usage
 */

// 직원 준비하기
let john = new Developer("John Doe", 12000);
let jane = new Designer("Jane Doe", 15000);

//조직에 추가하기
let organization = new Organization();

organization.addEmployee(john);
organization.addEmployee(jane);

console.log("Net salaries: " + organization.getNetSalaries()); // 출력: Net Salaries: 27000

export {};
