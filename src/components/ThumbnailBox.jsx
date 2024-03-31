const ThumbnailBox = ({ image, name, className = "", ...props }) => {
  return (
    <div
      {...props}
      className={`cursor-pointer flex flex-col items-center justify-center gap-2 overflow-hidden ${className}`}
    >
      <div className="bg-gray-100 rounded-lg">
        <img
          src={
            image ||
            "https://res.cloudinary.com/dgrok62zp/image/upload/v1711786006/categories/apfbzeffricrjcwlanxt.png"
          }
          alt={name}
          className="hover:scale-95 h-24 object-contain  duration-500"
        />
      </div>
      <span className="block whitespace-nowrap mx-auto font-extrabold md:text-sm text-gray-500 capitalize w-fit">
        {name}
      </span>
    </div>
  );
};

export default ThumbnailBox;
