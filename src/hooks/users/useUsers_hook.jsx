import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  getUsers,
  updateUser,
} from "../../reducers/Users/User_thunk";
import { useRef } from "react";

const useUsers_hook = () => {
  const { Users, deleteRunning, editRunning } = useSelector(
    (state) => state.usersReducer
  );
  const [limit, setLimit] = useState(5);
  const dispatch = useDispatch();
  const search = useRef();
  useEffect(() => {
    dispatch(getUsers(`?limit=${limit}`));
  }, []);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getUsers(`?limit=${limit}&keyword=${search.current.value}`));
  };
  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };
  const handleEditUser = (data) => {
    console.log("work");
    dispatch(updateUser(data));
  };
  const handleShow = ({ value }) => {
    setLimit(value);
  };
  return {
    Users,
    setLimit,
    handleShow,
    handleDeleteUser,
    deleteRunning,
    handleOnSubmit,
    search,
    handleEditUser,
    editRunning,
  };
};

export default useUsers_hook;
