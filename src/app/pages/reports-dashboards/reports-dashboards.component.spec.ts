import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsDashboardsComponent } from './reports-dashboards.component';

describe('ReportsDashboardsComponent', () => {
  let component: ReportsDashboardsComponent;
  let fixture: ComponentFixture<ReportsDashboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsDashboardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportsDashboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
