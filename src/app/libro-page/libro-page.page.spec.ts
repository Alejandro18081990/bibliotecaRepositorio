import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibroPagePage } from './libro-page.page';

describe('LibroPagePage', () => {
  let component: LibroPagePage;
  let fixture: ComponentFixture<LibroPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LibroPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
