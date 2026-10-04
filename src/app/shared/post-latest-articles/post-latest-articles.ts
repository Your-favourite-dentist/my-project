import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../models/posts.interface';

@Component({
  selector: 'app-post-latest-articles',
  imports: [RouterLink],
  templateUrl: './post-latest-articles.html',
  styleUrl: './post-latest-articles.css',
})
export class PostLatestArticles {
  @Input() post!: Post;
}