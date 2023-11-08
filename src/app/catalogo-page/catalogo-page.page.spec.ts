import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogoPagePage } from './catalogo-page.page';

describe('CatalogoPagePage', () => {
  let component: CatalogoPagePage;
  let fixture: ComponentFixture<CatalogoPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatalogoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
