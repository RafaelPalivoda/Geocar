import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosReadComponent } from './carros-read.component';

describe('CarrosReadComponent', () => {
  let component: CarrosReadComponent;
  let fixture: ComponentFixture<CarrosReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrosReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
