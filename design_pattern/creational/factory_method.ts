/**
 * 클라이언트가 정확히 어떤 자식 클래스가 필요한지 모를 때 사용
 */

/** 면접관 */
interface Interviewer {
  askQuestions(): void;
}

class Developer implements Interviewer {
  askQuestions() {
    console.log("Asking about design patterns!");
  }
}

class CommunityExecutive implements Interviewer {
  askQuestions() {
    console.log("Asking about community building");
  }
}

/**
 * HiringManager
 */
abstract class HiringManager {
  // Factory method

  protected abstract makeInterviewer(): Interviewer;

  public takeInterview() {
    const interviewer = this.makeInterviewer();

    interviewer.askQuestions();
  }
}

class DevelopmentManager extends HiringManager {
  protected makeInterviewer(): Interviewer {
    return new Developer();
  }
}

class MarketingManager extends HiringManager {
  protected makeInterviewer(): Interviewer {
    return new CommunityExecutive();
  }
}

/**
 * Usage
 */
const devManager = new DevelopmentManager();

devManager.takeInterview(); // 출력: Asking about design patterns!

const marketingManager = new MarketingManager();

marketingManager.takeInterview(); // 출력: Asking about community building.
