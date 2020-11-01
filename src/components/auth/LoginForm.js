import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import './LoginForm.scss';
import { loginAPI } from '../../lib/api/auth';

const LoginForm = ({
  id,
  password,
  error,
  onChangeId,
  onChangePassword,
  login,
}) => {
  const inputChangeId = (e) => {
    onChangeId(e.target.value);
  };
  const inputChangePassword = (e) => {
    onChangePassword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <div className="LoginFormWrapper">
      <form onSubmit={onSubmit}>
        <input
          value={id}
          name="id"
          placeholder="아이디"
          onChange={inputChangeId}
        />
        <input
          value={password}
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={inputChangePassword}
        />
        <div style={{ color: 'red' }}>{error}</div>
        <button>로그인</button>
      </form>
      <div className="Footer">
        <Link to="/register">회원가입</Link>
      </div>
    </div>
  );
};

export default inject(({ LoginStore }) => ({
  id: LoginStore.id,
  password: LoginStore.password,
  error: LoginStore.error,
  onChangeId: LoginStore.onChangeId,
  onChangePassword: LoginStore.onChangePassword,
  login: LoginStore.login,
}))(observer(LoginForm));
