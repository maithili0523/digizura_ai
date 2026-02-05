import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiForCableComponent } from './ai-for-cable.component';

describe('AiForCableComponent', () => {
  let component: AiForCableComponent;
  let fixture: ComponentFixture<AiForCableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiForCableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiForCableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
