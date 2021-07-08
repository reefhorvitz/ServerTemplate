import axios from "axios";
export default class Request {
    constructor(serviceUrl) {
        this.serviceUrl = serviceUrl;
    }

    get(path,token, config){
        if(token){
            return axios.get(this.serviceUrl + path, {headers: {Authorization: token}, ...config}).then(Request.getResData).catch(Request.getErrorData)
        }
        return axios.get(this.serviceUrl + path, config).then(Request.getResData).catch(Request.getErrorData)
    }

    post(path, body, headers){
        return axios.post(this.serviceUrl + path, body, headers && {headers: headers}).then(Request.getResData).catch(Request.getErrorData)
    }

    put(path, body){
        return axios.put(this.serviceUrl + path, body).then(Request.getResData).catch(Request.getErrorData)
    }

    delete(path, body){
        return axios.delete(this.serviceUrl + path, {data: body}).then(Request.getResData).catch(Request.getErrorData)
    }

    static getResData(res){
        return res.data;
    }

    static getErrorData(err){
        throw err.response.data
    }
}
