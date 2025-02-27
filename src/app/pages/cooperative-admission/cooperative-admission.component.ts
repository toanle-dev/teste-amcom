import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cpf } from '../../core/services/cpf/cpf.interface';
import { CpfService } from '../../core/services/cpf/cpf.service';
import { ButtonComponent } from '../../ui/button/button.component';
import { InputComponent } from '../../ui/input/input.component';
import { TimelineComponent } from '../../ui/timeline/timeline.component';
import { TimelineItem } from '../../ui/timeline/timeline.interface';
import { ApplicationAccountCardComponent } from './components/application-account-card/application-account-card.component';
import { CheckingAccountCardComponent } from './components/checking-account-card/checking-account-card.component';
import { CpfStatusCardComponent } from './components/cpf-status-card/cpf-status-card.component';
import { cpfValidator } from './cpf-validator';

@Component({
  selector: 'app-cooperative-admission',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TimelineComponent,
    InputComponent,
    ButtonComponent,
    ApplicationAccountCardComponent,
    CheckingAccountCardComponent,
    CpfStatusCardComponent,
  ],
  templateUrl: './cooperative-admission.component.html',
  styleUrl: './cooperative-admission.component.scss',
})
export class CooperativeAdmissionComponent {
  private fb = inject(FormBuilder);
  private cpfService = inject(CpfService);

  cpfForm = this.fb.group({
    cpf: ['98765432100', [Validators.required, cpfValidator()]],
  });

  error = signal<string | null>(null);
  cpf = signal<Cpf | null>(null);
  loadingCpf = signal(false);
  timeline = signal<TimelineItem[]>([
    { label: 'Inicio', active: true, visited: false },
    { label: 'Documentos', active: false, visited: false },
    { label: 'Dados Cadastrais', active: false },
    { label: 'Admissão', active: false },
  ]);

  searchCPF() {
    this.error.set('');
    if (!this.cpfForm.valid) {
      this.error.set('CPF Inválido!');
      this.cpf.set(null);
      return;
    }

    this.loadingCpf.set(true);
    this.cpfService.searhCpf(String(this.cpfForm.value.cpf || '')).subscribe({
      next: (cpf) => {
        this.loadingCpf.set(false);
        if (!cpf) {
          this.error.set('CPF não encontrado!');
          this.cpf.set(null);
        } else {
          this.cpf.set(cpf);
        }
      },
    });
  }
}
