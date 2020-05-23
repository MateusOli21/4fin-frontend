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

    case '@user/CREATE_CATEGORY_SUCCESS':
      return produce(state, (draft) => {
        draft.categories.push(action.payload.category);
      });

    case '@user/UPDATE_CATEGORY_SUCCESS':
      return produce(state, (draft) => {
        const categoryIndex = draft.categories.findIndex(
          (category) => category.id === parseInt(action.payload.category.id)
        );

        if (categoryIndex >= 0) {
          const {
            id: idString,
            name,
            max_value: maxValueString,
          } = action.payload.category;
          const id = parseInt(idString);
          const max_value = parseInt(maxValueString);

          const category = { id, name, max_value };
          draft.categories[categoryIndex] = category;
        } else {
          return state;
        }
      });

    case '@user/DELETE_CATEGORY_SUCCESS':
      return produce(state, (draft) => {
        const categoryIndex = draft.categories.findIndex(
          (category) => category.id === parseInt(action.payload.id)
        );

        if (categoryIndex >= 0) {
          draft.categories.splice(categoryIndex, 1);
        } else {
          return state;
        }
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
