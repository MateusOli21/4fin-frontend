export function getCategoriesRequest() {
  return {
    type: '@categories/GET_CATEGORIES_REQUEST',
  };
}

export function getCategoriesSuccess(categories) {
  return {
    type: '@categories/GET_CATEGORIES_SUCCESS',
    payload: { categories },
  };
}

export function postCategoriesRequest(data) {
  return {
    type: '@categories/POST_CATEGORY_REQUEST',
    payload: { data },
  };
}

export function categoriesFailure() {
  return {
    type: '@categories/CATEGORIES_FAILURE',
  };
}
