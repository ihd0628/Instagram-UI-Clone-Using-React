import React, { useState, useRef } from 'react';
import Nav from './components/Nav/Nav';
import SearchBox from './components/SearchBox';
import Feeds from './components/Feeds/Feeds';
import MainRight from './components/MainRight/MainRight';
import './Main.scss';

function MainHoon() {
  const [comments, setComments] = useState([]);
  const commentInputReference = useRef();
  const currentUser = 'noon_noo_nan_na';

  const commentSubmitHandler = event => {
    event.preventDefault();
    const comment = {};

    comment.User = currentUser;
    comment.Text = commentInputReference.current.value;
    comment.Like = false;

    if (comment.Text.trim() === '') {
      alert('댓글을 입력하세요.');
    } else {
      setComments([...comments, comment]);
    }
    commentInputReference.current.value = '';
  };

  const deleteBtnHandelr = event => {
    const selectedCommentId = event.nativeEvent.path[2].id;
    comments.splice(selectedCommentId, 1);
    setComments([...comments]);
  };

  const likeBtnHandler = event => {
    const selectedCommentId = event.nativeEvent.path[2].id;
    comments[selectedCommentId].Like = !comments[selectedCommentId].Like;

    setComments([...comments]);
  };

  return (
    <>
      <Nav />
      <main>
        <SearchBox />
        <Feeds
          comments={comments}
          commentSubmitHandler={commentSubmitHandler}
          commentInputReference={commentInputReference}
          deleteBtnHandelr={deleteBtnHandelr}
          likeBtnHandler={likeBtnHandler}
        />
        <MainRight />
      </main>
    </>
  );
}

export default MainHoon;
