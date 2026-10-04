import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Post } from '../models/posts.interface';
import { data } from '../data/posts';
import { PostCard } from '../shared/post-card/post-card';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, PostCard, FormsModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog implements OnInit {

  allPosts: Post[] = data.posts;
  posts: Post[] = [];
  filteredPosts: Post[] = [];
  selectedCategory: string = 'الكل';
  categories = ['الكل', 'إضاءة', 'بورتريه', 'مناظر طبيعية', 'تقنيات', 'معدات'];
  searchText: string = '';

  currentPage: number = 1;
  postsPerPage: number = 6;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      if (category) {
        this.selectedCategory = category;
      } else {
        this.selectedCategory = 'الكل';
      }
      this.applyFilters();
    });
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.applyFilters();
  }

  applyFilters(): void {
    let result = this.allPosts;

    if (this.selectedCategory && this.selectedCategory !== 'الكل') {
      result = result.filter(p => p.category === this.selectedCategory);
    }

    if (this.searchText.trim()) {
      const term = this.searchText.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(term) ||
        p.excerpt.toLowerCase().includes(term)
      );
    }

    this.filteredPosts = result;
    this.updatePage();
  }

  updatePage(): void {
    const start = (this.currentPage - 1) * this.postsPerPage;
    const end = start + this.postsPerPage;
    this.posts = this.filteredPosts.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredPosts.length / this.postsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePage();
    }
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  prevPage(): void {
    this.goToPage(this.currentPage - 1);
  }
}