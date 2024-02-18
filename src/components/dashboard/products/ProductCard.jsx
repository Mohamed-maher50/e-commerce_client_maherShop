import React from "react";

const ProductCard = () => {
  return (
    <div className="card rounded-lg hover:shadow-lg shadow-md bg-white">
      <div className="card-body p-6 flex flex-col items-center space-y-6">
        <div className="flex justify-between items-center w-full">
          <span className="badge badge-primary">#123456</span>{" "}
          <button className="btn btn-sm btn-error">Delete</button>{" "}
        </div>
        <div className="flex justify-between items-center space-x-4">
          <img
            src={
              "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/w/t/wt996-1-min_1.jpg"
            }
            alt="Image"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h2 className="font-bold text-xl">Title</h2>
            <p className="text-gray-500">Category Badge | Brand Badge</p>
            <span className="text-lg font-bold text-green-500">Amount</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
