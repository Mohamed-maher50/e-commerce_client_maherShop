import React from "react";
import CreateSubcategories from "../../../components/subcategories/subcategoriesForms/CreateSubcategories";
import DeleteSubcategories from "../../../components/subcategories/subcategoriesForms/DeleteSubcategories";

const SubCategories = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <CreateSubcategories />
      <DeleteSubcategories />
    </div>
  );
};

export default SubCategories;
