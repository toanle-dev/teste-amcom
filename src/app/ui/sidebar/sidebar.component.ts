import { Component, input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { SidebarLink } from './sidebar.interface';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  logo = input('');
  links = input<SidebarLink[]>([]);
}
