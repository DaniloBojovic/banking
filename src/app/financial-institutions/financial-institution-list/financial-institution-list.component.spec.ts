import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialInstitutionListComponent } from './financial-institution-list.component';

describe('FinancialInstitutionListComponent', () => {
  let component: FinancialInstitutionListComponent;
  let fixture: ComponentFixture<FinancialInstitutionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialInstitutionListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialInstitutionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
