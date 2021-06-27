import { ISinglePhoto } from '../../entities/photos';

export const GET_PHOTOS = "GET_PHOTOS";

export interface IPhotosTypes {
    GET_PHOTOS: {
        photosList: ISinglePhoto;
    }
}