import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconComponent } from '../../ui/icon/icon.component';
import { SidebarComponent } from '../../ui/sidebar/sidebar.component';
import { SidebarLink } from '../../ui/sidebar/sidebar.interface';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, IconComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  links = signal<SidebarLink[]>([
    {
      icon: 'menu',
      label: 'menu',
      route: 'menu',
    },
    {
      icon: 'search',
      label: 'search',
      route: 'search',
    },
    {
      icon: 'star',
      label: 'star',
      route: 'star',
    },
    {
      icon: 'chat',
      label: 'chat',
      route: 'chat',
    },
    {
      icon: 'adjustment',
      label: 'adjustment',
      route: 'adjustment',
    },
    {
      icon: 'library',
      label: 'library',
      route: 'library',
    },
  ]);
}
