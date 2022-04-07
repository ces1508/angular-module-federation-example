import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from 'protractor';
import { SomethingComponent } from '../../components/something/something.component';
import { ValidateTokenDirective } from './validate-token.directive';

describe('ValidateTokenDirective', () => {
  let fixture: ComponentFixture<SomethingComponent>;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [SomethingComponent, ValidateTokenDirective],
    }).createComponent(SomethingComponent);

    fixture.detectChanges();
  });

  it('should component to be delete when dont pass a token ', () => {
    let el = fixture.debugElement.query(By.directive(ValidateTokenDirective));

    console.log(
      fixture.debugElement.query(By.directive(ValidateTokenDirective))
    );
  });
});
