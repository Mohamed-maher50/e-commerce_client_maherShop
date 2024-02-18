import React from "react";

import StarRatings from "react-star-ratings";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateReviewAsyncThunk,
  resetErrors,
} from "../../reducers/ReivewsReducer";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import RequireSignIn from "../../services/RequireSignIn";

const CreateReview = ({ productId, reviews }) => {
  const [rating, setRating] = useState(1);
  const { user } = useSelector((state) => state.AuthReducer);
  const { errors: reviewErrors } = useSelector((state) => state.ReviewsReducer);

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm({
    delayError: 12500,
    shouldFocusError: true,
  });
  const dispatch = useDispatch();
  const handleOnchangeRate = (rate) => setRating(rate);
  const handleOnSubmitReview = async ({ review }) => {
    if (productId && user) {
      dispatch(
        CreateReviewAsyncThunk({
          product: productId,
          user: user?.data?._id,
          review,
          rating,
        })
      );
    }
    reset();
  };
  useEffect(() => {
    reviewErrors?.map((err) => {
      toast.warn(err.msg);
    });
    if (reviewErrors.length) {
      dispatch(resetErrors());
    }
  }, [reviewErrors]);

  return (
    <RequireSignIn>
      <form
        onSubmit={handleSubmit(handleOnSubmitReview)}
        className="p-5 grid gap-4"
      >
        <div className="flex flex-col">
          <h2 className="text-lg capitalize text-gray-600 font-bold">
            reviews:{" "}
            <span className="text-xs ">(review {reviews?.length})</span>
          </h2>
          <div className="flex items-center gap-3">
            {user?.data && <p className="text-gray-500"> {user?.data.name}</p>}

            <StarRatings
              numberOfStars={5}
              starDimension="25px"
              starRatedColor="gold"
              rating={rating}
              name="review"
              changeRating={handleOnchangeRate}
            />
          </div>
          <textarea
            placeholder="enter your message"
            {...register("review", {
              required: "please Enter Content ",
              minLength: {
                value: 5,
                message: "too short message",
              },
              maxLength: { value: 400, message: "your content is too large" },
            })}
            className="min-h-[200px] font-medium shadow-sm capitalize outline-none p-2  resize-none mt-3 bg-gray-50"
          ></textarea>
          {errors.review && (
            <p className=" text-error capitalize">{errors.review.message}</p>
          )}
        </div>
        <button type="submit" className="btn w-fit px-9 btn-primary text-white">
          submit
        </button>
      </form>
    </RequireSignIn>
  );
};

export default CreateReview;
