export enum UserRoles {
  ROLE_USER = 'ROLE_USER',
  ROLE_ADMIN = 'ROLE_ADMIN',
}

export const RolePriorities: Record<UserRoles, number> = {
  [UserRoles.ROLE_ADMIN]: 0,
  [UserRoles.ROLE_USER]: 1,
};
