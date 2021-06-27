import { IPosts } from '../../entities/posts';

export const GET_POSTS = "GET_POSTS";

export interface IPostsTypes {
    GET_POSTS: {
        postsList: IPosts;
    }
}