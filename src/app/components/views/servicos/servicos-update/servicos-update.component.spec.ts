import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosUpdateComponent } from './servicos-update.component';

describe('ServicosUpdateComponent', () => {
  let component: ServicosUpdateComponent;
  let fixture: ComponentFixture<ServicosUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicosUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
