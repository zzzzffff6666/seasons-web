import axios from "axios";
import qs from "qs";

axios.default.baseURL = "http://localhost:8080/";

axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        alert(`请求出错: ${JSON.stringify(error.message)}`);
    }
)

export default {
    post(url, data) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url,
                data: qs.stringify(data),
            })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            });
        })
    },

    get(url, data) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url,
                params: data,
            })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            });
        })
    },

    delete(url, data) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'delete',
                url,
                params: data,
            })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            });
        })
    },

    put(url, data) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'put',
                url,
                data: qs.stringify(data),
            })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            });
        })
    }
}