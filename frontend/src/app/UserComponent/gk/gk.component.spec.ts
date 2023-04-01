import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GkComponent } from './gk.component';

describe('GkComponent', () => {
  let component: GkComponent;
  let fixture: ComponentFixture<GkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
