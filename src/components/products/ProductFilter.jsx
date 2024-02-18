import { CiGrid41, CiGrid2H } from "react-icons/ci";
import Select from "react-select";
const options = [
  { value: 0, label: "position" },
  { value: "-price", label: "hight price to low" },
  { value: "+price", label: "low price to hight" },
  { value: "+quantity", label: "hight quantity to low" },
];

const ViewStyle = ({ setHorizontal, OnChangeFilter, className }) => {
  return (
    <div
      className={`flex justify-between p-3 col-span-full items-center w-full ${
        className ? className : ""
      }`}
    >
      <div className="flex font-extrabold text-3xl">
        <CiGrid41 onClick={() => setHorizontal(false)} />
        <CiGrid2H onClick={() => setHorizontal(true)} />
      </div>
    </div>
  );
};

export default ViewStyle;
