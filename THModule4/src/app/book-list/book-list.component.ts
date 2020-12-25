import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {BookService} from "../book.service";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  book!: Observable<Book[]>
  name! :string;
  constructor(private BookService:BookService,
              private router: Router,
  ) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.book = this.BookService.getBookList();
  }
  deleteBook(id: number) {
    console.log(id);
    this.BookService.deleteBook(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  bookDetails(id: number){
    this.router.navigate(['details', id]);
  }

}
