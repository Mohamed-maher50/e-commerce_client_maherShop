import React from "react";
import { FormInput } from "../components/utility/Inputs";
import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa";
import isValidEgyptianNumber from "../../utils/ValidatePhoneNumber";
import { isValidEgyptPostalCode } from "../../utils/ValidataPostCode";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createOrder_thunk } from "../reducers/orders/OrdersThunk";
import { redirect } from "react-router-dom";

const CreateOrder = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const { cartId } = useParams();

  const dispatch = useDispatch();
  const handleOnSubmit = async (data) => {
    let url = await dispatch(createOrder_thunk({ cartId, data }));

    window.open(url.payload.session.url, "_blank");
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit(handleOnSubmit)} className="gap-3 grid">
        <div className="join join-vertical  w-full">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              shipping address
            </div>
            <div className="collapse-content">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <FormInput
                    status={false}
                    placeholder={"city"}
                    {...register("city", {
                      required: "please enter city",
                      minLength: {
                        value: 3,
                        message: "not valid city",
                      },
                    })}
                  />
                  {errors.city && (
                    <p className="text-red-500">{errors.city.message}</p>
                  )}
                </div>
                <div>
                  <FormInput
                    status={false}
                    placeholder={"details"}
                    {...register("details", {
                      required: "please enter details",
                      minLength: {
                        value: 5,
                        message: "please describe more",
                      },
                    })}
                  />{" "}
                  {errors.details && (
                    <p className="text-red-500">{errors.details.message}</p>
                  )}
                </div>
                <div>
                  <FormInput
                    status={false}
                    placeholder={"phone"}
                    {...register("phone", {
                      validate: (val) => {
                        if (val)
                          return (
                            isValidEgyptianNumber(val) ||
                            "Enter valid phone number"
                          );
                        return true;
                      },
                      required: "please enter phone number",
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-500">{errors.phone.message}</p>
                  )}
                </div>
                <FormInput
                  status={false}
                  placeholder={"postalCode"}
                  {...register("postalCode", {
                    validate: (val) => {
                      if (val)
                        return (
                          isValidEgyptPostalCode(val) ||
                          "not valid egyptian post code"
                        );
                      return true;
                    },
                  })}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              payment method
            </div>
            <div className="collapse-content">
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    className="w-5 h-5 cursor-pointer"
                    id="card"
                    name="payment-method"
                    value={"cash"}
                    {...register("paymentMethodType", {
                      required: "please select payment method",
                    })}
                  />
                  <label
                    htmlFor="card"
                    className="ml-4 flex gap-2 cursor-pointer"
                  >
                    <img
                      src="/checkout/cash.png"
                      className="object-contain w-12"
                    />
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    className="w-5 h-5 cursor-pointer"
                    id="stripe"
                    value={"stripe"}
                    name="payment-method"
                    {...register("paymentMethodType", {
                      required: "please select payment method",
                    })}
                  />
                  <label
                    htmlFor="stripe"
                    className="ml-4 flex gap-2 cursor-pointer"
                  >
                    <img
                      src="https://readymadeui.com/images/visa.webp"
                      className="w-12"
                      alt="card1"
                    />
                    <img
                      src="https://readymadeui.com/images/american-express.webp"
                      className="w-12"
                      alt="card2"
                    />
                    <img
                      src="https://readymadeui.com/images/master.webp"
                      className="w-12"
                      alt="card3"
                    />
                  </label>

                  {errors.paymentMethodType && (
                    <p>{errors.paymentMethodType.message}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn  btn-primary text-white">
          continue
          <FaArrowRight />
        </button>
      </form>
    </div>
  );
};

export default CreateOrder;
