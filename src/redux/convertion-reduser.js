import { сurrencyAPI } from '../Api/api';

const SET_CURRENT = 'SET_CURRENT'; // перенная для получения всех валют
const IS_FETCHING = 'IS_FETCHING'; //загрузка

// иноциализация переменных
let initialState = {
    currentList: [], // массив пользователей
    isFetching: false, // загрузка
};

// редьюсер получения массива пользователей
const convertionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT: {
            // получение пользователей, фильтрация и сортировка списка
            return { ...state, currentList: action.currentList }
        }

        case IS_FETCHING: {
            // загрузка on/off
            return { ...state, isFetching: action.isFetching }
        }

        default:
            return state;
    }
}

// экшен для получения юзеров
export const setCurrentAC = (currentList) => ({ type: SET_CURRENT, currentList });
// экшен загрузки
export const setIsFetchingAC = (isFetching) => ({ type: IS_FETCHING, isFetching })

// получение, обработка пареметров
// ассинхронный экшен
export const getCurrent = () => {
    return async (dispatch) => {
        dispatch(setIsFetchingAC(true));
        let valute = await сurrencyAPI.getСurrency();
        dispatch(setCurrentAC(valute.data));
        dispatch(setIsFetchingAC(false));
    }
}

export default convertionReducer;