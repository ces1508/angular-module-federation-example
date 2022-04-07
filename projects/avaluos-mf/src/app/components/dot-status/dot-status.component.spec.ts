import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotStatusComponent } from './dot-status.component';

describe('DotStatusComponent', () => {
  let component: DotStatusComponent;
  let fixture: ComponentFixture<DotStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
