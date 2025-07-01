import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Btn3Component } from './btn-3.component';

describe('Btn3Component', () => {
  let component: Btn3Component;
  let fixture: ComponentFixture<Btn3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Btn3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Btn3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
