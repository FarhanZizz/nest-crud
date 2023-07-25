import { Args, Int, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Book } from './schema/book.schema';
import { BookService } from './book.service';
import { Book as BookModel } from '../graphql';
import { AddBookArgs } from './args/addbook.arg';

@Resolver((of) => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  // Queries and mutations

  @Query((returns) => [Book], { name: 'books' })
  getAllBooks(): BookModel[] {
    return this.bookService.findAllBooks();
  }

  @Query((returns) => Book, { name: 'findBookById', nullable: true })
  getBookById(
    @Args({ name: 'bookId', type: () => Int }) id: number,
  ): BookModel {
    return this.bookService.findBookById(id);
  }

  @Mutation((returns) => String, { name: 'deleteBook' })
  deleteBookById(
    @Args({ name: 'bookId', type: () => Int }) id: number,
  ): string {
    return this.bookService.deleteBook(id);
  }

  @Mutation((returns) => String, { name: 'addBook' })
  addBook(@Args('addBookArgs') addBookArgs: AddBookArgs): string {
    return this.bookService.addBook(addBookArgs);
  }

  @Mutation((returns) => String, { name: 'updateBook' })
  updateBook(
    @Args({ name: 'bookId', type: () => Int }) id: number,
    @Args('updateBookArgs')
    updateBookArgs: AddBookArgs,
  ): string {
    return this.bookService.updateBook(id, updateBookArgs);
  }
}
