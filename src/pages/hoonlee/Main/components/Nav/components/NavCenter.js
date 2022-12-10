import React from 'react';

function NavCenter(props) {
  return (
    <div className="navCenter">
      <img
        className="searchImg"
        src="./images/hoonlee/search.png"
        alt="돋보기"
      />
      <input className="navInput" type="text" placeholder="검색" />
    </div>
  );
}

export default NavCenter;
