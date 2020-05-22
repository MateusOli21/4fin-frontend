import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { getCategoriesSuccess, categoriesFailure } from './actions';

export function* getCategories() {
  try {
    const response = yield call(api.get, 'categories');
    yield put(getCategoriesSuccess(response.data));
  } catch (erro) {
    yield put(categoriesFailure());
    toast.error('Erro ao carregar categorias.');
  }
}

export function* createCategory({ payload }) {
  try {
    yield call(api.post, 'categories', payload.data);
    console.log('1');
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
    yield call(api.put, `categories/${id}`, { name, max_value });

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
    toast.success('Categoria excluida com sucesso');
    history.push('/categories');
  } catch (err) {
    yield put(categoriesFailure());
    toast.error('Erro ao excluir categoria.');
  }
}

export default all([
  takeLatest('@categories/GET_CATEGORIES_REQUEST', getCategories),
  takeLatest('@categories/POST_CATEGORY_REQUEST', createCategory),
  takeLatest('@categories/PUT_CATEGORY_REQUEST', updateCategory),
  takeLatest('@categories/DELETE_CATEGORY_REQUEST', deleteCategory),
]);
