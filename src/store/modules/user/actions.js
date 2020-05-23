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

export function createCategorySuccess(category) {
  return {
    type: '@user/CREATE_CATEGORY_SUCCESS',
    payload: { category },
  };
}

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

// actions for Purchases

export function createPurchaseRequest(data) {
  return {
    type: '@user/CREATE_PURCHASE_REQUEST',
    payload: { data },
  };
}

export function createPurchaseSuccess(purchase) {
  return {
    type: '@user/CREATE_PURCHASE_SUCCESS',
    payload: { purchase },
  };
}

export function updatePurchaseRequest(data) {
  return {
    type: '@user/UPDATE_PURCHASE_REQUEST',
    payload: { data },
  };
}

export function updatePurchaseSuccess(purchase) {
  return {
    type: '@user/UPDATE_PURCHASE_SUCCESS',
    payload: { purchase },
  };
}

export function deletePurchaseRequest(data) {
  return {
    type: '@user/DELETE_PURCHASE_REQUEST',
    payload: { data },
  };
}

export function deletePurchaseSuccess(id) {
  return {
    type: '@user/DELETE_PURCHASE_SUCCESS',
    payload: { id },
  };
}

export function categoriesFailure() {
  return {
    type: '@user/CATEGORIES_FAILURE',
  };
}
