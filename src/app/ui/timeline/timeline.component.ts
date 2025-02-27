import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TimelineItem } from './timeline.interface';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  items = input<TimelineItem[]>([]);
}
