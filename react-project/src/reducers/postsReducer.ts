import { IPosts} from '../entities/posts';
import * as actionTypes from '../actions/actionTypes/postsTypes';

export interface IPostsReducer {
    postsList: IPosts[];
}

const defaultState = (): IPostsReducer => ({
    postsList: [],
});

// stworzenie switcha

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_POSTS: {
            const payload: actionTypes.IPostsTypes['GET_POSTS'] = action;
            return {
                ...state,
                postsList: payload.postsList,
            }
        }
        default: {
            return state;
        }
    }
}