import produce from 'immer';

const INITIAL_STATE = {
  profile: [],
  categories: [],
  purchases: [],
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, (draft) => {
        draft.profile = action.payload.user.profile;
        draft.categories = action.payload.user.categories;
        draft.purchases = action.payload.user.purchases;
      });

    case '@user/UPDATE_PROFILE_SUCCESS':
      return produce(state, (draft) => {
        draft.profile = action.payload.profile;
      });

    case '@user/CATEGORY_SUCCESS':
      return produce(state, (draft) => {
        draft.categories = action.payload.categories;
      });

    case '@auth/SIGN_OUT':
      return produce(state, (draft) => {
        draft.profile = [];
        draft.categories = [];
        draft.purchases = [];
      });

    default:
      return state;
  }
}
