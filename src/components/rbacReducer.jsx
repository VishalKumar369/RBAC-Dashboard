import { LocalStorageUtil } from "@/utils/LocalStorageUtil";
// Initial state and reducer 
const initialState = {
    users: LocalStorageUtil.getItem('rbac-users', []),
    roles: LocalStorageUtil.getItem('rbac-roles', []),
    permissions: LocalStorageUtil.getItem('rbac-permissions', [
      { id: 1, name: 'read', description: 'View information' },
      { id: 2, name: 'write', description: 'Create/Modify information' },
      { id: 3, name: 'delete', description: 'Remove information' },
      { id: 4, name: 'admin', description: 'Full system access' }
    ])
  };
  
  function rbacReducer(state, action) {
    let newState;
    switch (action.type) {
      case 'ADD_USER':
        newState = { 
          ...state, 
          users: [...state.users, { ...action.payload, id: Date.now() }] 
        };
        LocalStorageUtil.setItem('rbac-users', newState.users);
        return newState;
      
      case 'UPDATE_USER':
        newState = {
          ...state,
          users: state.users.map(user => 
            user.id === action.payload.id ? action.payload : user
          )
        };
        LocalStorageUtil.setItem('rbac-users', newState.users);
        return newState;
      
      case 'DELETE_USER':
        newState = {
          ...state,
          users: state.users.filter(user => user.id !== action.payload)
        };
        LocalStorageUtil.setItem('rbac-users', newState.users);
        return newState;
      
      case 'ADD_ROLE':
        newState = { 
          ...state, 
          roles: [...state.roles, { ...action.payload, id: Date.now() }] 
        };
        LocalStorageUtil.setItem('rbac-roles', newState.roles);
        return newState;
      
      case 'UPDATE_ROLE':
        newState = {
          ...state,
          roles: state.roles.map(role => 
            role.id === action.payload.id ? action.payload : role
          )
        };
        LocalStorageUtil.setItem('rbac-roles', newState.roles);
        return newState;
      
      case 'DELETE_ROLE':
        newState = {
          ...state,
          roles: state.roles.filter(role => role.id !== action.payload)
        };
        LocalStorageUtil.setItem('rbac-roles', newState.roles);
        return newState;
      
      case 'ADD_PERMISSION':
        newState = { 
          ...state, 
          permissions: [...state.permissions, { ...action.payload, id: Date.now() }] 
        };
        LocalStorageUtil.setItem('rbac-permissions', newState.permissions);
        return newState;
      
      case 'UPDATE_PERMISSION':
        newState = {
          ...state,
          permissions: state.permissions.map(perm => 
            perm.id === action.payload.id ? action.payload : perm
          )
        };
        LocalStorageUtil.setItem('rbac-permissions', newState.permissions);
        return newState;
      
      default:
        return state;
    }
  }

  export { rbacReducer,initialState};