import { Dispatch } from 'redux';
import * as actionTypes from '../actionTypes/userTypes';
import { ISingleUser } from '../../entities/users';
// stworzenie funcji która będzie pobierac dane z API
// middleware jest po to any można było użyć zapisu poniżej ( funcja zwraca funcję) pomiędzy rozłożeniem akcji a..
export const getUsers = (): Promise<ISingleUser[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) 
        .then((usersList: ISingleUser[]) => { 
            dispatch({
                type: actionTypes.GET_USERS, 
                data: {
                    usersList,
                    currentUser: usersList[1]
                }
            })
        })
}) as any;