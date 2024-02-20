import { UserModel } from 'src/app/auth/models/user.model';

export class GRepository {
  id!: string;
  repositoryName!: string;
  repositoryDescription!: string;
  visibility!: string;
  user!: UserModel;
}
