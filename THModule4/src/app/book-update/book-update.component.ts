import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Book} from  '../book';
import {BookService} from  '../book.service';
@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  id!: number;
  book!: Book;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private bookService: BookService,) { }

  ngOnInit(): void {
    this.book = new Book();
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBook(this.id)
    .subscribe(data => {
      console.log(data)
      this.book = data;
    }, error => console.log(error));
  }
  updateBook() {
    this.bookService.updateBook(this.id, this.book)
      .subscribe(data => {
        console.log(data);
        this.book = new Book();
        this.gotoList();
      }, error => console.log(error));
  }
  onSubmit() {
    this.updateBook();
  }

  gotoList() {
    this.router.navigate(['/book']);
  }

}
