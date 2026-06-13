import { AbstractBook } from "./AbstractBook";

export class Copy {
  private book: AbstractBook;
  private available = true;

  constructor(book: AbstractBook) {
    this.book = book;
  }

  getBook(): AbstractBook {
    return this.book;
  }

  isCopyAvailable(): boolean {
    return this.available;
  }

  borrow(): boolean {
    if (!this.available) {
      return false;
    }

    this.available = false;
    return true;
  }

  returnCopy(): boolean {
    if (this.available) {
      return false;
    }

    this.available = true;
    return true;
  }
}
