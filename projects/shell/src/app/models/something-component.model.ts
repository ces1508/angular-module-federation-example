export interface ISomethingComponentInput {
  data: {
    message: string;
    token: string;
  };
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
