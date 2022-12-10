import React from 'react';

function ProfileBox(props) {
  return (
    <div className="profileBox_hidden">
      <div className="profileBox_triangle" />
      <div className="profileBox_content modal">
        <div className="profile modal">
          <img className="modal" src="./images/hoonlee/user.png" alt="" />
          <div className="text modal">프로필</div>
        </div>
        <div className="saved modal">
          <img className="modal" src="./images/hoonlee/save.png" alt="" />
          <div className="text modal">저장됨</div>
        </div>
        <div className="setting modal">
          <img className="modal" src="./images/hoonlee/setting.png" alt="" />
          <div className="text modal">설정</div>
        </div>
        <div className="container modal">
          <div className="logout modal">로그아웃</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBox;
