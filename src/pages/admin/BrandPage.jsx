import CreateBrand from "../../components/brands/BrandsForms/CreateBrand";
import DeleteBrand from "../../components/brands/BrandsForms/DeleteBrand";
import UpdateBrands from "../../components/brands/BrandsForms/UpdateBrands";
const BrandsPage = () => {
  return (
    <div className="grid gap-2  grid-cols-2">
      <CreateBrand />
      <UpdateBrands />
      <DeleteBrand />
    </div>
  );
};

export default BrandsPage;
