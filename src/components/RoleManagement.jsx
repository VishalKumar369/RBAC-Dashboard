import { Edit, Trash2 } from "lucide-react";
const RoleManagement = ({ roles, permissions, dispatch, onEdit }) => {
  const handleRoleDelete = (roleId) => {
    dispatch({ type: "DELETE_ROLE", payload: roleId });
  };

  return (
    <div>
      <table className="w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">Role Name</th>
            <th className="p-2 text-left">Permissions</th>
            <th className="p-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id} className="border-b hover:bg-gray-50">
              <td className="p-2 text-left">{role.name}</td>
              <td className="p-2">
                <div className="flex flex-wrap gap-1">
                  {role.permissions &&
                    role.permissions.map((perm) => (
                      <span
                        key={perm}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                      >
                        {perm}
                      </span>
                    ))}
                </div>
              </td>
              <td className="p-2 text-right">
                <button
                  onClick={() => onEdit(role)}
                  className="mr-2 text-blue-500 hover:text-blue-700"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => handleRoleDelete(role.id)}
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
  );
};

export default RoleManagement;
