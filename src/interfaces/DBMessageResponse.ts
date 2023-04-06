import {User} from './User';
import {Cat} from './Cat';

export default interface MessageResponse {
  message: string;
  result: User | Cat;
}
