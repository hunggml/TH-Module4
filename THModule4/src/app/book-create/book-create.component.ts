import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Book} from  '../book';
import {BookService} from  '../book.service';
@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  book: Book = new Book();
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private bookService: BookService,) { }

  ngOnInit(): void {
  }
  newBook(): void {
    this.submitted = false;
    this.book = new Book();
  }

  save() {
    this.bookService
      .createBook(this.book).subscribe((data: any) => {
        console.log(data)
        this.book = new Book();
        this.gotoList();
      },
        (error: any) => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/book']);
  }

}
