import produce from 'immer';

const INITIAL_STATE = {
  categories: [],
};

export default function categories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@categories/GET_CATEGORIES_SUCCESS':
      return produce(state, (draft) => {
        draft.categories = action.payload.categories;
      });

    case '@categories/CATEGORIES_FAILURE':
      return produce(state, (draft) => {
        draft.categories = state;
      });

    case '@auth/SIGN_OUT':
      return produce(state, (draft) => {
        draft.categories = [];
      });
    default:
      return state;
  }
}
