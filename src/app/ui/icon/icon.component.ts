import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);

  icon = input<string | null>(null);
  class = input('');
  source = computed(() => {
    if (!this.icon()) {
      return of('');
    }

    const path = './assets/icons/' + this.icon() + '.svg';
    return this.http.get(path, { responseType: 'text' }).pipe(
      map((svg) => {
        return this.sanitizer.bypassSecurityTrustHtml(svg);
      })
    );
  });
}
