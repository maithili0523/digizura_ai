import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CableMakerComponent } from './cable-maker.component';

describe('CableMakerComponent', () => {
  let component: CableMakerComponent;
  let fixture: ComponentFixture<CableMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CableMakerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CableMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
