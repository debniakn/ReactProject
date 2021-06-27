import { ISinglePhoto} from '../entities/photos';
import * as actionTypes from '../actions/actionTypes/photosTypes';

export interface IPhotosReducer {
    photosList: ISinglePhoto[];
}

const defaultState = (): IPhotosReducer => ({
    photosList: []
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_PHOTOS: {
            const payload: actionTypes.IPhotosTypes['GET_PHOTOS'] = action;
            return {
                ...state,
                photosList: payload.photosList,
            }
        }
        default: {
            return state;
        }
    }
}