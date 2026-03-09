import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceCostingComponent } from './finance-costing.component';

describe('FinanceCostingComponent', () => {
  let component: FinanceCostingComponent;
  let fixture: ComponentFixture<FinanceCostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceCostingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinanceCostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
