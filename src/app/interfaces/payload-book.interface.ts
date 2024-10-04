import { Book } from "./book.interface";

export type BookPayload = Omit<Book, 'id'>;
