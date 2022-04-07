import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-dot-status',
  templateUrl: './dot-status.component.html',
  styleUrls: ['./dot-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DotStatusComponent {
  @Input() status: 'Alive' | 'Dead' | 'none' = 'none';

  private classStatus = {
    Alive: 'dot-status--alive',
    Dead: 'dot-status--dead',
    unknow: 'dot-status--unknow',
  };

  get cssClassForStatus(): string {
    if (Object.prototype.hasOwnProperty.call(this.classStatus, this.status))
      return this.classStatus[this.status];
    return this.classStatus.unknow;
  }
}
