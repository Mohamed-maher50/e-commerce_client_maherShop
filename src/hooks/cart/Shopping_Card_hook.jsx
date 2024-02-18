import { useDispatch } from "react-redux";
import {
  deleteProduct_Thunk,
  updateAmount_Thunk,
} from "../../reducers/ShopingCart/ShopingCartThunks";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
const Shopping_Card_hook = (count = 1) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(count);
  useEffect(() => {
    setAmount(count);
  }, [count]);
  const deleteItem = (id) => {
    dispatch(deleteProduct_Thunk(id));
  };
  const updateAmount = (_id) => {
    if (count == amount) return toast.warn("don't eat my brian change amount");
    dispatch(updateAmount_Thunk({ _id, count: amount }));
  };
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  return [deleteItem, updateAmount, handleAmountChange, amount];
};

export default Shopping_Card_hook;
