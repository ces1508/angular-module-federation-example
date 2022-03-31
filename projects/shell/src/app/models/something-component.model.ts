import { Observable } from 'rxjs';

export interface ISomethingComponentInput {
  data: string;
}

export type SomethingComponentEventsNames = 'onHandleClick' | 'onHandleClick2';

interface ISomethingComponentOuput {
  onHandleClick: {
    subscribe: Function;
  };
}

export interface ISomethingComponent
  extends ISomethingComponentInput,
    ISomethingComponentOuput {}
