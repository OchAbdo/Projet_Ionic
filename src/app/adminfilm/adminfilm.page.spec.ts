import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminfilmPage } from './adminfilm.page';

describe('AdminfilmPage', () => {
  let component: AdminfilmPage;
  let fixture: ComponentFixture<AdminfilmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfilmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
