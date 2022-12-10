import React from 'react';
import Btn from './components/Btn';

function LoginForm({
  goToMain,
  loginRequest,
  saveUserInput,
  userInput,
  isDisable,
}) {
  return (
    <form className="inputBox">
      <input
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={saveUserInput}
        value={userInput.email}
        name="email"
      />
      <input
        type="password"
        placeholder="비밀번호"
        onChange={saveUserInput}
        value={userInput.password}
        name="password"
      />
      <Btn
        goToMain={goToMain}
        isDisable={isDisable}
        loginRequest={loginRequest}
      />
    </form>
  );
}

export default LoginForm;
