import axios from "axios";

export const getRecipeById = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:4000/recipes/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
