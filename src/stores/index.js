import LoginStore from './LoginStore';
import RegisterStore from './RegisterStore';

class RootStore {
  constructor() {
    this.LoginStore = new LoginStore(this);
    this.RegisterStore = new RegisterStore(this);
  }
}

export default RootStore;
