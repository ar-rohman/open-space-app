import api from '../../utils/api';
import { receiveTalkActionCreator } from '../talks/action';
import { receiveUsersActionCreator } from '../users/action';

export function asyncPopulateUsersAndTalks() {
  return async (dispatch) => {
    try {
      const users = await api.getAllUsers();
      const talks = await api.getAllTalks();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveTalkActionCreator(talks));
    } catch (error) {
      alert(error.message);
    }
  };
}
