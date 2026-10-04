import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Post } from '../models/posts.interface';
import { data } from '../data/posts';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css'
})
export class BlogDetails implements OnInit {

  post?: Post;
  relatedPosts: Post[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.post = data.posts.find(p => p.slug === slug);

    this.relatedPosts = data.posts
      .filter(p => p.slug !== slug)
      .slice(0, 3);
  }
}