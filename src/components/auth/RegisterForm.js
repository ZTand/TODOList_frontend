import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import './RegisterForm.scss';

const RegisterForm = ({
  username,
  id,
  password,
  passwordConfirm,
  error,
  onChangeUsername,
  onChangeId,
  onChangePassword,
  onChangePasswordConfirm,
  register,
}) => {
  const inputChangeUsername = (e) => {
    onChangeUsername(e.target.value);
  };
  const inputChangeId = (e) => {
    onChangeId(e.target.value);
  };
  const inputChangePassword = (e) => {
    onChangePassword(e.target.value);
  };
  const inputChangePasswordConfirm = (e) => {
    onChangePasswordConfirm(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    register();
  };
  return (
    <div className="RegisterFormWrapper">
      <form onSubmit={onSubmit}>
        <input
          value={username}
          name="username"
          placeholder="닉네임"
          onChange={inputChangeUsername}
        />
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
        <input
          value={passwordConfirm}
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          type="password"
          onChange={inputChangePasswordConfirm}
        />
        <div style={{ color: 'red' }}>{error}</div>
        <button>회원가입</button>
      </form>
      <div className="Footer">
        <Link to="/login">로그인</Link>
      </div>
    </div>
  );
};

export default inject(({ RegisterStore }) => ({
  username: RegisterStore.username,
  id: RegisterStore.id,
  password: RegisterStore.password,
  passwordConfirm: RegisterStore.passwordConfirm,
  error: RegisterStore.error,
  onChangeUsername: RegisterStore.onChangeUsername,
  onChangeId: RegisterStore.onChangeId,
  onChangePassword: RegisterStore.onChangePassword,
  onChangePasswordConfirm: RegisterStore.onChangePasswordConfirm,
  register: RegisterStore.register,
}))(observer(RegisterForm));
