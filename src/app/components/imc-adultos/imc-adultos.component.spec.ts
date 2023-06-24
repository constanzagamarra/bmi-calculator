import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMCAdultosComponent } from './imc-adultos.component';

describe('IMCAdultosComponent', () => {
  let component: IMCAdultosComponent;
  let fixture: ComponentFixture<IMCAdultosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IMCAdultosComponent]
    });
    fixture = TestBed.createComponent(IMCAdultosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
