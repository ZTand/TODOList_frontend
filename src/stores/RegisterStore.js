import { observable, action } from 'mobx';
import { registerAPI } from '../lib/api/auth';

export default class LoginStore {
  @observable username = '';
  @observable id = '';
  @observable password = '';
  @observable passwordConfirm = '';
  @observable error = '';

  constructor(root) {
    this.root = root;
  }

  @action
  onChangeUsername = (username) => {
    this.username = username;
  };

  @action
  onChangeId = (id) => {
    this.id = id;
  };

  @action
  onChangePassword = (password) => {
    this.password = password;
  };

  @action
  onChangePasswordConfirm = (passwordConfirm) => {
    this.passwordConfirm = passwordConfirm;
  };

  @action
  onChangeError = (message) => {
    this.error = message;
  };

  @action
  register = () => {
    if (this.username === '') {
      this.error = '닉네임을 입력하세요.';
      return;
    }
    if (this.id === '') {
      this.error = '아이디를 입력하세요.';
      return;
    }
    if (this.password === '') {
      this.error = '비밀번호를 입력하세요.';
      return;
    }
    if (this.passwordConfirm === '') {
      this.error = '비밀번호 확인란을 입력하세요.';
      return;
    }
    if (this.password !== this.passwordConfirm) {
      this.error = '비밀번호가 일치하지 않습니다.';
      return;
    }
    registerAPI(this.username, this.id, this.password, this.onChangeError);
  };
}
