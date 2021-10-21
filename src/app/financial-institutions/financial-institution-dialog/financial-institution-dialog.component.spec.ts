import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialInstitutionDialogComponent } from './financial-institution-dialog.component';

describe('FinancialInstitutionDialogComponent', () => {
  let component: FinancialInstitutionDialogComponent;
  let fixture: ComponentFixture<FinancialInstitutionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialInstitutionDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialInstitutionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
