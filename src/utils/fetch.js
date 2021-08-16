import axios from 'axios';
let baseURL = "https://api.persion.cn/api/v1";
const instance = axios.create({
    baseURL,
    timeout:7000,
    headers:{}
});
instance.interceptors.request.use((config)=>{
    // token 的作用，是用户鉴权
    config.headers.Authorization = localStorage.getItem('token') || '';
    return config;
},(err)=>{
    return Promise.reject(err);
});
instance.interceptors.response.use((response)=>{
    if(response.status==200){
        if(response.data&&response.data.success){
            return response.data.data;
        }else{
            alert("数据异常,请重试");
        }
    }
},(err)=>{
    return Promise.reject(err);
});
export default instance;