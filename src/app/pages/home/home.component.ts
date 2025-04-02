import { PostService } from './../../services/post.service';
import { Component, inject } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'home',
  imports: [RouterLink, DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  arrPosts: Post[] = [];
  categories: string[] = [];
  filteredPosts: Post[] = [];

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

  /*onInput($event: Event) {
    const inputHtmlEl = $event.target as HTMLInputElement
    const query = inputHtmlEl.value.toLowerCase(); // Convert input to lowercase
    console.log(inputHtmlEl)
      //inputHtmlEl.value.toLowerCase();
    this.filteredPosts = this.arrPosts.filter(post =>
      post.title.toLowerCase().includes(query)
    );
    if (!query) {
      this.filteredPosts = [...this.arrPosts];
    }
    console.log(inputHtmlEl.value)
  }*/
  
  onInput($event: Event) {
    const inputHtmlEl = $event.target as HTMLInputElement
    console.log('inputHtmlEl ' + inputHtmlEl.value)
    if (inputHtmlEl.value) {
      this.filteredPosts = this.PostService.getAll().filter(post =>
        post.title.toLowerCase().includes(inputHtmlEl.value.toLowerCase())
      );
      this.arrPosts = this.filteredPosts
    } else {
      this.filteredPosts = this.PostService.getAll();
      console.log('this.filteredPosts ', this.filteredPosts)
    }
  }
}