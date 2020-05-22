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

    toast.success('Categoria criada com sucesso');
    history.push('/categories');
  } catch (err) {
    console.log(err);
    yield put(categoriesFailure());
    toast.error('Erro ao criar categorias.');
  }
}

export default all([
  takeLatest('@categories/GET_CATEGORIES_REQUEST', getCategories),
  takeLatest('@categories/POST_CATEGORY_REQUEST', createCategory),
]);
