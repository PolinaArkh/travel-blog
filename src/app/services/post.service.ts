import { Category } from './../interfaces/category.interface';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { posts } from '../db/posts.db';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postsNeeded: Post[] = posts;

  getAll():Post[] {
    return posts
  }

  //gets an array of categories from the service
  getCategories(): string[]{
    const categories: string[] = [];
      for (let post of posts) {
      if (!categories.includes(post.category)) {
        categories.push(post.category);
      }
    }
    return categories;
  }

  //filters posts by selected categories
  getByCategory(category: string): Post[] {
    return posts.filter((post) => post.category === category);
  }

  //used to open one particular post, using its id
  getPostById(postId: number) {
    
    return posts.find((post) => post.id === postId)
  }

  //used to add new posts into the existing array of posts
   addPost(post: Post) {
    post.id = this.postsNeeded.length + 1;
    this.postsNeeded.push(post);
  }
}
