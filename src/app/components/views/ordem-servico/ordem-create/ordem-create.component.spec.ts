import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemCreateComponent } from './ordem-create.component';

describe('OrdemCreateComponent', () => {
  let component: OrdemCreateComponent;
  let fixture: ComponentFixture<OrdemCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdemCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
