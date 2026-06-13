import { Reader } from "../models/Reader";
import { Copy } from "../models/Copy";

export class BorrowService {
  borrow(reader: Reader, copy: Copy): boolean {
    if (!copy.isCopyAvailable()) {
      return false;
    }

    const borrowed = copy.borrow();
    if (!borrowed) {
      return false;
    }

    reader.borrowCopy(copy);
    return true;
  }

  returnBook(reader: Reader, copy: Copy): boolean {
    if (!reader.getBorrowedCopies().includes(copy)) {
      return false;
    }

    const returned = copy.returnCopy();
    if (!returned) {
      return false;
    }

    reader.returnCopy(copy);
    return true;
  }
}
