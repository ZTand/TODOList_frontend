import { observable, action } from 'mobx';
import { loginAPI } from '../lib/api/auth';

export default class LoginStore {
  @observable id = '';
  @observable password = '';
  @observable error = '';

  constructor(root) {
    this.root = root;
  }

  @action
  onChangeId = (id) => {
    this.id = id;
  };

  @action
  onChangePassword = (password) => {
    this.password = password;
  };

  @action
  onChangeError = (message) => {
    this.error = message;
  };

  @action
  login = () => {
    if (this.id === '') {
      this.error = '아이디를 입력하세요.';
      return;
    }
    if (this.password === '') {
      this.error = '비밀번호를 입력하세요.';
      return;
    }
    loginAPI(this.id, this.password, this.onChangeError);
  };
}
