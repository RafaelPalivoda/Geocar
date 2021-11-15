import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosDeleteComponent } from './carros-delete.component';

describe('CarrosDeleteComponent', () => {
  let component: CarrosDeleteComponent;
  let fixture: ComponentFixture<CarrosDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrosDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
