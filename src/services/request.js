import axios from "axios";
import { BASE_URL ,TIMEOUT } from "./config";


const instance =axios.create({
    baseURL:BASE_URL,
    timeout:TIMEOUT
})

 //axios请求拦截器
 instance.interceptors.request.use(config=>{
    //1.发送网络请求时在界面中间进行加载

    //2.某些请求需要携带token，如果没有则直接返回到登录姐买你

    //3。params/data序列化操作
    // console.log(config)
    return config;
  },err=>{
    console.log(err)
  })

  //axios响应拦截
  instance.interceptors.response.use(res=>{
    return res.data;
  },err=>{
    if(err&&err.response){
      switch (err.response.status){
        case 400:
          console.log("请求错误");
          break;
        case 401:
          console.log("未授权");
          break;
        default:
          console.log("其他情况");
      }
    }
    return err; 
  })

export default instance