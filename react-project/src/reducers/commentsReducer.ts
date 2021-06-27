import { IComments} from '../entities/comments';
import * as actionTypes from '../actions/actionTypes/commentsTypes';

export interface ICommentsReducer {
    commentsList: IComments[];
}

const defaultState = (): ICommentsReducer => ({
    commentsList: [],
});
// stworzenie switcha

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_COMMENTS: {
            const payload: actionTypes.ICommentsTypes['GET_COMMENTS'] = action;
            return {
                ...state,
                commentsList: payload.commentsList,
            }
        }
        default: {
            return state;
        }
    }
}