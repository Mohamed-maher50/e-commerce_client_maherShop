import SignUp_hook from "../../hooks/Auth/SignUp_hook";
const SignUp = () => {
  const [user, register, watch, handleSubmit, errors, handleOnSubmit] =
    SignUp_hook();

  return (
    <div className="container mx-auto">
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="lg:w-1/2 mx-auto grid grid-cols-2 pt-8 gap-2"
      >
        <div className=" col-span-full flex flex-col">
          <input
            type="text"
            className="input col-span-full input-primary rounded-none"
            placeholder="name"
            {...register("name", {
              required: "please enter your name",
              minLength: {
                message: "must be greater then 5 character",
                value: 5,
              },
              maxLength: {
                message: "must be less then 20 character",
                value: 20,
              },
            })}
          />
          {errors.name && (
            <label className="text-error text-sm">{errors.name.message}</label>
          )}
        </div>

        <div className=" col-span-full flex flex-col">
          <input
            type="email"
            className="input input-primary rounded-none"
            placeholder="Enter email"
            {...register("email", {
              required: "please enter email",
              validate: (value) =>
                value.trim().endsWith("@gmail.com") ||
                "not valid email ex: ma....@gmail.com",
            })}
          />
          {errors.email && (
            <label className="text-error text-sm">{errors.email.message}</label>
          )}
        </div>
        <div className="flex flex-col">
          <input
            type="password"
            {...register("password", {
              min: {
                message: "password must be greater then 8 character",
                value: 8,
              },
            })}
            className="input input-primary rounded-none"
            placeholder="Enter Your password"
          />
          {errors.password && (
            <label className="text-error text-sm">
              {errors.password.message}
            </label>
          )}
        </div>

        <div className="flex flex-col">
          <input
            {...register("passwordConfirm", {
              validate: (value) =>
                value === watch("password") ||
                "confirm password  not match password",
            })}
            type="password"
            className="input  input-primary rounded-none"
            placeholder="Enter Your password"
          />
          {errors.passwordConfirm && (
            <label className="text-error text-sm">
              {errors.passwordConfirm.message}
            </label>
          )}
        </div>

        <div className="flex flex-col">
          <input
            {...register("phone", {
              required: "Enter you phone number",
              minLength: {
                message: "not valid number",
                value: 8,
              },
              maxLength: {
                message: "not valid number",
                value: 15,
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Please enter numbers only",
              },
            })}
            type="text"
            className="input  input-primary rounded-none"
            placeholder="phone"
          />
          {errors.phone && (
            <label className="text-error text-sm">{errors.phone.message}</label>
          )}
        </div>

        <button className="btn  btn-primary text-white  px-5 rounded-sm placeholder:capitalize">
          submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
