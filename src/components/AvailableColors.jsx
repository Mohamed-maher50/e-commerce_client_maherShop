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
              className={`block rounded-full btn   ${
                ActiveColor == Index ? " outline" : ""
              }  outline-offset-2 outline-black w-7 min-h-fit  h-7  p-0 m-0`}
              style={{ background: color }}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableColors;
