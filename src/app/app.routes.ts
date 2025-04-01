import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { PostComponent } from './pages/post/post.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'inicio', component: HomeComponent},
    { path: 'new', component: NewPostComponent },
    { path: 'post/:id', component: PostComponent},
    { path: '**', redirectTo: '/inicio'}
];
