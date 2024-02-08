import axios from "axios"

 export const commonAPI = async(httpRequest,url,reqBody,reqHeader)=>{

    const reqConfig = {
        method:httpRequest,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}//since we have tw type of contents
    }

    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })

 }