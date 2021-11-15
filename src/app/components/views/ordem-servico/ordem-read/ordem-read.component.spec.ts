import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemReadComponent } from './ordem-read.component';

describe('OrdemReadComponent', () => {
  let component: OrdemReadComponent;
  let fixture: ComponentFixture<OrdemReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdemReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
