import { ISingleUser} from '../../entities/users';
// przetrzymywanie wszystkich nazw akcji

export const GET_USERS = "GET_USERS";

// określić interface konkretnej akcji aby nie gubić danych
export interface IUserTypes {
    GET_USERS: {
        data: {
            usersList: ISingleUser[];
            currentUser: ISingleUser;
        }
    }
}