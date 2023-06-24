import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMCInfantilComponent } from './imc-infantil.component';

describe('IMCInfantilComponent', () => {
  let component: IMCInfantilComponent;
  let fixture: ComponentFixture<IMCInfantilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IMCInfantilComponent]
    });
    fixture = TestBed.createComponent(IMCInfantilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
