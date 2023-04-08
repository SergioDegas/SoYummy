import axios from "axios";

const token = localStorage.getItem("token");
export const getRecipeById = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:4000/recipes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
