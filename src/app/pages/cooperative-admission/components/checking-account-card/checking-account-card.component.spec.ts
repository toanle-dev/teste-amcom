import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingAccountCardComponent } from './checking-account-card.component';

describe('CheckingAccountCardComponent', () => {
  let component: CheckingAccountCardComponent;
  let fixture: ComponentFixture<CheckingAccountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckingAccountCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckingAccountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
