import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { NewPostComponent } from "./pages/new-post/new-post.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PostComponent } from "./pages/post/post.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, NewPostComponent, FooterComponent, RouterLink, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blog';
}
