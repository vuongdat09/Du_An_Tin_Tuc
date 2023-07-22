import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLayoutComponent } from './section-layout.component';

describe('SectionLayoutComponent', () => {
  let component: SectionLayoutComponent;
  let fixture: ComponentFixture<SectionLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionLayoutComponent]
    });
    fixture = TestBed.createComponent(SectionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
