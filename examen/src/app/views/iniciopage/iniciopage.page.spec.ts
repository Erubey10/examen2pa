import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciopagePage } from './iniciopage.page';

describe('IniciopagePage', () => {
  let component: IniciopagePage;
  let fixture: ComponentFixture<IniciopagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciopagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
