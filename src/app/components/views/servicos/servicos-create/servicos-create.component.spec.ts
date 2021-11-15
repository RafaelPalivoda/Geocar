import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosCreateComponent } from './servicos-create.component';

describe('ServicosCreateComponent', () => {
  let component: ServicosCreateComponent;
  let fixture: ComponentFixture<ServicosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicosCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
