import { Edit, Trash2 } from "lucide-react";

const PermissionManagement = ({ permissions, dispatch, onEdit }) => {
  const handlePermissionDelete = (permissionId) => {
    dispatch({ type: "DELETE_PERMISSION", payload: permissionId });
  };

  return (
    <div>
      <table className="w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">Permission Name</th>
            <th className="p-2 text-left">Description</th>
            <th className="p-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr key={permission.id} className="border-b hover:bg-gray-50">
              <td className="p-2 text-left">{permission.name}</td>
              <td className="p-2 text-left">{permission.description}</td>
              <td className="p-2 text-right">
                <button
                  onClick={() => onEdit(permission)}
                  className="mr-2 text-blue-500 hover:text-blue-700"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => handlePermissionDelete(permission.id)}
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

export default PermissionManagement;
