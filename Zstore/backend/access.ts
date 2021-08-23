// At it's simplest, the access control returns a yes or no value depending on the users session

import { permissionsList } from './schemas/fields';
import { ListAccessArgs } from './types';

export const isSignedIn = ({ session }: ListAccessArgs) => !!session;

const generatedPermissions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission];
    },
  ])
);

// Permissions check if someone meets a criteria - yes or no.
export const permissions = {
  ...generatedPermissions,

  // Here we can add additional -yes or no- function
  isAwesome({ session }: ListAccessArgs): boolean {
    return session?.data.name.includes('Amr');
  },
};

// Rule based function
// Rules can return a boolean or a filter which limits which products they can CRUD.
export const rules = {
  canManageProducts({ session }: ListAccessArgs) {
    // Check if signedin or not (For error handling)
    if (!isSignedIn({ session })) {
      return false;
    }
    // 1.Do they have the permission of canManageProducts
    if (permissions.canManageProducts({ session })) {
      return true;
    }
    // 2.If not, do they own this item?
    return { user: { id: session.itemId } };
  },
  canReadProducts({ session }: ListAccessArgs) {
    // Check if signedin or not (For error handling)
    if (!isSignedIn({ session })) {
      return false;
    }
    if (permissions.canManageProducts({ session })) {
      return true;
    }
    // If not, They should only see available products(based on the status field)
    return { status: 'AVAILABLE' };
  },
  canOrder({ session }: ListAccessArgs) {
    // Check if signedin or not (For error handling)
    if (!isSignedIn({ session })) {
      return false;
    }
    // 1.Do they have the permission of canManageCart
    if (permissions.canManageCart({ session })) {
      return true;
    }
    // 2.If not, do they own this item?
    return { user: { id: session.itemId } };
  },
  canManageOrderItems({ session }: ListAccessArgs) {
    // Check if signedin or not (For error handling)
    if (!isSignedIn({ session })) {
      return false;
    }
    // 1.Do they have the permission of canManageCart
    if (permissions.canManageCart({ session })) {
      return true;
    }
    // 2.If not, do they own this item?
    return { order: { user: { id: session.itemId } } };
  },
  canManageUsers({ session }: ListAccessArgs) {
    // Check if signedin or not (For error handling)
    if (!isSignedIn({ session })) {
      return false;
    }
    // 1.Do they have the permission of canManageUsers
    if (permissions.canManageUsers({ session })) {
      return true;
    }
    // 2.If not, they may only update themselves
    return { id: session.itemId };
  },
};
