import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarLibrosComponent } from './modificar-libros.component';

describe('ModificarLibrosComponent', () => {
  let component: ModificarLibrosComponent;
  let fixture: ComponentFixture<ModificarLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarLibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
