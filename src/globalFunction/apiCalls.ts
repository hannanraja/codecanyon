import axios from 'axios';
import { toast } from 'react-toastify';

const notify = () => toast.success("Success Notification !", {
    position: toast.POSITION.TOP_RIGHT,
    progressStyle: {
        background: 'linear-gradient(90deg, hsl(255deg 77% 60%) 0%, hsl(206deg 100% 50%) 9%, hsl(195deg 100% 50%) 18%, hsl(182deg 100% 46%) 27%, hsl(163deg 88% 61%) 36%, hsl(128deg 76% 72%) 45%,  hsl(81deg 71% 64%) 55%,  hsl(53deg 78% 59%) 64%,hsl(40deg 100% 61%) 73%, hsl(30deg 100% 62%) 82%,hsl(19deg 100% 64%) 91%,hsl(6deg 97% 66%) 100%)',
        height: 2
      }
});

const apiCall = async (url: string, params: any, method: string, displayMessage: boolean): Promise<any> => {

    const data: {[x: string]: any} = {}

    let token;

    // if(url && (url.indexOf('/chat') !== -1 || url.indexOf('/prompt') !== -1)){
        if (typeof window !== 'undefined') {
            token = localStorage.getItem('accessToken');
        }
    // }

    const client = axios.create({
        baseURL: "",
        headers: {
            ...(token && {'Authorization' : `Bearer ` + token})
        },
        data: params
    });


    if (method === 'post') {
        await client.post(url, params).then((res) => {
            data.data = res.data

        }).catch((error) => {

            if (error.response) {
                data.error = error.response.data
                data.statusCode = error.response.status
                //data.error = { message: error.response.data.message }

                // error.response.status === 401 && logout()

            }
            else if (error.request) {
                data.error = { message: error.message }
            }
            else {
                data.error = { message: error.message }
            }
        })
    } else if (method === 'patch') {
        await client.patch(url, params).then((res) => {
            data.data = res.data

        }).catch((error) => {
            if (error.response) {
                data.error = { message: error.response.data.message }
                data.statusCode = error.response.status
            }
            else if (error.request) {
                data.error = { message: error.message }
            }
            else {
                data.error = { message: error.message }
            }
        })
    } else if (method === 'put') {
        await client.put(url, params).then((res) => {
            data.data = res.data

        }).catch((error) => {

            if (error.response) {
                //data.error = { message: error.response.data.message }
                data.error = error.response.data
                data.statusCode = error.response.status

                // error.response.status === 401 && logout()

            }
            else if (error.request) {
                data.error = { message: error.message }
            }
            else {
                data.error = { message: error.message }
            }
        })
    }
    else if (method === 'get') {
        //displayMessage && notify()

        await client.get(url, {
            params: {
                ...(Object.keys(params).length && { ...params })
            }
        }).then((res) => {
            data.data = res.data
        }).catch((error) => {
            if (error.response) {
                //data.error = { message: error.response.data.message }
                data.error = error.response.data
                data.statusCode = error.response.status

                // error.response.status === 401 && logout()
            }
            else if (error.request) {
                data.error = { message: "Please check your internet connection or consult technical team" }//error.message
            }
            else {
                data.error = { message: "Please check your internet connection or consult technical team" } //error.message
            }
        })
    }
    else if (method === 'delete') {
        displayMessage && notify()
        await client.delete(url, {
            params: {
                ...(Object.keys(params).length && { ...params })
            }
        }).then((res) => {
            data.data = res.data
        }).catch((error) => {
            if (error.response) {
                data.error = { message: error.response.data.message }
                // error.response.status === 401 && logout()
            }
            else if (error.request) {
                data.error = { message: "Please check your internet connection or consult technical team" }//error.message
            }
            else {
                data.error = { message: "Please check your internet connection or consult technical team" } //error.message
            }
        })
    }

    return data
}


/**
 * 
 * @param url 
 * @param params 
 * @param method 
 * @param token 
 * @returns 
 */

export const apiRequestWithToken = async (url: string, params: any, method: string, token: any): Promise<any> => {

    const data: {[x: string]: any} = {}


    const client = axios.create({
        baseURL: "",
        headers: {
            ...(token && {'Authorization' : `Bearer ` + token})
        },
        data: params
    });


    if (method === 'post') {
        await client.post(url, params).then((res) => {
            data.data = res.data

        }).catch((error) => {

            if (error.response) {
                data.error = { message: error.response.data.message }

                // error.response.status === 401 && logout()

            }
            else if (error.request) {
                data.error = { message: error.message }
            }
            else {
                data.error = { message: error.message }
            }
        })
    } else if (method === 'patch') {
        await client.patch(url, params).then((res) => {
            data.data = res.data

        }).catch((error) => {

            if (error.response) {
                data.error = { message: error.response.data.message }

                // error.response.status === 401 && logout()

            }
            else if (error.request) {
                data.error = { message: error.message }
            }
            else {
                data.error = { message: error.message }
            }
        })
    } else if (method === 'put') {
        await client.put(url, params).then((res) => {
            data.data = res.data

        }).catch((error) => {

            if (error.response) {
                data.error = { message: error.response.data.message }

                // error.response.status === 401 && logout()

            }
            else if (error.request) {
                data.error = { message: error.message }
            }
            else {
                data.error = { message: error.message }
            }
        })
    }
    else if (method === 'get') {
        await client.get(url, {
            params: {
                ...(Object.keys(params).length && { ...params })
            }
        }).then((res) => {
            data.data = res.data
        }).catch((error) => {
            if (error.response) {
                data.error = { message: error.response.data.message }

                // error.response.status === 401 && logout()
            }
            else if (error.request) {
                data.error = { message: "Please check your internet connection or consult technical team" }//error.message
            }
            else {
                data.error = { message: "Please check your internet connection or consult technical team" } //error.message
            }
        })
    }
    else if (method === 'delete') {
        await client.delete(url, {
            params: {
                ...(Object.keys(params).length && { ...params })
            }
        }).then((res) => {
            data.data = res.data
        }).catch((error) => {
            if (error.response) {
                data.error = { message: error.response.data.message }

                // error.response.status === 401 && logout()
            }
            else if (error.request) {
                data.error = { message: "Please check your internet connection or consult technical team" }//error.message
            }
            else {
                data.error = { message: "Please check your internet connection or consult technical team" } //error.message
            }
        })
    }

    return data
}

export default apiCall;