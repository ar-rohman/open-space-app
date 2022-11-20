import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import talkDetailReducer from './talkDetail/reducer';
import talksReducer from './talks/reducer';
import userReducer from './users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: userReducer,
    talks: talksReducer,
    talkDetail: talkDetailReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
