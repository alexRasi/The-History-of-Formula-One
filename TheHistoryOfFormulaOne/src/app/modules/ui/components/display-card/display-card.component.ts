import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent {

  @Input() imageLink: string;
  @Input() altImageTitle: string;
  @Input() label: string;
  @Input() description: string;
  @Input() moreInfoLink: string;

  isUrl(str: string) {
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if(this.description) {
      return this.description.match(regex);
    } else {
      return false;
    }
  }
}
