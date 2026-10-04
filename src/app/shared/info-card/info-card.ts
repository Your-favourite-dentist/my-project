import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-info-card',
  styleUrl: './info-card.css',
  templateUrl: './info-card.html',
  standalone:true
})
export class InfoCard {
  @Input() icon:string='';
  @Input() title:string ='';
  @Input()description:string =''
}
