import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Bookmark from '../pages/JobList/Recruit';
import { setBookmark, removeBookmark } from '../modules/Bookmark';

const BookmarkContainer = () => {
  const { bookmarkList } = useSelector((state) => ({
    bookmarkList: state.bookmarkList,
  }));
};

// const dispatch = useDispatch();

// const setBookmark = () => dispatch(setBookmark());
// const removeBookmark = () => dispatch(removeBookmark());

export default BookmarkContainer;
