import { CommonModule } from '@angular/common';
import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  footer = viewChild<ElementRef>('footer');

  hasFooter(): boolean {
    return !!String(this.footer()?.nativeElement.innerHTML).length;
  }
}
