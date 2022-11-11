const SET_BOOKMARK = 'bookmark/SET_BOOKMARK';
const REMOVE_BOOKMARK = 'bookmark/REMOVE_BOOKMARK';

export const setBookmark = (id) => ({
  type: SET_BOOKMARK,
  id,
});

export const removeBookmark = (id) => ({
  type: REMOVE_BOOKMARK,
  id,
});

const initialState = {
  bookmarkList: [],
};

export default function bookmark(state = initialState, action) {
  switch (action.type) {
    case SET_BOOKMARK:
      return {
        bookmarkList: [...new Set(state.bookmarkList.concat(action.id))],
      };
    case REMOVE_BOOKMARK:
      return {
        bookmarkList: state.bookmarkList.filter((id) => id !== action.id),
      };
    default:
      return state;
  }
}
