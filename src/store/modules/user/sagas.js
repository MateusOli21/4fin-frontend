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
  createPurchaseSuccess,
  updatePurchaseSuccess,
  deletePurchaseSuccess,
  categoriesFailure,
} from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, spend_limit, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email, avatar_id, spend_limit },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'users', profile);

    yield put(updateProfileSuccess(response.data));
    toast.success('Perfil atualizado com sucesso.');
    history.push('/dashboard');
  } catch (err) {
    yield put(updateProfileRFailure());
    toast.error('Erro ao atualizar perfil.');
  }
}

// categories sagas
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

// purchases sagas
export function* createPurchase({ payload }) {
  try {
    const response = yield call(api.post, 'purchases', payload.data);
    const { id, name, value, date, category_id } = response.data;
    yield put(createPurchaseSuccess({ id, name, value, date, category_id }));

    toast.success('Categoria criada com sucesso');
    history.push('/purchases');
  } catch (err) {
    yield put(categoriesFailure());
    toast.error('Erro ao criar categorias.');
  }
}

export function* updatePurchase({ payload }) {
  try {
    const { id } = payload.data;
    const response = yield call(api.put, `purchases/${id}`, payload.data);

    console.log('1');

    const { name, value, date, category_id } = response.data;
    console.log('2');
    yield put(updatePurchaseSuccess({ id, name, value, date, category_id }));

    console.log('3');
    toast.success('Categoria atualizada com sucesso');
    history.push('/purchases');
  } catch (err) {
    yield put(categoriesFailure());
    toast.error('Erro ao atualizar categoria.');
  }
}

export function* deletePurchase({ payload }) {
  try {
    const idParams = payload.data;
    yield call(api.delete, `purchases/${idParams}`);
    yield put(deletePurchaseSuccess(idParams));

    toast.success('Categoria excluida com sucesso');
    history.push('/purchases');
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
  takeLatest('@user/CREATE_PURCHASE_REQUEST', createPurchase),
  takeLatest('@user/UPDATE_PURCHASE_REQUEST', updatePurchase),
  takeLatest('@user/DELETE_PURCHASE_REQUEST', deletePurchase),
]);
