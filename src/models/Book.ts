import { Author } from "./Author";
import { AbstractBook } from "./AbstractBook";

export class Book extends AbstractBook {
  constructor(title: string, year: number, author: Author) {
    super(title, year, author);
    author.addBook(this);
  }

  getDescription(): string {
    return `Physical book "${this.getTitle()}" by ${this.getAuthor().getName()} (${this.getYear()})`;
  }
}
