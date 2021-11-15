import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosCreateComponent } from './carros-create.component';

describe('CarrosCreateComponent', () => {
  let component: CarrosCreateComponent;
  let fixture: ComponentFixture<CarrosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrosCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
