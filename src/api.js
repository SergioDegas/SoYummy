import axios from "axios";

export const getRecipeById = async (id) => {
  try {
    const { data } = await axios.get(`/recipes/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
