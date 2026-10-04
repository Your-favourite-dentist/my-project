import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { data } from '../data/posts';
import { Post } from '../models/posts.interface';
import { PostCard } from '../shared/post-card/post-card';
import { PostLatestArticles } from '../shared/post-latest-articles/post-latest-articles';

@Component({
  imports: [FormsModule, RouterLink, PostCard, PostLatestArticles],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  featured: Post[] = [data.posts[0], data.posts[1], data.posts[2]];
  latest: Post[] = [data.posts[3], data.posts[4], data.posts[5]];
  categories = data.categories;
}