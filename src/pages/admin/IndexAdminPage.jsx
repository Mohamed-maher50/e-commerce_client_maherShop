import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AllowTo from "../../components/utility/AllowTo";
import { useSelector } from "react-redux";

const IndexAdminPage = () => {
  const { user } = useSelector((state) => state.AuthReducer);
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-8">
        <AllowTo allow={"admin"} isAllow={user?.data?.role} replace>
          <AdminSidebar className="lg:col-span-2 max-lg:w-full " />
          <div className="lg:col-span-6 p-4 bg-white rounded-md shadow-md">
            <Outlet />
          </div>
        </AllowTo>
      </div>
    </div>
  );
};

export default IndexAdminPage;
