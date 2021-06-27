import { Dispatch } from 'redux';
import * as actionTypes from '../actionTypes/photosTypes';
import { ISinglePhoto } from '../../entities/photos';


export const getPhotos = (): Promise<ISinglePhoto> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then((photosList) => {
            dispatch({
                type: actionTypes.GET_PHOTOS,
                photosList,
               
            })
        })
}) as any;