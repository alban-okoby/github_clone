export class AuthModel {
  email!: string;
  password!: string;
}

export class RegisterModel extends AuthModel {
  matchingPassword!: string;
  displayName!: string;
}
