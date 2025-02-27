import { Component, input } from '@angular/core';
import { Cpf } from '../../../../core/services/cpf/cpf.interface';
import { CardComponent } from '../../../../ui/card/card.component';
import { IconComponent } from '../../../../ui/icon/icon.component';
import { TextComponent } from '../../../../ui/text/text.component';

@Component({
  selector: 'app-cpf-status-card',
  standalone: true,
  imports: [IconComponent, TextComponent, CardComponent],
  templateUrl: './cpf-status-card.component.html',
  styleUrl: './cpf-status-card.component.scss',
})
export class CpfStatusCardComponent {
  cpf = input<Cpf>();
}
