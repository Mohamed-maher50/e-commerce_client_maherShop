import ShoppingCard from "../../components/cart/ShoppingCard";

const ShoppingCartProductContainer = ({ items = [] }) => {
  return (
    <div className="grid  gap-3 p-2 lg:grid-cols-2">
      {items?.map((item, index) => {
        return <ShoppingCard {...item} key={index} />;
      })}
    </div>
  );
};

export default ShoppingCartProductContainer;
