import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdatePostPageComponent } from './admin-update-post-page.component';

describe('AdminUpdatePostPageComponent', () => {
  let component: AdminUpdatePostPageComponent;
  let fixture: ComponentFixture<AdminUpdatePostPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUpdatePostPageComponent]
    });
    fixture = TestBed.createComponent(AdminUpdatePostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
