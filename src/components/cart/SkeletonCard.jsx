const SkeletonCard = () => {
  return (
    <div className="grid-cols-3  gap-6 grid">
      <div className="skeleton  "></div>
      <div className="col-span-2 gap-4 grid">
        <div className="skeleton h-9"></div>

        <div className="grid grid-cols-3 gap-2">
          <div className="h-8 skeleton"></div>
          <div className="h-8 skeleton"></div>
          <div className="h-8 skeleton "></div>
          <div className="grid gap-3  grid-cols-2 col-span-full">
            <div className="skeleton h-10 rounded-none"> </div>
            <div className="skeleton h-10 rounded-none"> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
