import { AuthModel } from './auth.model';

export class UserModel extends AuthModel {
  id!: number;
  roles: any[] = [];
  occupation: string = '';
  companyName: string = '';
  phone: string = '';
  username!: string;
  firstname: string = '';
  lastname: string = '';
  displayName: string = '';
  website: string = '';
  imageUrl : string = '';

  // account information
  language: string = '';
  timeZone: string = '';
}
