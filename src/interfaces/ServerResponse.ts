import {User} from './User';
import {Cat} from './Cat';

export default interface ServerResponse extends Record<string, unknown> {
  data: {
    users: User[];
    cats: Cat[];
    userById: User;
    catById: Cat;
    catsByUser: Cat[];
    addUser: User;
    addCat: Cat;
    updateUser: User;
    updateCat: Cat;
    deleteUser: User;
    deleteCat: Cat;
  };
}
