import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";
import {BookCreateComponent} from "./book-create/book-create.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookUpdateComponent} from "./book-update/book-update.component";

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'book', component: BookListComponent },
  { path: 'add', component: BookCreateComponent },
  { path: 'details/:id', component: BookDetailComponent },
  { path: 'update/:id', component: BookUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
