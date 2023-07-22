import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreatePostPageComponent } from './admin-create-post-page.component';

describe('AdminCreatePostPageComponent', () => {
  let component: AdminCreatePostPageComponent;
  let fixture: ComponentFixture<AdminCreatePostPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCreatePostPageComponent]
    });
    fixture = TestBed.createComponent(AdminCreatePostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
