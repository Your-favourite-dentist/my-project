import { Component, signal, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Home } from "./home/home";
import { About } from "./about/about";
import { Blog } from "./blog/blog";
import { BlogDetails } from "./blog-details/blog-details";
import { NotFound } from './not-found/not-found';
import { Footer } from './footer/footer';
import { initFlowbite } from 'flowbite';

@Component({
  imports: [RouterOutlet, Home, Navbar, About, Blog, BlogDetails, NotFound,Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('my-project');

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite();
    }
  }
}