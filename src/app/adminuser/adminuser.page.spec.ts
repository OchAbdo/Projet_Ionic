import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminuserPage } from './adminuser.page';

describe('AdminuserPage', () => {
  let component: AdminuserPage;
  let fixture: ComponentFixture<AdminuserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
