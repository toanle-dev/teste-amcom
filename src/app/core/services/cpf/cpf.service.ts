import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';

import { Cpf } from './cpf.interface';

@Injectable({
  providedIn: 'root',
})
export class CpfService {
  private http = inject(HttpClient);

  searhCpf(cpf: string): Observable<Cpf> {
    return this.http.get<any>('./assets/json/cpf-data.json').pipe(
      delay(400),
      map((data) => {
        cpf = cpf.replaceAll(/[^0-9]/g, '');
        const result = data.find(
          (item: any) => cpf == String(item.cpf).replaceAll(/[^0-9]/g, '')
        );
        return result;
      })
    );
  }
}
