import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"


//Register API

export const registerAPI = async (user) =>{
    return await commonAPI("POST", `${BASE_URL}/user/register`, user, "")
}  

//Login API

export const loginAPI = async(user)=>{
   return await commonAPI("POST", `${BASE_URL}/user/login`, user, "")
}

//AddPhoto API
export const addPhotoAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST", `${BASE_URL}/photos/add`, reqBody,reqHeader)
 }

 //home photos
 export const homephotoAPI = async()=>{
    return await commonAPI("GET", `${BASE_URL}/photos/home-photos`)
 }

 //All photos
 export const allPhotosAPI = async(searchKey,reqHeader)=>{
   //query parameter = path?key=value
    return await commonAPI("GET",`${BASE_URL}/photos/all-photos?search=${searchKey}`,"",reqHeader)
 }

 //userPhotos
 export const allUserPhotos = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/all-photos`,"",reqHeader)
 }

 //editPhotos
 export const editPhotosAPI = async(photosId,reqBody,reqHeader)=>{
   //path parameter - :id - router
   return await commonAPI("PUT",`${BASE_URL}/photos/edit/${photosId}`,reqBody,reqHeader)
}

//deletePhotoAPI
export const deletePhotoAPI = async(photosId,reqHeader)=>{
   //path parameter - :id - router
   return await commonAPI("DELETE",`${BASE_URL}/photos/remove/${photosId}`,{},reqHeader)
}

//edit profile
export const updateProfileAPI = async(reqBody,reqHeader)=>{
   //path parameter - :id - router
   return await commonAPI("PUT",`${BASE_URL}/user/update`,reqBody,reqHeader)
}