import { AbstractBook } from "./AbstractBook";

export class Author {
  private name: string;
  private books: AbstractBook[] = [];

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  addBook(book: AbstractBook): void {
    if (!this.books.includes(book)) {
      this.books.push(book);
    }
  }

  getBooks(): AbstractBook[] {
    return [...this.books];
  }
}
