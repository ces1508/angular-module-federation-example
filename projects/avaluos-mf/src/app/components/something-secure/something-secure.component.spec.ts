import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomethingSecureComponent } from './something-secure.component';

describe('SomethingSecureComponent', () => {
  let component: SomethingSecureComponent;
  let fixture: ComponentFixture<SomethingSecureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomethingSecureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomethingSecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
