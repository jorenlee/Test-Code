import { Observer } from '../JS/Observer.js';
import { Loading } from '../JS/Loading.js';

class LoadingObserver extends Observer {
  constructor() {
    super();
    this.loading = new Loading();
  }

  update(message) {
    if (message === "Communication started") {
      this.loading.showLoading();
    } else if (message === "Communication finished") {
      this.loading.hideLoading();
    }
  }
}

export { LoadingObserver };