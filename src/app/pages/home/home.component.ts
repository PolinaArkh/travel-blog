import { PostService } from './../../services/post.service';
import { Component, inject } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  arrPosts: Post[] = [];
  categories: string[] = [];

  PostService = inject(PostService);

  ngOnInit() {
    this.arrPosts = this.PostService.getAll();
    //when we start the app --> the array of categories will appear
    this.categories = this.PostService.getCategories();
  }
   //will get the category once it's chosen in the select
  onChange($event: Event) {
    const htmlEl = $event.target as HTMLSelectElement;
    console.log(htmlEl.value)
    if (!htmlEl.value) {
      this.arrPosts = this.PostService.getAll();
    } else {
      this.arrPosts = this.PostService.getByCategory(htmlEl.value);
    }
    //we collocate a new array in the one we used before 

  }
}
