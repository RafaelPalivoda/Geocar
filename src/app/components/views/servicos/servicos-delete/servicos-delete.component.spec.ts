import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosDeleteComponent } from './servicos-delete.component';

describe('ServicosDeleteComponent', () => {
  let component: ServicosDeleteComponent;
  let fixture: ComponentFixture<ServicosDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicosDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
