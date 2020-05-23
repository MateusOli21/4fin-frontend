export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileRFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}

// actions to Categories

export function createCategoryRequest(data) {
  return {
    type: '@user/CREATE_CATEGORY_REQUEST',
    payload: { data },
  };
}

export function updateCategoryRequest(data) {
  return {
    type: '@user/UPDATE_CATEGORY_REQUEST',
    payload: { data },
  };
}

export function deleteCategoryRequest(data) {
  return {
    type: '@user/DELETE_CATEGORY_REQUEST',
    payload: { data },
  };
}
export function categorySuccess(categories) {
  return {
    type: '@user/CATEGORY_SUCCESS',
    payload: { categories },
  };
}

export function categoriesFailure() {
  return {
    type: '@user/CATEGORIES_FAILURE',
  };
}
