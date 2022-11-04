import { сurrencyAPI } from '../Api/api';

const SET_CURRENT = 'SET_CURRENT'; // перенная для получения всех валют
const SET_YOUR_COUNT = 'SET_YOUR_COUNT'; // перенная для введенного количесва у.е.
const IS_FETCHING = 'IS_FETCHING'; //загрузка

// иноциализация переменных
let initialState = {
    currentList: [], // массив валют
    USD: "",
    EUR: "",
    yourCount: "",
    total: "",
    isFetching: false, // загрузка
};

// редьюсер получения массива валют
const convertionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT: {
            // получение валют
            return {
                ...state, currentList: action.currentList,
                USD: action.currentList.Valute.USD.Value,
                EUR: action.currentList.Valute.EUR.Value,
            }
        }

        case SET_YOUR_COUNT: {
            // получение валют
            return {
                ...state, yourCount: action.yourCount,
                total: state.total = action.yourCount[1] === 'usd'
                    ? state.total = action.yourCount[0] * state.USD
                    : state.total = action.yourCount[0] * state.EUR
            }
        }

        case IS_FETCHING: {
            // загрузка on/off
            return { ...state, isFetching: action.isFetching }
        }

        default:
            return state;
    }
}

// экшен для получения валют
export const setCurrentAC = (currentList) => ({ type: SET_CURRENT, currentList });
export const setYourCountAC = (yourCount) => ({ type: SET_YOUR_COUNT, yourCount });
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

export const getYourCount = (yourCount) => (dispatch) => {
    dispatch(setYourCountAC(yourCount));
}

export default convertionReducer;