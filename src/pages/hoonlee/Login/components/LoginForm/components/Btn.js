import React from 'react';

function Btn({ isDisable, loginRequest }) {
  // console.log('isLoginBtnDisable : ', isLoginBtnDisable);

  const BtnClassName = isDisable === false ? 'buttonDisable' : 'buttonAble';
  return (
    <button
      onClick={loginRequest}
      disabled={!isDisable}
      className={BtnClassName}
    >
      로그인
    </button>
  );
}

export default Btn;
