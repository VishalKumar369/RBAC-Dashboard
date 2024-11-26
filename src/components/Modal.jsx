import { useState } from "react";
import { Save, X } from "lucide-react";

const Modal = ({
  activeTab,
  currentEdit,
  dispatch,
  onClose,
  roles,
  permissions,
}) => {
  const [formData, setFormData] = useState(
    currentEdit ||
      (activeTab === "users"
        ? { username: "", email: "", role: "", status: "Active" }
        : activeTab === "roles"
        ? { name: "", permissions: [] }
        : { name: "", description: "" })
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (activeTab === "roles" && name === "permissions") {
      const currentPermissions = formData.permissions || [];
      setFormData((prev) => ({
        ...prev,
        permissions: checked
          ? [...currentPermissions, value]
          : currentPermissions.filter((p) => p !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const actionType = currentEdit
      ? `UPDATE_${activeTab.toUpperCase().slice(0, -1)}`
      : `ADD_${activeTab.toUpperCase().slice(0, -1)}`;

    dispatch({
      type: actionType,
      payload: { ...formData, id: currentEdit?.id || Date.now() },
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white  m-4 p-4 md:p6 md:m-0 w-96 " style={{borderRadius:"8px"}}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {currentEdit
              ? `Edit ${activeTab.slice(0, -1)}`
              : `Add ${activeTab.slice(0, -1)}`}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {activeTab === "permissions" && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Permission Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border p-2 mb-2 rounded"
              />
              <input
                type="text"
                name="description"
                placeholder="Permission Description"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full border p-2 mb-2 rounded"
              />
            </>
          )}

          {activeTab === "users" && (
            <>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full border p-2 mb-2 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border p-2 mb-2 rounded"
              />
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border p-2 mb-2 rounded"
                required
              >
                <option value="">Select Role</option>
                {roles.map((role) => (
                  <option key={role.id} value={role.name}>
                    {role.name}
                  </option>
                ))}
              </select>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border p-2 mb-2 rounded"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </>
          )}

          {activeTab === "roles" && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Role Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border p-2 mb-2 rounded"
              />
              <div className="mb-2">
                <p className="font-semibold mb-1">Permissions:</p>
                {permissions.map((perm) => (
                  <div key={perm.id} className="flex items-center mb-1">
                    <input
                      type="checkbox"
                      name="permissions"
                      value={perm.name}
                      checked={(formData.permissions || []).includes(perm.name)}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label>{perm.name}</label>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
            >
              <Save size={18} className="mr-2" />
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
