import { User } from './Types';
import HttpClient from './HttpClient';

class Api extends HttpClient {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  public signIn = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    return this.instance.post<
      { user: User; token: string },
      { user: User; token: string }
    >('sessions', {
      email,
      password,
    });
  };
}

const ApiClient = new Api();

export default ApiClient;
