import { Dispatch } from 'redux';
import * as actionTypes from '../actionTypes/commentsTypes';
import { IComments } from '../../entities/comments';


export const getComments = (): Promise<IComments[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((commentsList: IComments[]) => {
            dispatch({
                type: actionTypes.GET_COMMENTS,
                commentsList,              
            })
        })
}) as any;