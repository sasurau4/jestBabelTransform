import { observable, action, configure } from 'mobx';

export class LoadingStore {
  @observable
  isLoading = false;

  // Is this more useful toggleLoading?
  // Separate them initially.
  @action
  start = () => {
    this.isLoading = true;
  };

  @action
  stop = () => {
    this.isLoading = false;
  };
}
