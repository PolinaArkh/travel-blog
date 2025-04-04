import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'new-post',
  imports: [ReactiveFormsModule],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {
  
  PostService = inject(PostService);
  arrPosts: Post[] = [];
  


  formPost: FormGroup;

  constructor() {
    this.formPost = new FormGroup({
      title: new FormControl(null, [
        Validators.required
      ]),
      category: new FormControl(null, [
        Validators.required
      ]),
       preview: new FormControl(null, [
        Validators.required
      ]),
      text: new FormControl(null, [
        Validators.required
      ]),
       author: new FormControl(null, [
        Validators.required
      ]),
      image: new FormControl(null, [
        Validators.required, Validators.pattern(/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp|svg))$/i
)
      ]),
      date: new FormControl(null, [
        Validators.required
      ])
    })
  }

  onSubmit() {
    if (this.formPost.valid) {
      const newPost: Post = this.formPost.value;
      this.PostService.addPost(newPost);
      alert('Your post successfully added')
      this.formPost.reset();
    }
  }

  imageValidator(control: AbstractControl) {
    const url = control.value;

    if (!url) {
      return null
    }

    if (/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp|svg))$/i.test(url)) {
      return { imageValidator: true }
    }

    return null
  }

  checkError(controlName: string, errorName: string) {
    return this.formPost.get(controlName)?.hasError(errorName) && this.formPost.get(controlName)?.touched
  }

}
