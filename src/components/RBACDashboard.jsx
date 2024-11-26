import React, { useState,useReducer } from 'react';
import { 
  Shield, 
  PlusCircle,  
} from 'lucide-react';

import Modal from './Modal';
import PermissionManagement from './PermissionManagement';
import RoleManagement from './RoleManagement';
import UserManagement from './UserManagement';
import { rbacReducer,initialState } from './rbacReducer';

const RBACManagement = () => {
  const [state, dispatch] = useReducer(rbacReducer, initialState);
  const [activeTab, setActiveTab] = useState('users');
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEdit, setCurrentEdit] = useState(null);

  // Filtered data based on search
  const filteredUsers = state.users.filter(user => 
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredRoles = state.roles.filter(role => 
    role.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPermissions = state.permissions.filter(perm => 
    perm.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Modal management
  const openModal = (item = null) => {
    setCurrentEdit(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentEdit(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 md:p-4 ">
      <div className="container mx-auto bg-white min-h-screen md:min-h-fit md:shadow-lg md:p-8 rounded-lg">
        {/* Header */}
        <div className="flex flex-col justify-between md:flex md:flex-row items-center py-4 border-b">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <Shield className="mr-2" /> RBAC Management
          </h1>
          <div className="flex space-x-2 pt-4 md:p-4  w-full md:w-fit">
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded px-2 py-1 w-full md:w-fit"
            />
            <button 
              onClick={() => openModal()}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              <PlusCircle size={20} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          {['Users', 'Roles', 'Permissions'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`px-4 py-2 ${
                activeTab === tab.toLowerCase() 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="py-4">
          {activeTab === 'users' && (
            <UserManagement 
              users={filteredUsers} 
              roles={state.roles} 
              dispatch={dispatch}
              onEdit={openModal}
            />
          )}
          {activeTab === 'roles' && (
            <RoleManagement 
              roles={filteredRoles} 
              permissions={state.permissions}
              dispatch={dispatch}
              onEdit={openModal}
            />
          )}
          {activeTab === 'permissions' && (
            <PermissionManagement 
              permissions={filteredPermissions}
              dispatch={dispatch}
              onEdit={openModal}
            />
          )}
        </div>

        {/* Modal for Add/Edit */}
        {isModalOpen && (
          <Modal 
            activeTab={activeTab} 
            currentEdit={currentEdit} 
            dispatch={dispatch}
            onClose={closeModal}
            roles={state.roles}
            permissions={state.permissions}
          />
        )}
      </div>
    </div>
  );
};

export default RBACManagement;