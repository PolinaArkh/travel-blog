import { RouterLink } from '@angular/router';
import { Post } from '../../interfaces/post.interface';
import { PostService } from './../../services/post.service';
import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'post',
  imports: [RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input('id') pId ='';

  PostService = inject(PostService);

  post: Post | undefined;

  ngOnInit() {
    console.log('1 postid: ' + this.pId);
    if (this.pId) {
      console.log('postid: ' + this.pId);
      this.post = this.PostService.getPostById(Number(this.pId));
      console.log('post', this.post)
    }

  }
}
