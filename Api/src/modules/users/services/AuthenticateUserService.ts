import { inject, injectable } from 'tsyringe';
import { sign } from 'jsonwebtoken';

import decrypt from '../../../utils/decrypt';
import auth from '../../../config/auth';
import UserRepository from '../typeorm/repositories/UserRepository';
import User from '../typeorm/entities/User';

interface IRequestDTO {
  email: string;
  password: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository,
  ) {}

  public async execute({
    email,
    password,
  }: IRequestDTO): Promise<{ user: User; token: string }> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('Incorret email password combination.');
    }

    const passwordMatched = decrypt({
      oldHash: password,
      newHash: user.password,
    });

    if (!passwordMatched) {
      throw new Error('Incorret email password combination.');
    }

    const { expiresIn, secret } = auth.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return { user, token };
  }
}

export default AuthenticateUserService;
