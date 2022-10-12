import { Component, OnInit,  } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myBooks: Book[] = [
    new Book(
        'Book of Testing',
        'Will Wilder',
        'Mystery',
        'https://source.unsplash.com/50x50/?mystery,book'
    ),
     new Book(
      'Book of More Testing',
      'John Smith',
      'Drama',
      'https://source.unsplash.com/50x50/?mystery,book'
  ),
  new Book(
    'Book of All Testing',
    'Mike Holloway',
    'Documentary',
    'https://source.unsplash.com/50x50/?mystery,book'
)
];
}
