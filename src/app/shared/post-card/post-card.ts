import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../models/posts.interface';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post-card.html',
  styleUrl: './post-card.css'
})
export class PostCard {
  @Input() post!: Post;
}