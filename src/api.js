import axios from "axios";

export const getRecipeById = async (id) => {
  try {
    const { data } = await axios.get(`/recipes/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
export const getUserData = async () => {
  try {
    const { data } = await axios.get("/user/current");
    const { name, avatarURL } = data;
    return { name, avatarURL };
  } catch (error) {
    console.error(error);
  }
};
export const setUserData = async (data) => {
  try {
    axios.post("/user/update", data);
  } catch (error) {
    console.error(error);
  }
};
