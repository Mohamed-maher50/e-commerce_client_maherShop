const AvailableColors = ({
  colors,
  onChange,
  ActiveColor = -1,
  className = "",
}) => {
  return (
    <div className={`${className}`}>
      <div className="flex flex-wrap  gap-3">
        {colors?.map((color, Index) => {
          return (
            <span
              key={Index}
              onClick={() => onChange(Index)}
              className={`block rounded-full btn  ${
                ActiveColor == Index ? " outline " : ""
              }   outline-gray-300 outline-offset-2 duration-700 w-6 min-h-fit  h-6 shadow-sm  p-0 m-0`}
              style={{ background: color }}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableColors;
