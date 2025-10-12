import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminListuserPage } from './admin-listuser.page';

describe('AdminListuserPage', () => {
  let component: AdminListuserPage;
  let fixture: ComponentFixture<AdminListuserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
