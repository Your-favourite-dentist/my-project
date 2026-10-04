import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-author-card',
  standalone: true,
  templateUrl: './author-card.html',
  styleUrl: './author-card.css'
})
export class AuthorCard {
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() avatar: string = '';
}