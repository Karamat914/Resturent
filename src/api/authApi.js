
import { LOGIN_ENDPOINT } from "@/config/constant/endPoints"
import { post } from "@/services/restService"

export const signUpApi = (data) => {
    return post('auth/signUp', data)
}
export const signInApi = (data) => {
    return post(LOGIN_ENDPOINT, data)
}
export const signOutApi = (refreshToken) => {
  console.log("****refreshToken", {refreshToken});

    return deleteReq('auth/signOut', {refreshToken})
}
export const refreshTokenApi = (data) => {
    return post('auth/refreshToken', data)
}