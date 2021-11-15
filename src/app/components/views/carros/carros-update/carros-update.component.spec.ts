import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosUpdateComponent } from './carros-update.component';

describe('CarrosUpdateComponent', () => {
  let component: CarrosUpdateComponent;
  let fixture: ComponentFixture<CarrosUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrosUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
