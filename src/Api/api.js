import axios from 'axios';

// компонент Api в котором формируется запрос на сервер и получает ответ
// базовый адрес запроса на сервер
var instance = axios.create({
    withCredentials: false,
    baseURL: `https://www.cbr-xml-daily.ru/daily_json.js`,
});

// компонент Api в котором формируется запрос на сервер и получает ответ
instance({
    url: `https://www.cbr-xml-daily.ru/daily_json.js`,
})
    .then(response => { return response })

export const сurrencyAPI = {
    getСurrency() {
        return instance.get()
    }
}