import { Component, input } from '@angular/core';
import { Cpf } from '../../../../core/services/cpf/cpf.interface';
import { CardComponent } from '../../../../ui/card/card.component';
import { IconComponent } from '../../../../ui/icon/icon.component';
import { LinkComponent } from '../../../../ui/link/link.component';
import { TextComponent } from '../../../../ui/text/text.component';

@Component({
  selector: 'app-checking-account-card',
  standalone: true,
  imports: [LinkComponent, IconComponent, TextComponent, CardComponent],
  templateUrl: './checking-account-card.component.html',
  styleUrl: './checking-account-card.component.scss',
})
export class CheckingAccountCardComponent {
  cpf = input<Cpf>();
}
