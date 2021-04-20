export const TOGGLE_FAVORİTE = "TOGGLE_FAVORİTE";
export const SET_FILTERS = "SET_FILTERS";

export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORİTE, mealId: id };
};

export const setFilters = (filterSettings) => {
    return { type: SET_FILTERS, filters: filterSettings };
  };