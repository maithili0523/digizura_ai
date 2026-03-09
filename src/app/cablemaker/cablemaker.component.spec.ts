import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CablemakerComponent } from './cablemaker.component';

describe('CablemakerComponent', () => {
  let component: CablemakerComponent;
  let fixture: ComponentFixture<CablemakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CablemakerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CablemakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
