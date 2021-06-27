import { Dispatch } from 'redux';
import * as actionTypes from '../actionTypes/postsTypes';
import { IPosts } from '../../entities/posts';


export const getPosts = (): Promise<IPosts[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((postsList: IPosts[]) => {
            dispatch({
                type: actionTypes.GET_POSTS,
                postsList,              
            })
        })
}) as any;