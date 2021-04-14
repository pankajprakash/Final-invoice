import axios from 'axios'
export const fetchLoginRequest = () => {

    return {
        type: 'FETCH_LOGIN_REQUEST'
    }
}

export const fetchLoginSuccess = (logindata) => {
    console.log(logindata)
    return {
        type: 'FETCH_LOGIN_SUCCESS',
        payload: logindata
    }
}

export const fetchLoginFailure = error => {
    return {
        type: 'FETCH_LOGIN_FAILURE',
        payload: error
    }
}




export const postLoginData = (logindata,history) => {
    console.log("form logindata ===>", logindata)
    return async (dispatch) => {
        dispatch(fetchLoginRequest);
        try {
            const x = await axios.post("http://192.168.1.78:9000/user/login", logindata)
            console.log(x.data.token,"token is from login ")
            console.log(x,"loginnnnnnnn")
            const token = x.data.token
            localStorage.setItem("user_token" ,token);
           fetchLoginSuccess(x.data.token)
           history.push('/form')
        }

        catch(err) {
             console.log('error', err);

        };
    }
}

