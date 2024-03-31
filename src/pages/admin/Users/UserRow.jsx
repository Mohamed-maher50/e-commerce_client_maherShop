import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { FormInput } from "../../../components/utility/Inputs";
import { useRef } from "react";
const UserRow = ({
  _id,
  name,
  email,
  active,
  deleteRunning,
  handleDeleteUser,
  role,
  phone,
  handleEditUser,
  editRunning,
}) => {
  const newPhone = useRef();
  const newEmail = useRef();
  const newRole = useRef();
  const newName = useRef();

  return (
    <>
      {/* edit modal */}
      <input type="checkbox" id={`my_modal_${_id}`} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="grid  gap-2">
            <FormInput
              status={false}
              placeholder="phone"
              defaultValue={phone}
              ref={newPhone}
            />
            <FormInput
              status={false}
              placeholder="email"
              defaultValue={email}
              ref={newEmail}
            />
            <FormInput
              status={false}
              placeholder="role"
              defaultValue={role}
              ref={newRole}
            />
            <FormInput
              status={false}
              placeholder="name"
              defaultValue={name}
              ref={newName}
            />
          </div>
          <div className="modal-action">
            <button
              disabled={editRunning.loading}
              onClick={() =>
                handleEditUser({
                  _id,
                  phone: newPhone.current.value,
                  email: newEmail.current.value,
                  name: newName.current.value,
                  role: newRole.current.value,
                })
              }
            >
              <label
                className="btn btn-success text-white"
                htmlFor={`my_modal_${_id}`}
              >
                submit
              </label>
            </button>
            <label htmlFor={`my_modal_${_id}`} className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
      <tr>
        <td>
          <div className="flex items-center gap-3">{_id}</div>
        </td>
        <td>
          <div className="flex items-center gap-3">{name}</div>
        </td>
        <td className="min-w-[10rem]">
          <div className="min-w-36">{email}</div>
        </td>
        <td>
          {active ? (
            <span className="badge badge-success">active</span>
          ) : (
            <span className="badge badge-warning">no active</span>
          )}
        </td>
        <th>{role}</th>
        <td className="flex gap-2 text-xl">
          <button
            disabled={deleteRunning.loading}
            className=" btn-square btn btn-sm"
            onClick={() => handleDeleteUser(_id)}
          >
            {deleteRunning.loading && deleteRunning.id == _id ? (
              <span className="loading  bg-primary loading-spinner"></span>
            ) : (
              <MdDelete className="text-red-400 cursor-pointer" />
            )}
          </button>
          <button disabled={deleteRunning.loading}>
            <label
              htmlFor={`my_modal_${_id}`}
              className=" btn-square btn btn-sm"
            >
              {editRunning.loading && editRunning.id === _id ? (
                <span className="loading  bg-primary loading-spinner"></span>
              ) : (
                <MdEdit className="text-green-400 cursor-pointer" />
              )}
            </label>
          </button>
        </td>
      </tr>
    </>
  );
};

export default UserRow;
