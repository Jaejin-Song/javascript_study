/**
 * webpage class
 */

abstract class WebPage {
  protected theme: Theme;

  constructor(theme: Theme) {
    this.theme = theme;
  }

  public abstract getContent(): string;
}

class About extends WebPage {
  constructor(theme: Theme) {
    super(theme);
  }

  getContent(): string {
    return `About page in ${this.theme.getColor()}`;
  }
}

class Careers extends WebPage {
  constructor(theme: Theme) {
    super(theme);
  }

  getContent(): string {
    return `Careers page in ${this.theme.getColor()}`;
  }
}

/**
 * theme class
 */
interface Theme {
  getColor(): string;
}

class DarkTheme implements Theme {
  getColor(): string {
    return "Dark Black";
  }
}

class LightTheme implements Theme {
  getColor(): string {
    return "Off white";
  }
}

class AquaTheme implements Theme {
  getColor(): string {
    return "Light blue";
  }
}

/**
 * usage
 */
const darkTheme = new DarkTheme();

const about = new About(darkTheme);
const careers = new Careers(darkTheme);

console.log(about.getContent()); // "About page in Dark Black"
console.log(careers.getContent()); // "Careers page in Dark Black"

export {};
