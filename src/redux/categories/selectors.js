export const getCategoryList = (state) => state.categories.categories;
export const isLoading = (state) => state.categories.isLoading;
export const getError = (state) => state.categories.error;

export const selectCategoryList = (state) => state.categories.categoryList;
export const selectCategoryRecipes = (state) => state.categories.recipes;
export const selectCategoryTotalPages = (state) => state.categories.totalPages;
export const selectIsLoading = (state) => state.categories.isLoading;
export const selectError = (state) => state.categories.error;
export const selectRecipesSet = (state) => state.categories.recipesSet;

