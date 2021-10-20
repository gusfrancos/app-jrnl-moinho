import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoFuncionalidadesComponent } from './gestao-funcionalidades.component';

describe('GestaoFuncionalidadesComponent', () => {
  let component: GestaoFuncionalidadesComponent;
  let fixture: ComponentFixture<GestaoFuncionalidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoFuncionalidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoFuncionalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
