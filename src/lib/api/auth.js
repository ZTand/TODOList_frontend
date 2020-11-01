import client from './client';

export const loginAPI = (id, password, setErr) => {
  client
    .post('/login', { id, password })
    .then((response) => {
      if (response.status === 200) {
        setErr('로그인 성공!');
      }
    })
    .catch((error) => {
      const errorCode = error.response.status;
      if (errorCode === 401) {
        setErr('아이디 또는 비밀번호가 틀립니다.');
      }
    });
};

export const registerAPI = (username, id, password, setErr) =>
  client
    .post('/register', { username, id, password })
    .then((response) => {
      if (response.status === 200) {
        setErr('회원가입 성공!');
      }
    })
    .catch((error) => {
      const errorCode = error.response.status;
      if (errorCode === 400) {
        setErr('아이디는 4~16자 사이의 알파벳, 숫자만 포함할 수 있습니다.');
      }
      if (errorCode === 409) {
        setErr('이미 존재하는 닉네임 / 아이디입니다.');
      }
    });
