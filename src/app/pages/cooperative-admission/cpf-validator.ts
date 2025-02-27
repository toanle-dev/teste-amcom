import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const cpf = control.value;

    if (!cpf) {
      return null; // Se o campo estiver vazio, não há erro (assumindo que o campo não é obrigatório)
    }

    if (!validarCPF(cpf)) {
      return { cpfInvalido: true }; // Retorna um erro se o CPF for inválido
    }

    return null; // Retorna null se o CPF for válido
  };
}

function validarCPF(cpf: string): boolean {
  cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) {
    return false;
  }

  const cpfArray = cpf.split('').map((el) => +el);
  const rest = (count: number) =>
    ((cpfArray
      .slice(0, count - 12)
      .reduce((soma, el, index) => soma + el * (count - index), 0) *
      10) %
      11) %
    10;

  return rest(10) === cpfArray[9] && rest(11) === cpfArray[10];
}
