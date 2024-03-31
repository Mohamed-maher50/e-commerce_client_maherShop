import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myOrdersThunk } from "../../reducers/user/userThunks";
import { MdDone, MdPreview } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { formatDate } from "../../../utils/FormatDate";
import MyOrdersTableSkeleton from "./Skeletons/MyOrdersTableSkeleton";

const MyOrders = () => {
  const dispatch = useDispatch();
  const {
    orders: { data, loading },
  } = useSelector((state) => state.AuthReducer);

  useEffect(() => {
    dispatch(myOrdersThunk(``));
  }, []);

  return (
    <div className="overflow-x-auto  w-full">
      <h1 className="text-3xl text-gray-500 mb-3 font-extrabold ">Orders</h1>

      {loading ? (
        <MyOrdersTableSkeleton />
      ) : !data?.results ? (
        <div className="capitalize  text-xl text-center  justify-center  font-extrabold text-gray-700 items-center flex alert">
          no orders
        </div>
      ) : (
        <div className="overflow-x-auto">
          <div className="overflow-x-auto">
            <table className="table text-center">
              {/* head */}
              <thead>
                <tr>
                  <th>id</th>
                  <th>shipping status</th>
                  <th>paymentMethodType</th>
                  <th>Paid status</th>
                  <th>total Order Price</th>
                  <th>Date</th>
                  <th>view Order</th>
                </tr>
              </thead>
              <tbody className="capitalize">
                {data?.data?.map((order, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        {/* <div className="flex items-center gap-3"> */}
                        #3d4sf2df
                      </td>
                      {order.isDelivered ? (
                        <td className=" flex items-center justify-center   uppercase ">
                          <MdDone className="text-2xl text-green-500" />
                        </td>
                      ) : (
                        <td className=" flex items-center justify-center   uppercase ">
                          <CiDeliveryTruck className="text-2xl text-orange-500" />
                        </td>
                      )}

                      <th>{order.paymentMethodType}</th>
                      <td className=" flex items-center justify-center   uppercase ">
                        <MdDone className="text-2xl text-green-500" />
                      </td>
                      <th>${order.totalOrderPrice}</th>
                      <th className="whitespace-nowrap">
                        {formatDate(order.createdAt)}
                      </th>
                      <th className="flex items-center justify-center text-blue-500">
                        <MdPreview className="text-3xl cursor-pointer" />
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
