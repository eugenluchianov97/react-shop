import {LocalStorageGetItem} from "@/helper.js";

const token = () => {
    return LocalStorageGetItem('token');
}


export const register = async (data) => {
    const config = {
        headers:{
            "Accept":"application/json",
        },
        withCredentials: true
    }

    return await axios.post('/api/auth/register',data, config).then((res) => {
        return res;
    }).catch(err => {
        return err
    })
}

export const registerConfirm = async (data) => {
    const config = {
        headers:{
            "Accept":"application/json",
        },
        withCredentials: true
    }

    return await axios.post('/api/auth/register-confirm',data, config).then((res) => {
        return res;
    }).catch(err => {
        return err
    })
}


export const login = async (data) => {
    const config = {
        headers:{
            "Accept":"application/json",
        },
        withCredentials: true
    }

    return await axios.post('/api/auth/login',data, config).then((res) => {
        return res;
    }).catch(err => {
        return err
    })
}


export const logout = async (data) => {
    const config = {
        headers:{
            "Accept":"application/json",
            "Authorization": "Bearer " + token(),
        },
        withCredentials: true
    }

    return await axios.post('/api/auth/logout',data, config).then((res) => {
        return res;
    }).catch(err => {
        return err
    })
}

export const me = async () => {
    let data = {}
    const config = {
        headers:{
            "Accept":"application/json",
            "Authorization": "Bearer " + token(),
        },
        withCredentials: true
    }

    return await axios.post('/api/auth/me',data, config).then((res) => {
        return res;
    }).catch(err => {
        return err
    })
}


export const forgotPassword = async (data) => {

    const config = {
        headers:{
            "Accept":"application/json",
        },
        withCredentials: true
    }

    return await axios.post('/api/auth/forgot-password',data, config).then((res) => {
        return res;
    }).catch(err => {
        return err
    })
}

export const resetPassword = async (data) => {

    const config = {
        headers:{
            "Accept":"application/json",
        },
        withCredentials: true
    }

    return await axios.post('/api/auth/reset-password',data, config).then((res) => {
        return res;
    }).catch(err => {
        return err
    })
}

