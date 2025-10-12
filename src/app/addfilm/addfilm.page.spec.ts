import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddfilmPage } from './addfilm.page';

describe('AddfilmPage', () => {
  let component: AddfilmPage;
  let fixture: ComponentFixture<AddfilmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfilmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
