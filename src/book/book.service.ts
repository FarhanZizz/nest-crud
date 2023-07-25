import { Injectable } from '@nestjs/common';
import { BookEntity } from './entity/book.entity';

@Injectable()
export class BookService {
  public booksData: BookEntity[] = [];

  addBook(book: BookEntity): string {
    this.booksData.push(book);
    return 'Book Added Successfully';
  }

  updateBook(id: number, updateBook: BookEntity): string {
    for (let x = 0; x < this.booksData.length; x++) {
      if (this.booksData[x].id === id) {
        this.booksData[x] = updateBook;
      }
    }
    return 'Book Updated Successfully';
  }

  deleteBook(id: number) {
    this.booksData = this.booksData.filter((book) => book.id !== id);
    return 'Book has Been Deleted';
  }
  findBookById(id: number): BookEntity {
    for (let x = 0; x < this.booksData.length; x++) {
      if ((this.booksData[x].id = id)) {
        return this.booksData[x];
      }
    }
  }
  findAllBooks(): BookEntity[] {
    return this.booksData;
  }
}
