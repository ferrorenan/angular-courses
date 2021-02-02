import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDicasComponent } from './lista-dicas.component';

describe('ListaDicasComponent', () => {
  let component: ListaDicasComponent;
  let fixture: ComponentFixture<ListaDicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
