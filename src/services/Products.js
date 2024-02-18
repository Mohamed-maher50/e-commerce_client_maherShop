import axios from "axios";

export const getProducts = async (query) => {
  try {
    const { data } = await axios.get(`${query}`);
    return data;
  } catch (error) {
    return null;
  }
};
