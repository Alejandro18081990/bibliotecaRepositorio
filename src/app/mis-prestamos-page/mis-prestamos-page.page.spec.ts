import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisPrestamosPagePage } from './mis-prestamos-page.page';

describe('MisPrestamosPagePage', () => {
  let component: MisPrestamosPagePage;
  let fixture: ComponentFixture<MisPrestamosPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisPrestamosPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
