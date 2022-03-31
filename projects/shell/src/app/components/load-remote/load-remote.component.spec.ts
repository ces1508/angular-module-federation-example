import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadRemoteComponent } from './load-remote.component';

describe('LoadRemoteComponent', () => {
  let component: LoadRemoteComponent;
  let fixture: ComponentFixture<LoadRemoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadRemoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadRemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
