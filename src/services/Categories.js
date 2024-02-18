import axios from "axios";
export const getCategories = async () => {
  try {
    const { data } = await axios.get("/api/v1/categories");

    return data;
  } catch (error) {
    return null;
  }
};
