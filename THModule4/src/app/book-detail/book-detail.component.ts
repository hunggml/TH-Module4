import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  id!: number;
  book!: Book;

  constructor(private route: ActivatedRoute,private router: Router,
    private bookService: BookService)
   { }

  ngOnInit(): void {
    this.book = new Book();

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.bookService.getBook(this.id)
      .subscribe(data => {
        console.log(data)
        this.book = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['book']);
  }
  

}
