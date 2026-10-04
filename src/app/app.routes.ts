import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Blog } from './blog/blog';
import { BlogDetails } from './blog-details/blog-details';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [

{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: Home, title: 'Home' },
{ path: 'about', component: About, title: 'About' },
{ path: 'blog', component: Blog, title: 'Blog' },
{ path: 'blog/:slug', component: BlogDetails, title: 'Blog Details' },
{ path: 'not-found', component: NotFound, title: 'Not Found' },
{ path: '**', redirectTo: 'not-found' }
]