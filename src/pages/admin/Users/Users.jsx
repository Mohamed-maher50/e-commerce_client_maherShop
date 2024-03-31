import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../reducers/Users/User_thunk";
import { useState } from "react";

import { useRef } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import SelectInput from "../../../components/utility/SelectInput";
import useUsers_hook from "../../../hooks/users/useUsers_hook";
import UserRow from "./UserRow";
const options = [
  {
    label: 4,
    value: 4,
  },
  {
    label: 10,
    value: 10,
  },
  {
    label: 20,
    value: 20,
  },
];
const Users = () => {
  const {
    Users,
    setLimit,
    handleDeleteUser,
    deleteRunning,
    handleOnSubmit,
    search,
    handleShow,
    handleEditUser,
    editRunning,
  } = useUsers_hook();

  return (
    <div className="overflow-x-auto p-4 w-full">
      <h1 className="text-3xl text-gray-500 mb-3 font-extrabold ">Users</h1>
      <div className="flex  justify-between p-3 ">
        <div className="md:flex items-center gap-2">
          <span className="whitespace-nowrap text-gray-600 font-semibold">
            Entries per page
          </span>
          <SelectInput
            onChange={handleShow}
            options={options}
            defaultValue={options[0]}
          />
        </div>
        <form className="w-60" onSubmit={handleOnSubmit}>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              ref={search}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>email</th>
              <th>status</th>
              <th>role</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {Users?.data?.map((user, index) => {
              return (
                <UserRow
                  {...user}
                  key={index}
                  deleteRunning={deleteRunning}
                  handleDeleteUser={handleDeleteUser}
                  handleEditUser={handleEditUser}
                  editRunning={editRunning}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
