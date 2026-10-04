import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { data } from "../data/posts";

@Component({
  imports: [RouterLink],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  social = data.siteInfo.social;
  categories = data.categories
}
