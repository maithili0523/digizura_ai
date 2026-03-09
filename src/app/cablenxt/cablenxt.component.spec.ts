import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CablenxtComponent } from './cablenxt.component';

describe('CablenxtComponent', () => {
  let component: CablenxtComponent;
  let fixture: ComponentFixture<CablenxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CablenxtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CablenxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
