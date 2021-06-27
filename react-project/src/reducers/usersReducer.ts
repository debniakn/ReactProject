import { ISingleUser} from '../entities/users';
import * as actionTypes from '../actions/actionTypes/userTypes';

export interface IUsersReducer {
    usersList: ISingleUser[];
    currentUser: ISingleUser;
}

const defaultState = (): IUsersReducer => ({
    usersList: [],
    currentUser: undefined
});

// stworzenie switcha

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_USERS: {
            const payload: actionTypes.IUserTypes['GET_USERS'] = action;
            return {
                ...state,
                usersList: payload.data.usersList,
                currentUser: payload.data.currentUser
            }
        }
        default: {
            return state;
        }
    }
}