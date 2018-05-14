import axios from 'axios';

const SUCCESS = 200  //成功状态值, 默认接口返回数据格式: {"code":200, "msg":"success", data:{...}}

axios.defaults.baseURL = process.env.BASE_API; // api的base_url  
axios.defaults.timeout = 10000; // 请求超时时间  

//添加请求拦截器
axios.interceptors.request.use(
    config => {
        //在发送请求之前做些处理，比如：显示loading
        //loading.show()
        return config;
    },
    error => {
        //对请求错误做处理
        //loading.hide(); 
        //alert("提示：发送请求失败！")
        return Promise.reject(error);
    }
);

//添加响应拦截器
axios.interceptors.response.use(
    response => {
        //对响应数据进行处理
        //loading.hide();
        let {data:{code, data}} = response;
        if (code != SUCCESS) {
            //alert("提示：加载数据错误请重试！")
        }
        return response.data;
    },
    error => {
        //请求错误时
        //loading.hide();
        alert("提示：服务器错误！")
        return Promise.reject(error);
    }
);
export default axios