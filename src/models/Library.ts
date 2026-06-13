import { Author } from "./Author";
import { AbstractBook } from "./AbstractBook";
import { Copy } from "./Copy";
import { Reader } from "./Reader";

export class Library {
  private authors: Author[] = [];
  private books: AbstractBook[] = [];
  private copies: Copy[] = [];
  private readers: Reader[] = [];

  addAuthor(author: Author): void {
    if (!this.authors.includes(author)) {
      this.authors.push(author);
    }
  }

  addBook(book: AbstractBook): void {
    if (!this.books.includes(book)) {
      this.books.push(book);
    }
  }

  addCopy(copy: Copy): void {
    if (!this.copies.includes(copy)) {
      this.copies.push(copy);
    }
  }

  addReader(reader: Reader): void {
    if (!this.readers.includes(reader)) {
      this.readers.push(reader);
    }
  }

  getAvailableCopies(): Copy[] {
    return this.copies.filter((copy) => copy.isCopyAvailable());
  }

  findBooksByAuthor(author: Author | string): AbstractBook[] {
    const authorName = typeof author === "string" ? author : author.getName();
    return this.books.filter(
      (book) => book.getAuthor().getName() === authorName
    );
  }

  getAuthors(): Author[] {
    return [...this.authors];
  }

  getBooks(): AbstractBook[] {
    return [...this.books];
  }

  getReaders(): Reader[] {
    return [...this.readers];
  }
}
