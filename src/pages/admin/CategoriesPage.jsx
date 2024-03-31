import React from "react";
import CreateCategory from "../../components/categories/CategoriesForms/CreateCategory";
import DeleteCategory from "../../components/categories/CategoriesForms/DeleteCategory";
import UpdateCategory from "../../components/categories/CategoriesForms/UpdateCategory";

const CategoriesPage = () => {
  return (
    <div className="grid  items-stretch grid-cols-2 gap-1">
      <CreateCategory />

      <UpdateCategory />

      <div className="col-span-full">
        <DeleteCategory />
      </div>
    </div>
  );
};

export default CategoriesPage;
