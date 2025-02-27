import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationAccountCardComponent } from './application-account-card.component';

describe('ApplicationAccountCardComponent', () => {
  let component: ApplicationAccountCardComponent;
  let fixture: ComponentFixture<ApplicationAccountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationAccountCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationAccountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
