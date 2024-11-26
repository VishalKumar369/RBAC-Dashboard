// import{  
//     Edit, 
//     Trash2, 
//   } from 'lucide-react';
// const UserManagement = ({ users, roles, dispatch, onEdit }) => {
//     const handleUserDelete = (userId) => {
//       dispatch({ type: 'DELETE_USER', payload: userId });
//     };
  
//     return (
//       <div>
//         <table className="w-full">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="p-2 text-left">Username</th>
//               <th className="p-2 text-left">Email</th>
//               <th className="p-2 text-left">Role</th>
//               <th className="p-2 text-left">Status</th>
//               <th className="p-2 text-right">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map(user => (
//               <tr key={user.id} className="border-b hover:bg-gray-50">
//                 <td className="p-2 text-left">{user.username}</td>
//                 <td className="p-2 text-left">{user.email}</td>
//                 <td className="p-2 text-left">
//                   <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
//                     {user.role}
//                   </span>
//                 </td>
//                 <td className="p-2 text-left">
//                   <span className={`
//                     text-xs px-2 py-1 rounded
//                     ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
//                   `}>
//                     {user.status}
//                   </span>
//                 </td>
//                 <td className="p-2 text-right">
//                   <button 
//                     onClick={() => onEdit(user)}
//                     className="mr-2 text-blue-500 hover:text-blue-700"
//                   >
//                     <Edit size={18} />
//                   </button>
//                   <button 
//                     onClick={() => handleUserDelete(user.id)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <Trash2 size={18} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

//   export default UserManagement;

import { Edit, Trash2 } from "lucide-react";

const UserManagement = ({ users, roles, dispatch, onEdit }) => {
  const handleUserDelete = (userId) => {
    dispatch({ type: "DELETE_USER", payload: userId });
  };

  return (
    <div className="">
      {/* Desktop View */}
      <div className="hidden sm:block">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-left">Username</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Role</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="p-2 text-left">{user.username}</td>
                <td className="p-2 text-left">{user.email}</td>
                <td className="p-2 text-left">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {user.role}
                  </span>
                </td>
                <td className="p-2 text-left">
                  <span
                    className={`
                    text-xs px-2 py-1 rounded
                    ${user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                  `}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-2 text-right">
                  <button
                    onClick={() => onEdit(user)}
                    className="mr-2 text-blue-500 hover:text-blue-700"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => handleUserDelete(user.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden">
        {users.map((user) => (
          <div
            key={user.id}
            className="border rounded-lg mb-4 p-4 bg-white shadow-sm"
          >
            <div className="mb-2">
              <span className="font-bold text-gray-700">Username:</span>{" "}
              {user.username}
            </div>
            <div className="mb-2">
              <span className="font-bold text-gray-700">Email:</span>{" "}
              {user.email}
            </div>
            <div className="mb-2">
              <span className="font-bold text-gray-700">Role:</span>{" "}
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                {user.role}
              </span>
            </div>
            <div className="mb-2">
              <span className="font-bold text-gray-700">Status:</span>{" "}
              <span
                className={`text-xs px-2 py-1 rounded ${
                  user.status === "Active"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {user.status}
              </span>
            </div>
            <div className="flex justify-end mt-2">
              <button
                onClick={() => onEdit(user)}
                className="mr-4 text-blue-500 hover:text-blue-700"
              >
                <Edit size={18} />
              </button>
              <button
                onClick={() => handleUserDelete(user.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;


