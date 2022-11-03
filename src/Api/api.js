import axios from 'axios';

var instance = axios.create({
    withCredentials: false,
    baseURL: `https://www.cbr-xml-daily.ru/daily_json.js`,
    headers: { "Content-Type": "application/json" }
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