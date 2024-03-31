import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FormInput } from "../../components/utility/Inputs";
import { useSelector } from "react-redux";

const AccountInformation = () => {
  const [userInformation, setUserInformation] = useState(null);
  const { user } = useSelector((state) => state.AuthReducer);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/v1/users/getMe`);
      console.log(data);
      setUserInformation(data.data);
    })();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-x-5 bg-white p-3 rounded-md shadow-md">
      <FormInput label={"Name"} value={userInformation?.name} />
      <FormInput label={"Email"} value={userInformation?.email} />
      <FormInput
        label={"Password"}
        value={userInformation?.email}
        type="password"
      />
      <FormInput label={"Phone"} value={userInformation?.phone} />
    </div>
  );
};

export default AccountInformation;
