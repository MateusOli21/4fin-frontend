import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import {
  updateProfileSuccess,
  createCategorySuccess,
  updateCategorySuccess,
  deleteCategorySuccess,
  updateProfileRFailure,
  categoriesFailure,
} from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email, avatar_id },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'users', profile);

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar perfil.');
    yield put(updateProfileRFailure());
  }
}

export function* createCategory({ payload }) {
  try {
    const response = yield call(api.post, 'categories', payload.data);
    yield put(createCategorySuccess(response.data));

    toast.success('Categoria criada com sucesso');
    history.push('/categories');
  } catch (err) {
    yield put(categoriesFailure());
    toast.error('Erro ao criar categorias.');
  }
}

export function* updateCategory({ payload }) {
  try {
    const { id, name, max_value } = payload.data;
    const response = yield call(api.put, `categories/${id}`, {
      name,
      max_value,
    });
    yield put(updateCategorySuccess(response.data));

    toast.success('Categoria atualizada com sucesso');
    history.push('/categories');
  } catch (err) {
    yield put(categoriesFailure());
    toast.error('Erro ao atualizar categoria.');
  }
}

export function* deleteCategory({ payload }) {
  try {
    const id = payload.data;
    yield call(api.delete, `categories/${id}`);
    yield put(deleteCategorySuccess(id));

    toast.success('Categoria excluida com sucesso');
    history.push('/categories');
  } catch (err) {
    yield put(categoriesFailure());
    toast.error('Erro ao excluir categoria.');
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/CREATE_CATEGORY_REQUEST', createCategory),
  takeLatest('@user/UPDATE_CATEGORY_REQUEST', updateCategory),
  takeLatest('@user/DELETE_CATEGORY_REQUEST', deleteCategory),
]);
