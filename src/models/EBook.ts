import { Author } from "./Author";
import { AbstractBook } from "./AbstractBook";

export class EBook extends AbstractBook {
  private url: string;

  constructor(title: string, year: number, author: Author, url: string) {
    super(title, year, author);
    this.url = url;
    author.addBook(this);
  }

  getUrl(): string {
    return this.url;
  }

  setUrl(url: string): void {
    this.url = url;
  }

  getDescription(): string {
    return `E-book "${this.getTitle()}" by ${this.getAuthor().getName()} (${this.getYear()}) - Available at: ${this.url}`;
  }
}
