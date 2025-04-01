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

  //get's an array of categories from the service
  getCategories(): string[]{
    const categories: string[] = [];
      for (let post of posts) {
      if (!categories.includes(post.category)) {
        categories.push(post.category);
      }
    }
    return categories;
  }

  getByCategory(category: string): Post[] {
    return posts.filter((post) => post.category === category);
      //return movie.genre === 
      /*if (movie.genre === genre) {
        return true
      } return false;*/
   
    //no need to use additional variable
  }

  getPostById(postId: number) {
    
    return posts.find((post) => post.id === postId)
  }


   addPost(post: Post) {
    post.id = this.postsNeeded.length + 1;
    this.postsNeeded.push(post);
  }
}
