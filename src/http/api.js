import APIURL from './apiUrl'
import axios from './request'

/**
 * 把公共参数添加到数据对象
 * @param $param
 * @returns {*}
 */
function addPublicParam($param) {
    return Object.assign({}, APIURL.PUBPARAM, $param);
}

/**
 * 获取天气数据
 * @param $param
 * @returns {V|*}
 */
function getWeather($param) {
    return axios.get(APIURL.WEATHER, {
        params:addPublicParam($param)
    });
}

export {
    axios,
    getWeather,
}