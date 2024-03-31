import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AllowTo from "../../components/utility/AllowTo";
import { useSelector } from "react-redux";

const IndexAdminPage = () => {
  const { user } = useSelector((state) => state.AuthReducer);
  return (
    <div className="">
      <div className="grid gap-2 p-2  lg:grid-cols-8">
        <AllowTo allow={"admin"} isAllow={user?.data?.role} replace>
          <AdminSidebar className="lg:col-span-1 max-lg:w-full " />
          <div className="col-span-full lg:col-span-7 p-2 grid  bg-white rounded-md shadow-md">
            <Outlet />
          </div>
        </AllowTo>
      </div>
    </div>
  );
};

export default IndexAdminPage;
