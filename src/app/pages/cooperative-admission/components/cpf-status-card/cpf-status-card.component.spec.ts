import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfStatusCardComponent } from './cpf-status-card.component';

describe('CpfStatusCardComponent', () => {
  let component: CpfStatusCardComponent;
  let fixture: ComponentFixture<CpfStatusCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpfStatusCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpfStatusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
