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

//create

export function createCategoryRequest(data) {
  return {
    type: '@user/CREATE_CATEGORY_REQUEST',
    payload: { data },
  };
}

export function createCategorySuccess(category) {
  return {
    type: '@user/CREATE_CATEGORY_SUCCESS',
    payload: { category },
  };
}

//update

export function updateCategoryRequest(data) {
  return {
    type: '@user/UPDATE_CATEGORY_REQUEST',
    payload: { data },
  };
}

export function updateCategorySuccess(category) {
  return {
    type: '@user/UPDATE_CATEGORY_SUCCESS',
    payload: { category },
  };
}

//delete

export function deleteCategoryRequest(data) {
  return {
    type: '@user/DELETE_CATEGORY_REQUEST',
    payload: { data },
  };
}

export function deleteCategorySuccess(id) {
  return {
    type: '@user/DELETE_CATEGORY_SUCCESS',
    payload: { id },
  };
}

export function categoriesFailure() {
  return {
    type: '@user/CATEGORIES_FAILURE',
  };
}
