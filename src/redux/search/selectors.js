export const selectRecipes = state => state.search.recipes;
export const selectSearchStatus = state => state.search.isLoading;
export const selectSearchError = state => state.search.error;
export const selectTotalPage = state => {
    console.log(state.search.totalPage);
    return state.search.totalPage;
  };
export const selectPerPage = state => state.search.perPage;