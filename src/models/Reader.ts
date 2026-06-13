import { Copy } from "./Copy";

export class Reader {
  private id: string;
  private name: string;
  private borrowedCopies: Copy[] = [];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  borrowCopy(copy: Copy): void {
    if (!this.borrowedCopies.includes(copy)) {
      this.borrowedCopies.push(copy);
    }
  }

  returnCopy(copy: Copy): void {
    const index = this.borrowedCopies.indexOf(copy);
    if (index >= 0) {
      this.borrowedCopies.splice(index, 1);
    }
  }

  getBorrowedCopies(): Copy[] {
    return [...this.borrowedCopies];
  }
}
